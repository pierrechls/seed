cd doc
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m ":sparkles: Update doc"
git push -f git@github.com:pierrechls/seed.git master:gh-pages
