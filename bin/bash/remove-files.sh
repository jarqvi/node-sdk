#!/bin/bash

# Function to delete a file if it exists
delete_file_if_exists() {
    if [ -e "$1" ]; then
        sudo rm -rf "$1"
        echo "Deleted $1"
    else
        echo "$1 does not exist, skipping deletion"
    fi
}

# Directory paths where files should be deleted
directories=(
    ./object-storage
    ./dbaas
    ./paas
    ./mail
    ./dns
)

# Files to delete in each directory
files_to_delete=(
    package.json
    .gitignore
    git_push.sh
    tsconfig.json
)

# Loop through directories and delete specified files
for dir in "${directories[@]}"; do
    for file in "${files_to_delete[@]}"; do
        delete_file_if_exists "$dir/$file"
    done
done