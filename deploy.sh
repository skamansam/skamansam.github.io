#!/usr/bin/env sh

# abort on errors
set -e

rm -rf build/*

# build
pnpm build

# navigate into the build output directory
cd build/

# if you are deploying to a custom domain
# echo 'rudeboy.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/skamansam/skamansam.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
