@echo off

:: Delete package.json files
del /q /s .\object-storage\package.json
del /q /s .\dbaas\package.json
del /q /s .\paas\package.json
del /q /s .\mail\package.json
del /q /s .\dns\package.json

:: Delete .gitignore files
del /q /s .\object-storage\.gitignore
del /q /s .\dbaas\.gitignore
del /q /s .\paas\.gitignore
del /q /s .\mail\.gitignore
del /q /s .\dns\.gitignore

:: Delete .openapi-generator-ignore files
del /q /s .\object-storage\.openapi-generator-ignore
del /q /s .\dbaas\.openapi-generator-ignore
del /q /s .\paas\.openapi-generator-ignore
del /q /s .\mail\.openapi-generator-ignore
del /q /s .\dns\.openapi-generator-ignore

:: Delete git_push.sh files
del /q /s .\object-storage\git_push.sh
del /q /s .\dbaas\git_push.sh
del /q /s .\paas\git_push.sh
del /q /s .\mail\git_push.sh
del /q /s .\dns\git_push.sh

:: Delete README.md files
del /q /s .\object-storage\README.md
del /q /s .\dbaas\README.md
del /q /s .\paas\README.md
del /q /s .\mail\README.md
del /q /s .\dns\README.md

:: Delete tsconfig.json files
del /q /s .\object-storage\tsconfig.json
del /q /s .\dbaas\tsconfig.json
del /q /s .\paas\tsconfig.json
del /q /s .\mail\tsconfig.json
del /q /s .\dns\tsconfig.json

:: Display a message when finished
echo Files and directories deleted successfully.