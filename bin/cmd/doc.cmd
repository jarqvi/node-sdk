@echo off
setlocal enabledelayedexpansion

REM Function to move a file if it exists
:move_file_if_exists
if exist "%~1" if exist "%~2" (
    move "%~1" "%~2"
    echo Moved %~1 to %~2
) else (
    echo %~1 or %~2 does not exist, skipping move
)
goto :eof

REM Directory paths where files should be moved
set "directories=object-storage dbaas paas mail dns"

REM Loop through directories and move specified files
for %%d in (%directories%) do (
    REM Remove README.md file if it exists
    if exist "%%d\README.md" (
        del /q "%%d\README.md"
    )

    REM Move all markdown files except README.md file in the doc directory
    for %%f in ("%%d\*.md") do (
        if exist "doc\%%~nxf" (
            mkdir "doc\%%d\new" 2>nul
            call :move_file_if_exists "%%f" "doc\%%d\new"
        ) else (
            call :move_file_if_exists "%%f" "doc\%%d"
        )
    )
)

endlocal