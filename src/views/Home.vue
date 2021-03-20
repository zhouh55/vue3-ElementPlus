<template>
  <div class="home">
    <div>
      {{ messageTest }}
      <hello-world />
      <button @click="clickMe">点我</button>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { defineComponent } from 'vue';
import _ from 'lodash';
console.log(_.prototype);
import * as element from 'element-plus';
console.log(element);

import * as highlight from 'highlight.js';
import * as ol from 'ol';
console.log(highlight, ol);

export default defineComponent({
  components: {
    HelloWorld
  },
  // emits: [ 'addBook' ],
  // emits 校验 emit 提交事件的
  // emits: {
  //   addBook: (polyary: Array<string>) => {
  //     console.log(polyary);

  //     return true;
  //   } // 必须箭头函数
  // },

  setup(props, ctx) {
    console.log(ctx);

    const clickMe = () => {
      // ctx.emit('addBook', ['11']);
      // ctx.emit('non-declared-event');
    };
    return {
      messageTest: 111,
      clickMe
    };
  }
});
</script>
