#!/usr/bin/env bash
LC_ALL=C

local_branch="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex="^(feature|bugfix|release|hotfix|refactor|test|doc)\/([a-z0-9_#-.\/]){3,40}$"

if [[ ! $local_branch =~ $valid_branch_regex ]]
then
    printf -- "\033[31mInvalid branch name\033[0m\n"
    printf -- "\033[37mBranch names in this project must adhere to this contract :\033[0m\n"
    printf -- "\033[33m$valid_branch_regex\033[0m\n"
    printf -- "\033[37mPlease rename your branch using \033[33m$ git branch -m <new-name>\033[0m.\n"
    exit 1
fi

exit 0