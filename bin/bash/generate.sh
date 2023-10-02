#!/bin/bash

# Working directory
current_directory=$(pwd)

# Check if docker-compose.yml or docker-compose.yaml exists
if [ -e "$current_directory/docker-compose.yml" ] || [ -e "$current_directory/docker-compose.yaml" ]; then
    docker compose up && docker compose rm -fsv
else
    echo "docker-compose.yml or docker-compose.yaml not found."
fi