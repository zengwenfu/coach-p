# coach-p
## 安装node
1. 安装nvm(node管理工具)
2. 安装node
## clone项目
1. cd进入一个工作目录
2. git clone https://github.com/zengwenfu/coach-p.git
3. cd coach-p
4. npm install
5. npm run start
## 使用
运行npm run start之后，会启动一个本地服务器，并且自动用浏览器打开http://localhost:3000，
此时你放在src目录项的所有html都可以通过本地服务器访问，例如：index.html可以通过
http://localhost:3000/index.html访问

把html文件放在src目录下，css、js放在src/css、src/js下，修改了会直接同步到服务器上看到效果
