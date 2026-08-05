@echo off
echo ========================================
echo   英语大师 - English Mastery Server
echo ========================================
echo.
echo Starting server at http://localhost:3000
echo Admin panel at http://localhost:3000/admin
echo.
set "PATH=D:\frankhou\nodejs\node-v20.18.1-win-x64;%PATH%"
cd /d "D:\frankhou\english-learning\server"
node server.js
pause
