const units = ['L','l','gal','GAL','mi','MI','km','KM','lbs','LBS','kg','KG']

function ConvertHandler() {

  this.getNum = function(input) {
    
    let result = input.match(/^[\d\.\/-]+/)
    if(!result) return 1
    
    result = result[0]
    
    // Check for double fraction (more than one /)
    let slashCount = (result.match(/\//g) || []).length
    if(slashCount >= 2) {
      return 'invalid number'
    }
    
    // If there's a fraction
    if(slashCount === 1) {
      const arr = result.split('/')
      if(arr.length !== 2 || !arr[0] || !arr[1]) return 'invalid number'
      const numerator = parseFloat(arr[0])
      const denominator = parseFloat(arr[1])
      if(isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        return 'invalid number'
      }
      return numerator / denominator
    }
    
    // Regular number
    const num = parseFloat(result)
    return isNaN(num) ? 'invalid number' : num
  };
  
  this.getUnit = function(input) {    

    let match = input.match(/[a-zA-Z]+$/)
    if(!match) return 'invalid unit'
    
    let unit = match[0]
    
    for (let i = 0; i < units.length; i++) {
      if(units[i].toLowerCase() === unit.toLowerCase()) {
        if(units[i].toLowerCase() === 'l') return 'L'
        return units[i].toLowerCase()
      }
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    let u = this.getUnit(initUnit)
    if(u !== 'invalid unit'){
        switch(u){
          case 'L':
            result = 'gal'
            break;
          case 'gal':
            result = 'L'
            break;
          case 'mi':
            result = 'km'
            break;
          case 'km':
            result = 'mi'
            break;  
          case 'lbs':
            result = 'kg'
            break;
          case 'kg':
            result = 'lbs'
            break;
        }
    }
    return result === undefined ? 'invalid unit' : result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    let u = this.getUnit(unit)
    if(u !== 'invalid unit'){
        switch(u){
          case 'L':
            result = 'liters'
            break;
          case 'gal':
            result = 'gallons'
            break;
          case 'mi':
            result = 'miles'
            break;
          case 'km':
            result = 'kilometers'
            break;  
          case 'lbs':
            result = 'pounds'
            break;
          case 'kg':
            result = 'kilograms'
            break;
        }
    }
    return result === undefined ? 'invalid unit' : result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    let iN = initNum
    let iU = this.getUnit(initUnit)

    if(iN !== 'invalid number' && iU !== 'invalid unit') {
      switch(iU){
        case 'gal':
          result = iN * galToL
          break
        case 'L':
          result = iN / galToL
          break
        case 'lbs':
          result = iN * lbsToKg
          break
        case 'kg':
          result = iN / lbsToKg
          break
        case 'mi':
          result = iN * miToKm
          break
        case 'km':
          result = iN / miToKm
          break
      }
    }
    return result ? result : 'Conversion error';
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {    
    returnNum = parseFloat(returnNum.toFixed(5))
    return {
            initNum: initNum,
            initUnit: initUnit, 
            returnNum: returnNum,
            returnUnit: returnUnit,
            string:
              `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`
          }
  };
  
}

module.exports = ConvertHandler;
