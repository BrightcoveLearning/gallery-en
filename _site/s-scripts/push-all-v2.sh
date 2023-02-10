echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
read COMMITMESSAGE 
cd ..
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main 
git pull
bundle update
bundle exec jekyll build --trace --incremental
setopt localoptions rmstarsilent
rm -f _site/feed.xml
bold=`tput bold`
normal=`tput sgr0`
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main 
git pull
git add .
git commit -m $COMMITMESSAGE
git push
git submodule foreach "git fetch origin main"
git submodule foreach "git checkout main ; git pull ; git add . ; git commit -m '$COMMITMESSAGE' ; git push"
git add .
git commit -m $COMMITMESSAGE
git push
