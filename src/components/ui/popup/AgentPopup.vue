<script>
import { ref } from 'vue';
export default {
  props: {
    isAgent: Boolean,
  },
  setup(props) {
    const agentPopup = ref(props.isAgent);
    return {
      agentPopup,
    };
  },
};
</script>

<template>
  <div class="agent" v-if="agentPopup">
    <div class="agent--container scroll-container">
      <i class="ico ico-close" @click="agentPopup = false"></i>
      <slot name="title" />
      <slot name="contents" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/agent/AgentPopup.scss';
</style>
