if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd "path/to/your/nodejs/folder"

start /min cmd /C "node index.js"
goto :EOF
:minimized
