git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
echo 'local default branch set to main'
cd ~/Library/Caches/com.github.GitHubClient
rm *.*
echo 'local caches cleaned'
cd ~/Library/Application\ Support/GitHub\ Desktop/Cache/Cache_Data
rm *
echo 'local app caches cleaned'
