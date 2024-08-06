
export const style1 = `
/* 大家好，我是米勒
 * 疫情后复工复产，好多公司都在招聘，你是不是也在准备简历呀。
 * 说做就做，我也来写一份简历！
 */

/* 首先给所有元素加上过渡效果 */
*{
  transition:.5s all;
}

/* 白色背景太单调了，我们来点背景 */
.main,
body{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #002b36;
}

/* 调整文字位置 */
.css-code pre{
  color: white;
  font-size: 1.5em;
  margin: 0px 20px;
}

/* 画一个框框 */
.css-code{
  overflow:auto;
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  margin: 20px;
  width: 48vw;
  height: 80vh;
  padding-bottom: 3rem;
  box-sizing: border-box;
}
.css-code>pre{
  text-wrap: wrap;
}

/* 代码高亮 */
.token.selector{ color: #268bc3; }
.token.property{ color: #858d21; }
.token.punctuation{ color: #93a1a1; }
.token.function{ color: #619496; }
.token.comment{ color: #586e75; }
.css-code pre{ color: #2aa198; }

/* 去掉滚动条 */
.css-code::-webkit-scrollbar {
  display: none;
}
`

export const style2 = `
/* 接下来给自己准备一份简历 */
.cv-code{
  width: 45vw;
  height: 80vh;
  background-color: white;
  overflow: auto;
  padding-bottom: 3rem;
}

.cv-code>div{
  text-wrap: wrap;
}

/* 去掉滚动条 */
.cv-code::-webkit-scrollbar {
  display: none;
}
`

export const style3 = `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */`

export const style4 = `
/* 再对HTML加点样式 */
.cv-code{
  width: 45vw;
  height: 80vh;
  background-color: white;
  margin: 20px;
  padding: 0px 15px;
  border-radius: 8px;
  overflow: auto;
  white-space: nowrap;
}

.cv-code h1{
  display: inline-block;
  border-bottom: 1px solid black;
  padding: 0px 5px;
  margin: 10px 0px;
}

.cv-code ul{
  margin: 0px;
  padding: 0px 15px;
}

.cv-code li{
  margin: 5px 0px;
}

.cv-code li code{
  background-color: #f3f4f4;
  padding: 1px 3px;
  border-radius: 3px;
}

`

export const style5 = `
/* 尝试立体一点 */
.main{
  justify-content: center;
}
.css-code{
  transform: skew(-5deg, -5deg) rotate(-5deg);
  height: 65vh;
  width: 50vh;
  border: none;
  border-right: 1px solid white;
  border-bottom: 1px solid white;

}
.cv-code{
  transform: skew(5deg, 5deg) rotate(5deg);
  height: 67vh;
  width: 50vh;
  box-shadow: 20px -20px 10px #ccc;
}
/* 给简历提供一个反馈 */
.cv-code:hover{
  box-shadow: 10px -10px 5px #ccc;
  transform: skew(5deg, 5deg) rotate(5deg) translateY(-10px);
}

/* 好啦～😊 */
`