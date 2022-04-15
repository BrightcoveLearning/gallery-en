bold=`tput bold`
normal=`tput sgr0`
echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
read COMMITMESSAGE
git pull
bundle update
bundle exec jekyll build --trace
setopt localoptions rmstarsilent
rm -f _site/feed.xml
git add --all
git commit --all -m $COMMITMESSAGE
git push