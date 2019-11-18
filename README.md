### 命令
```
  npm i // 安装依赖
  npm run build:prod // 生产
  npm run build:local // 开发
```

### npm run build:local
访问方式:
```
local:8099/index.html
local:8099/date-picker.html
```
具体路由需要查阅：build/router.js
```
其中 chunkAndRouteName 是路由的名字
dirRootName 是文件路径的名字，需要参照以及创建的路由以及文件夹
```
