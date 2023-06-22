<script>
import { ref } from 'vue';
export default {
  props: {
    isAgent: Boolean,
    isClassList: String,
  },
  setup(props) {
    const agentPopup = ref(props.isAgent);
    const classList = ref(props.isClassList);

    return {
      agentPopup,
      classList,
    };
  },
};
</script>

<template>
  <div class="agent" v-if="agentPopup">
    <div
      class="agent--container scroll-container"
      :class="{ 'agent--container__small': classList === 'small' }"
    >
      <i class="ico ico-close" @click="agentPopup = false"></i>
      <slot name="title" />
      <slot name="contents" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/agent/AgentPopup.scss';
</style>
