#!/bin/bash

# Function to move a file if it exists
move_file_if_exists() {
    if [ -e "$1" ] && [ -e "$2" ]; then
        sudo mv "$1" "$2"
        echo "Moved $1 to $2"
    else
        echo "$1 or $2 does not exist, skipping move"
    fi
}

# Directory paths where files should be moved
directories=(
    object-storage
    dbaas
    paas
    mail
    dns
)

# Loop through directories and move specified files
for dir in "${directories[@]}"; do
    # Remove README.md file if it exists
    if [ -e ./"$dir"/README.md ]; then
        sudo rm -rf ./"$dir"/README.md
    fi

    # Move all mark down files except README.md file in the doc directory
    for md_file in "$dir"/*.md; do
        if [ ./doc/"$md_file" ]; then
            mkdir -p ./doc/"$dir/new"
            move_file_if_exists ./"$md_file" ./doc/"$dir/new"
        else 
            move_file_if_exists ./"$md_file" ./doc/"$dir"
        fi
    done
done