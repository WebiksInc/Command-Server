if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd "C:\Users\ilanit\Code\chrome\NodeSolution"

start /min cmd /C "node index.js"
goto :EOF
:minimized