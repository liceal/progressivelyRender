export const cv=`
# 联系方式

* 手机：13250894776
* Email：675024132@qq.com
* QQ/微信号：675024132 / 13250894776

# 个人信息

* 林贤澳 / 男 / 1999
* 温州职业技术学院 / 软件技术
* 个人网站：[http://linxianao.com](http://linxianao.com)
* 技术博客： [https://liceal.github.io/](https://liceal.github.io/)
* Github：[https://github.com/liceal](https://github.com/liceal)
* 期望职位：Web前端开发工程师
* 期望薪资：税后月薪4k~7k，特别喜欢的公司可例外
* 期望城市：杭州，温州

# 技能清单

* 熟练使用CSS，ES6，Vue全家桶，了解JavaScript闭包，TypeScript，了解函数柯里化
* Web开发：HTML / JS / CSS / PHP
* Web框架：Vue Cli 2.0-3.0 / uni-app / 微信小程序 / React / Laravel
* UI框架：Element-Ui / Ant-Design-Vue
* 前端工具：Less / Axios / Vuex / Vue-Router 
* 其他语言：Python / Java

# 实习经历

## 易思网络科技有限公司 （ 2019年3月 ~ 2020年1月 ）

### 督导管理系统

* 开发环境：\`Vue\`+\`AngDesign\`+\`SpringBoot\`+\`MySql\`

  * 负责大部分前端UI，数据交互，逻辑编写，有项目抗压经验

* **工作内容:**
  * 负责快速构建高质量页面
  * 对接处理数据
  * 分辨率调试及适配

* **解决难点:**
    * 不同角色对应不同权限逻辑处理
    * 高度组件化、模块化形成界面统一风格
    * 文件上传与下载
    * 适配不同设备分辨率

# 奖励荣誉

学术类：国家励志奖学金(1次)、班级一等奖(2次)
实践类：人工智能团体赛三等奖，程序设计团体赛三等奖， ACM校赛团体三等。
技能证书：PAT乙级，二级C

<hr style="display: block;
    width: 14%;
    margin: 40px auto 34px;
    border: 0 none;
    border-top: 3px solid #dededc;"/>

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事
`

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
  padding-bottom: 20px;
  box-sizing: border-box;
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

.cv-code::-webkit-scrollbar {
  display: none;
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
  padding: 50px 0px;
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
  box-shadow: 10px -10px 10px #ccc;
  transform: skew(5deg, 5deg) rotate(5deg) translateY(-10px);
}

`