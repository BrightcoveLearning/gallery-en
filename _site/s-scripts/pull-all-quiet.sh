cd ..
echo 'Check for updates in submodules'
git submodule --quiet update --remote
echo 'Checkout main for each submodle'
git submodule --quiet foreach git checkout main --quiet
echo 'Pull all submodules'
git submodule --quiet foreach git pull origin main --quiet
# git commit -a -m "Commit in pull all"
echo 'Pull parent repo'
git pull --quiet