git submodule add https://github.com/BrightcoveLearning/s-scripts
cd _includes
git submodule add https://github.com/BrightcoveLearning/s-jekyll-page-includes
git submodule add https://github.com/BrightcoveLearning/s-support
git submodule add https://github.com/BrightcoveLearning/s-training
cd ..
cd assets/images
git submodule add https://github.com/BrightcoveLearning/s-support-img
git submodule add https://github.com/BrightcoveLearning/s-feather-img
git submodule add https://github.com/BrightcoveLearning/s-training-img
cd ..
echo 'Adding site assets'
git submodule add https://github.com/BrightcoveLearning/s-site-assets-favicons
git submodule add https://github.com/BrightcoveLearning/s-site-assets-stylesheets
git submodule add https://github.com/BrightcoveLearning/s-site-assets-scripts
git submodule add https://github.com/BrightcoveLearning/s-site-assets-images
cd ..
git submodule update --init --recursive