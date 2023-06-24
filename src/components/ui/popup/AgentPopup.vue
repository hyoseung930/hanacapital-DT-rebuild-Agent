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
  <transition name="fade">
    <div class="agent" v-if="agentPopup">
      <div
        class="agent--container"
        :class="{ 'agent--container__small': classList === 'small' }"
      >
        <i class="ico ico-close" @click="agentPopup = false"></i>
        <slot name="title" />
        <div class="scroll-container">
          <slot name="contents" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '@/assets/scss/views/agent/AgentPopup.scss';
</style>
