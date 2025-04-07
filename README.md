# 自己搭建的脚手架模版 Vue 3.4 + Vite 4 + TypeScript (node 16.20.0)

# 一、eslint和prettier的区别？

- eslint属于代码检查工具，检查js语法以及少部分格式问题，语法对了就能保证代码正常运行，格式问题属于其次。
  .eslintrc.cjs的配置格式，注意点：在 package.json 中指定 "type":"module"，然后新建.eslintrc.cjs文件
- prettier属于格式化工具，统一格式，它就把eslint没干好的事接着干。

# 二、git 提交

1、husky：一个为git客户端增加hook的工具
2、lint-staged：仅对Git 代码暂存区文件进行处理，配合husky使用
3、@commitlint/cli：让commit信息规范化，它是一个基于 Node.js 的工具
git commit -m <type>[optional scope]: <description>

- type：提交的类型（如新增、修改、更新等）
- optional scope：涉及的模块，可选
- description：任务描述
  注意：冒号后面有空格

# 三、package.json中添加"type": "module"代表什么？

代表所有.js文件只能用 esm 语法

# 四、scripts命令的作用

- npm run ts：检查ts错误
- npm run pre：prettier格式化所有文件
- npm run lint：检查语法
- npm run lint:fix：检查并修复自动语法错误

# 五、项目里用ts的好处是？

- 1、类型检查；2、语法提示（代码里敲点后，就会提示对象拥有的属性）

# 六、注意点

- 1、vetur 和 volar 冲突问题？
  vetur 插件会把 v3 项目当成 v2 去检查，然后出现了 eslint 报错，建议 v3 项目关闭 vetur，打开 volar 插件(它已废弃，现在用 vue-official 插件)
- 2、tsconfig.json(此文件是浏览器环境下 ts 的配置)
- 3、tsconfig.node.json(此文件是 node 环境下 ts 的配置)
