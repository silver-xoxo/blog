@echo off
cd /d "%~dp0"
if not exist "node_modules\" (
    echo First time on this PC! Installing Quartz dependencies...
    call npm install
)
echo Starting local Quartz preview server...
call npx quartz build -d "../Website" --serve
pause