echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
read COMMITMESSAGE 
cd ..
git pull --quiet
bundle update
bundle exec jekyll build --trace --incremental
setopt localoptions rmstarsilent
rm -f _site/feed.xml
bold=`tput bold`
normal=`tput sgr0`
git pull --quiet
git add .
git commit -m $COMMITMESSAGE --quiet
git push --quiet
git submodule --quiet foreach "git fetch --quiet origin main"
git submodule --quiet foreach "git checkout --quiet main ; git pull --quiet; git add . ; git commit -m '$COMMITMESSAGE'  --quiet; git push --quiet"
git add .
git commit -m$COMMITMESSAGE  --quiet 
git push --quiet