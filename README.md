# bug-report-vue-cli4-pages-problem

vue-cli4使用pages打包会出现加载其他页面的css、js的问题

关联issue [#4819](https://github.com/vuejs/vue-cli/issues/4819)

复现步骤：

- `npm i`
- `npm run build`
- 查看dist下的mobile.html，发现加载了iview的文件
