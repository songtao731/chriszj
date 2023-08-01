
#!/bin/bash

set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io/<REPO1>
git push  origin gh-pages

cd -





# 最后依次执行以下命令：
# git add . （将本地所有文件加到仓库里）
# git commit -m "message" （设置提交信息）
# git remote add origin https://github.com/jwhuang59/vue-element-traveling.git（本地仓库链接远程仓库）
# git push -u origin gh-pages （push文件到仓库中）


# ————————————————
# 版权声明：本文为CSDN博主「戏里戏外。」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
# 原文链接：https://blog.csdn.net/hjw453321854/article/details/81780128