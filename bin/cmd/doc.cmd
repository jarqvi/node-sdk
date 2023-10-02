@echo off

REM Function to move a file if it exists
:move_file_if_exists
if exist %1 (
    if exist %2 (
        move /y %1 %2
        echo Moved %1 to %2
    ) else (
        echo %2 does not exist, skipping move
    )
) else (
    echo %1 does not exist, skipping move
)
goto :eof

REM Directory paths where files should be moved
set "directories=object-storage dbaas paas mail dns"

REM Remove README.md files if they exist
for %%d in (%directories%) do (
    if exist %%d\README.md (
        del /q %%d\README.md
    )
)

REM Loop through directories and move specified files
for %%d in (%directories%) do (
    for %%f in (%%d\*.md) do (
        call :move_file_if_exists "%%~f" ".\doc\%%~d"
    )
)