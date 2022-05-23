git submodule add https://github.com/BrightcoveLearning/s-scripts
cd _includes
git submodule add https://github.com/BrightcoveLearning/s-jekyll-page-includes
git submodule add https://github.com/BrightcoveLearning/s-support
cd ..
cd assets/images
git submodule add https://github.com/BrightcoveLearning/s-support-img
git submodule add https://github.com/BrightcoveLearning/s-feather-img
cd ..
git submodule update --init --recursive