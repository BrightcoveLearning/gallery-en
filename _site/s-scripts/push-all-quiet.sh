echo "Enter your ${bold}COMMIT MESSAGE${normal}:"
read COMMITMESSAGE 
cd ..
echo 'Pulling parent repo'
git pull --quiet
echo 'Building Jekyll'
bundle update > /dev/null
bundle exec jekyll build --trace --incremental > /dev/null
setopt localoptions rmstarsilent
rm -f _site/feed.xml
bold=`tput bold`
normal=`tput sgr0`
echo 'Added changed files in parent repo'
git pull --quiet
git add . > /dev/null
echo 'Committing files in parent repo'
git commit -m '$COMMITMESSAGE' --quiet
echo 'Pushing files in parent repo'
git push --quiet
echo 'Getting all submodules'
git submodule --quiet foreach "git fetch origin main --quiet"
echo 'Writing to submouldes'
git submodule --quiet foreach "git checkout --quiet main  ; echo 'a' ; git pull --quiet; echo 'b' ;  git add . > /dev/null; echo 'c' ; git commit  --quiet -m '$COMMITMESSAGE'; echo 'd' ;  git push --quiet" --quiet
echo 'Syncing changed submodules with parent repo'
git add . > /dev/null
echo 'Committing changes'
git commit -m '$COMMITMESSAGE' --quiet
echo 'Pushing parent repo changes'
git push --quiet
