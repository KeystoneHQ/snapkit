# snapkit

## 使用

### 引入CSS
`import 'snapkit/dist/style.css'`
### 引入组件
`import 'snapkit'`
### 文档
暂无对外开放的文档，需要使用storybook自行构建。


## 使用本地包

### 安装本地包管理器
`npm i yalc -g`

### 发布包
在snapkit目录执行：
`npm run publish:local`

### 项目中添加依赖
在项目目录中执行：
`yalc add snapkit --link`


## 开发

### 安装
`npm i`
### 启动
`npm run dev`
### 发布
`npm run build`

## 开发规范
1. storybook文件以“xxx.stories.tsx”命名；
2. css module以“xxx.module.scss”命名；
