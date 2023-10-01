#!/bin/bash

# Delete package.json files
sudo rm -rf ./object-storage/package.json
sudo rm -rf ./dbaas/package.json
sudo rm -rf ./paas/package.json
sudo rm -rf ./mail/package.json
sudo rm -rf ./dns/package.json

# Delete .gitignore files
sudo rm -rf ./object-storage/.gitignore
sudo rm -rf ./dbaas/.gitignore
sudo rm -rf ./paas/.gitignore
sudo rm -rf ./mail/.gitignore
sudo rm -rf ./dns/.gitignore

# Delete .openapi-generator-ignore files
sudo rm -rf ./object-storage/.openapi-generator-ignore
sudo rm -rf ./dbaas/.openapi-generator-ignore
sudo rm -rf ./paas/.openapi-generator-ignore
sudo rm -rf ./mail/.openapi-generator-ignore
sudo rm -rf ./dns/.openapi-generator-ignore

# Delete git_push.sh files
sudo rm -rf ./object-storage/git_push.sh
sudo rm -rf ./dbaas/git_push.sh
sudo rm -rf ./paas/git_push.sh
sudo rm -rf ./mail/git_push.sh
sudo rm -rf ./dns/git_push.sh

# Delete README.md files
sudo rm -rf ./object-storage/README.md
sudo rm -rf ./dbaas/README.md
sudo rm -rf ./paas/README.md
sudo rm -rf ./mail/README.md
sudo rm -rf ./dns/README.md

# Delete tsconfig.json files
sudo rm -rf ./object-storage/tsconfig.json
sudo rm -rf ./dbaas/tsconfig.json
sudo rm -rf ./paas/tsconfig.json
sudo rm -rf ./mail/tsconfig.json
sudo rm -rf ./dns/tsconfig.json

# Display a message when finished
echo Files and directories deleted successfully.