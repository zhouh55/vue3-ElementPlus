<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import faker = require('faker');
import faker from 'faker';
import dayJs from 'dayjs';
import highlight from 'highlight.js';
import _ from 'lodash';
@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
