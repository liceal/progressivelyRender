# progressivelyRender

逐步渲染代码

## 更改简历md请求地址
src/views/autoHtml/index.vue
```
created() {
  fetch("https://raw.githubusercontent.com/liceal/cv/master/src/static/CV.md", { //替换成你的简历地址
    method: "get",
  })
    .then((res) => res.text())
    .then((res) => {
      this.cv = res;
      console.log(res);
      this.renderEdit();
    });
},
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

