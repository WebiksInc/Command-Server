if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

start /min cmd /C "node index.js"
goto :EOF
:minimized
