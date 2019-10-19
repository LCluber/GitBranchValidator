#!/usr/bin/env bash

 # MIT License
 #
 # Copyright (c) 2018 Ludovic CLUBER
 #
 # Permission is hereby granted, free of charge, to any person obtaining a copy
 # of this software and associated documentation files (the "Software"), to deal
 # in the Software without restriction, including without limitation the rights
 # to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 # copies of the Software, and to permit persons to whom the Software is
 # furnished to do so, subject to the following conditions:
 #
 # The above copyright notice and this permission notice (including the next
 # paragraph) shall be included in all copies or substantial portions of the
 # Software.
 #
 # THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 # IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 # FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 # AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 # LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 # OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 # SOFTWARE.
 #
 # https://github.com/LCluber/GitBranchValidator

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