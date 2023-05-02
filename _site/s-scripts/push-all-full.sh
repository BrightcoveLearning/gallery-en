bold=`tput bold`
normal=`tput sgr0`
# uf NB exists this is a nightly build
echo $0
if [[ $0 == nightly-build.sh ]]
then
  COMMITMESSAGE="Nightly Build"
  echo $COMMITMESSAGE
else
  echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
  read COMMITMESSAGE
fi 
cd ..
git pull
bundle update
bundle exec jekyll build --trace
setopt localoptions rmstarsilent
rm -f _site/feed.xml
git pull
git add .
git commit -m $COMMITMESSAGE
git push
git submodule foreach "git fetch origin main"
git submodule foreach "git checkout main ; git pull ; git add . ; git commit -m '$COMMITMESSAGE' ; git push"
git add .
git commit -m $COMMITMESSAGE
git push