#!/usr/bin/env sh

# abort on errors
set -e

# clear out deploy directory
rm -rf docs/*

# build
yarn build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
# cp CNAME docs/CNAME

# navigate into the build output directory
cd docs

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/skamansam/skamansam.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
