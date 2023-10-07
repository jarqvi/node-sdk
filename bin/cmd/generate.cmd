@echo off
setlocal

set "current_directory=%cd%"

if exist "%current_directory%\docker-compose.yml" (
    docker compose up && docker compose rm -fsv
) else if exist "%current_directory%\docker-compose.yaml" (
    docker compose up && docker compose rm -fsv
) else (
    echo docker-compose.yml or docker-compose.yaml not found.
)

endlocal