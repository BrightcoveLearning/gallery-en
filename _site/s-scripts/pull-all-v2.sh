# Testing new pull all
cd ..
git submodule update --remote
git submodule foreach git checkout main
git submodule foreach git pull origin main 
# git commit -a -m "Commit in pull all"
git pull
