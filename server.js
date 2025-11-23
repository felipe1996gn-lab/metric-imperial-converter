'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const expect      = require('chai').expect;
const cors        = require('cors');
// load env vars from .env for local dev & testing; fall back to sample.env if .env not found
require('dotenv').config({path: __dirname + '/.env'});
require('dotenv').config({path: __dirname + '/sample.env'});

const apiRoutes         = require('./routes/api.js');
const fccTestingRoutes  = require('./routes/fcctesting.js');
const runner            = require('./test-runner');

let app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;

//Start our server and tests!
if (require.main === module) {
  const server = app.listen(port, function () {
    console.log("Listening on port " + port);
    console.log("Open http://localhost:" + port + " in your browser");
    if(process.env.NODE_ENV==='test') {
      console.log('Running Tests...');
      setTimeout(function () {
        try {
          runner.run();
        } catch(e) {
          let error = e;
            console.log('Tests are not valid:');
            console.log(error);
        }
      }, 1500);
    }
  });

  server.on('error', function(err){
    if(err && err.code === 'EADDRINUSE'){
      console.error(`Port ${port} is already in use.`);
      console.error('To find and kill the process on Windows:');
      console.error(`  netstat -ano | findstr :${port}`);
      console.error('  taskkill /PID <PID> /F');
      process.exit(1);
    } else {
      console.error(err);
      process.exit(1);
    }
  });
}

module.exports = app; //for testing
