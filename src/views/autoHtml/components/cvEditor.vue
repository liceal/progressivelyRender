<template>
  <div class="cv-code" ref="container1">
    <!-- <pre v-html="content" /> -->
    <div v-if="isMarked" v-html="content"></div>
    <pre v-else v-html="content"></pre>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "cvEditor",
  props: {
    code: {
      type: String,
      defalut: "",
    },
    isMarked: {
      type: Boolean,
      defalut: false,
    },
  },
  computed: {
    content() {
      return this.isMarked ? marked(this.code) : this.code;
    },
  },
  methods: {
    goBottom() {
      this.$refs.container1.scrollTo({
        top: this.$refs.container1.scrollHeight,
        behavior: "smooth",
      });
    },
    goTop() {
      this.$refs.container1.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
</style>
