cd ..
echo 'Check for updates in submodules'
git submodule update --remote
echo 'Checkout main for each submodule'
git submodule foreach git checkout main --quiet
echo 'Pull all submodules'
git submodule foreach git pull origin main --quiet
# git commit -a -m "Commit in pull all"
echo 'Pull parent repo'
git pull --quiet