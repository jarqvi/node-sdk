@echo off

REM Function to delete a file if it exists
:delete_file_if_exists
if exist %1 (
    del /q %1
    echo Deleted %1
) else (
    echo %1 does not exist, skipping deletion
)
goto :eof

REM Directory paths where files should be deleted
set "directories=./object-storage ./dbaas ./paas ./mail ./dns"

REM Files to delete in each directory
set "files_to_delete=package.json .gitignore git_push.sh tsconfig.json"

REM Loop through directories and delete specified files
for %%d in (%directories%) do (
    for %%f in (%files_to_delete%) do (
        call :delete_file_if_exists "%%~d\%%~f"
    )
)