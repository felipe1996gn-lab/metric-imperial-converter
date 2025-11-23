# 🚂 Guía Completa para Desplegar en Railway

## ✅ Preparación Completada
- ✅ Git inicializado
- ✅ .gitignore creado
- ✅ Primer commit realizado

---

## 📝 Pasos para Desplegar en Railway

### 1️⃣ Crear cuenta en Railway
1. Ve a **https://railway.app**
2. Click en **"Login"** (esquina superior derecha)
3. Selecciona **"Login with GitHub"**
4. Autoriza Railway a acceder a tu cuenta de GitHub

---

### 2️⃣ Subir tu proyecto a GitHub

#### Opción A: Crear repositorio nuevo en GitHub
1. Ve a **https://github.com/new**
2. Nombre del repositorio: `metric-imperial-converter`
3. Deja todo en configuración por defecto
4. Click **"Create repository"**

#### Opción B: Desde la terminal (después de crear el repo)
```powershell
# Añadir el repositorio remoto (reemplaza TU-USUARIO con tu username de GitHub)
git remote add origin https://github.com/TU-USUARIO/metric-imperial-converter.git

# Renombrar rama a main (si es necesario)
git branch -M main

# Subir el código
git push -u origin main
```

---

### 3️⃣ Desplegar en Railway

1. **Ir al Dashboard de Railway**
   - https://railway.app/dashboard

2. **Click en "New Project"**

3. **Seleccionar "Deploy from GitHub repo"**

4. **Conectar tu repositorio**
   - Si es tu primera vez, Railway pedirá permisos
   - Click "Configure GitHub App"
   - Selecciona tu repositorio `metric-imperial-converter`

5. **Seleccionar el repositorio**
   - Busca `metric-imperial-converter`
   - Click en él

6. **Railway detectará automáticamente:**
   - ✅ Que es un proyecto Node.js
   - ✅ Leerá tu `package.json`
   - ✅ Ejecutará `npm install`
   - ✅ Iniciará con `npm start`

7. **Esperar el despliegue** (1-2 minutos)
   - Verás logs en tiempo real
   - Cuando veas "Listening on port..." está listo

---

### 4️⃣ Obtener la URL Pública

1. **En el dashboard de tu proyecto en Railway:**
   - Click en tu servicio (debería decir "metric-imperial-converter")

2. **Click en la pestaña "Settings"**

3. **Scroll hasta "Networking"**

4. **Click en "Generate Domain"**
   - Railway creará una URL como: `https://metric-imperial-converter-production.up.railway.app`

5. **Copiar la URL completa**

---

### 5️⃣ Verificar que Funciona

Abre tu navegador y prueba:

```
https://TU-URL.up.railway.app/api/convert?input=10L
```

Deberías ver:
```json
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}
```

---

### 6️⃣ Enviar a FreeCodeCamp

1. Ve a tu challenge de FreeCodeCamp
2. En el campo **"Solution Link"** pega tu URL de Railway:
   ```
   https://TU-PROYECTO.up.railway.app
   ```
3. Click **"I've completed this challenge"**
4. ¡Todos los tests deberían pasar! ✅

---

## 🔧 Solución de Problemas

### ❌ "Application failed to respond"
- Verifica que el puerto esté bien configurado
- Railway asigna el puerto automáticamente vía `process.env.PORT`
- Tu `server.js` ya está configurado correctamente:
  ```javascript
  const port = process.env.PORT || 3000;
  ```

### ❌ "Build failed"
- Revisa los logs en Railway
- Asegúrate que `package.json` tenga:
  ```json
  "scripts": {
    "start": "node server.js"
  }
  ```

### ❌ "Cannot find module"
- Railway ejecuta `npm install` automáticamente
- Si falta algo, verifica tu `package.json`

---

## 🔄 Para Actualizar tu Proyecto

Si haces cambios en tu código:

```powershell
# 1. Guardar cambios
git add .
git commit -m "Descripción de los cambios"

# 2. Subir a GitHub
git push

# 3. Railway detectará y desplegará automáticamente (CD)
```

---

## 💡 Alternativa Rápida: Railway CLI

Si prefieres usar la terminal:

```powershell
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Inicializar proyecto
railway init

# Desplegar
railway up
```

---

## 📌 Información Importante

- **Gratis**: Railway da 500 horas gratis al mes
- **Automático**: Cada push a GitHub redespliega automáticamente
- **Logs**: Puedes ver logs en tiempo real en el dashboard
- **Variables**: Si necesitas variables de entorno, añádelas en Settings → Variables

---

## ✅ Checklist Final

- [ ] Cuenta de Railway creada y conectada a GitHub
- [ ] Repositorio de GitHub creado
- [ ] Código subido a GitHub (`git push`)
- [ ] Proyecto desplegado en Railway
- [ ] Dominio generado
- [ ] URL probada en el navegador
- [ ] URL enviada a FreeCodeCamp
- [ ] Tests pasando ✅

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa los logs en Railway Dashboard
2. Verifica que tu repositorio de GitHub tenga todos los archivos
3. Asegúrate que `npm start` funcione localmente
4. Contacta soporte de Railway: https://help.railway.app

---

¡Tu proyecto está listo para desplegarse! 🚀
