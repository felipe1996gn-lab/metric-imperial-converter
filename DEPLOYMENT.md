# 🚀 Cómo Desplegar tu Proyecto para FreeCodeCamp

Tu proyecto funciona perfectamente en **localhost:3000**, pero FreeCodeCamp necesita acceder a él desde Internet. Aquí están tus opciones:

---

## ✅ Opción 1: Replit (MÁS FÁCIL - RECOMENDADO)

### Pasos:
1. Ve a **https://replit.com** y crea una cuenta gratis
2. Click en **"+ Create Repl"**
3. Selecciona **"Import from GitHub"** o **"Upload files"**
4. Si subes archivos:
   - Arrastra toda la carpeta del proyecto
   - O haz zip y súbelo
5. Replit detectará automáticamente que es Node.js
6. Click **"Run"** (botón verde)
7. Replit te dará una URL pública como: `https://tu-proyecto.replit.app`
8. **Copia esa URL** y pégala en el campo "Solution Link" de FreeCodeCamp
9. Click "I've completed this challenge"

### Notas para Replit:
- NO necesitas archivo `.env` en Replit
- Replit asigna el puerto automáticamente
- La app se mantiene activa mientras la uses

---

## ✅ Opción 2: Railway.app (Fácil y Gratis)

### Pasos:
1. Ve a **https://railway.app**
2. Regístrate con GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Sube tu proyecto a GitHub primero si no lo has hecho
5. Selecciona el repositorio
6. Railway lo desplegará automáticamente
7. Te dará una URL como: `https://tu-proyecto.up.railway.app`
8. Usa esa URL en FreeCodeCamp

---

## ✅ Opción 3: Glitch (También fácil)

### Pasos:
1. Ve a **https://glitch.com**
2. Click **"New Project"** → **"Import from GitHub"**
3. Sube tu código
4. Glitch ejecutará automáticamente
5. Te dará URL como: `https://tu-proyecto.glitch.me`

---

## ✅ Opción 4: ngrok (TEMPORAL - Solo para testing)

### Pasos:
1. Descarga ngrok: **https://ngrok.com/download**
2. Extrae el archivo `ngrok.exe`
3. Abre PowerShell en la carpeta donde está `ngrok.exe`
4. Asegúrate que tu servidor esté corriendo en puerto 3000
5. Ejecuta:
   ```powershell
   .\ngrok.exe http 3000
   ```
6. Verás una URL como: `https://abc123.ngrok.io`
7. **IMPORTANTE**: Esta URL solo funciona mientras ngrok esté corriendo
8. Usa esa URL en FreeCodeCamp

### Desventajas de ngrok:
- ❌ URL temporal (cambia cada vez que reinicias)
- ❌ Requiere mantener tu computadora encendida
- ❌ Se desconecta después de 2 horas (versión gratuita)

---

## 📝 Tu Proyecto está Listo

Tu código YA PASA todos los tests:
- ✅ 16 unit tests passing
- ✅ 5 functional tests passing
- ✅ Todas las conversiones funcionan
- ✅ Validaciones correctas
- ✅ Formato de respuesta correcto

**Solo necesitas desplegarlo a Internet para que el validador de FCC pueda acceder.**

---

## 🎯 Recomendación Final

**USA REPLIT** - Es la opción más rápida y fácil para proyectos de FreeCodeCamp.

1. Ve a https://replit.com
2. Sube tu proyecto
3. Click "Run"
4. Copia la URL
5. Pégala en FCC
6. ¡Listo! ✅

---

## ❓ Si tienes problemas en Replit

Asegúrate que tu `.env` tenga:
```
PORT=3000
```

Y que `server.js` use:
```javascript
const port = process.env.PORT || 3000;
```

(Ya está configurado correctamente en tu proyecto)
