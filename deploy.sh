
#!/bin/bash

set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f https://github.com/songtao731/chris-ui.git
git push -f https://songtao731.github.io

cd -
