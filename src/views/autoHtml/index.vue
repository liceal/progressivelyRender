<template>
  <div class="main">
    <div class="style" v-html="codeInStyleTag" />
    <StyleEditor ref="StyleEditor" :code="styleCode" />
    <CvEditor ref="CvEditor" :code="cvCode" :isMarked="isMarked" />
  </div>
</template>

<script>
import StyleEditor from "./components/styleEditor";
import CvEditor from "./components/cvEditor";
import { style1, style2, style3, style4, style5 } from "./code";

export default {
  name: "autoHtml",
  components: {
    StyleEditor,
    CvEditor,
  },
  data() {
    return {
      styleCode: "",
      cvCode: "",
      isMarked: false,
      cv: "",
    };
  },
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
  methods: {
    async renderEdit() {
      await this.progressivelyShow(style1, "styleCode", 30, "StyleEditor");
      await this.progressivelyShow(style2, "styleCode", 30, "StyleEditor");
      await this.progressivelyShow(this.cv, "cvCode", 10, "CvEditor");
      await this.$refs.CvEditor.goTop();
      await this.progressivelyShow(style3, "styleCode", 30, "StyleEditor");
      await this.$nextTick(() => {
        this.isMarked = true;
      });
      await this.progressivelyShow(style4, "styleCode", 30, "StyleEditor");
      await this.progressivelyShow(style5, "styleCode", 30, "StyleEditor");
    },
    /**
     * TotalCode 总Code
     * ShowCodeKey 实时渲染code
     * Delay 渲染延迟
     * DomName 渲染dom的ref名字
     */
    progressivelyShow(TotalCode, ShowCodeKey, Delay, DomName = "") {
      return new Promise((resolve, reject) => {
        let CodeLength = TotalCode.length;
        let showNextCode = async (nextCodeIndex) => {
          if (nextCodeIndex <= CodeLength) {
            let nextCode = TotalCode[nextCodeIndex] ?? "";
            if (nextCode === "\n" && this.$refs[DomName]) {
              this.$nextTick(() => {
                this.$refs[DomName].goBottom();
              });
            }
            let DelayTime = {
                "}\n": 100,
                "*/": 500,
              },
              SpecialDelay =
                DelayTime[
                  TotalCode.substring(nextCodeIndex - 1, nextCodeIndex + 1)
                ] ?? 0;
            this[ShowCodeKey] += nextCode;
            setTimeout(() => {
              showNextCode(nextCodeIndex + 1);
            }, Delay + SpecialDelay);
          } else {
            setTimeout(resolve, 500);
          }
        };
        showNextCode(0);
      });
    },
  },
  computed: {
    codeInStyleTag() {
      return `<style>${this.styleCode}</style>`;
    },
  },
};
</script>

<style lang="less">
.main {
  width: 100%;
  float: left;
  text-align: left;
}
.style {
  display: none;
}
</style>
