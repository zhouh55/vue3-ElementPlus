<template>
  <div class="home">
    <div>
      {{ messageTest }}
      <hello-world />
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    HelloWorld
  },

  setup(props, ctx) {
    console.log(ctx);

    return {
      messageTest: 111
    };
  }
});
</script>
