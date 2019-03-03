#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m ":notebook_with_decorative_cover: Update documentation"
git push -f git@github.com:pierrechls/seed.git master:gh-pages

cd -
