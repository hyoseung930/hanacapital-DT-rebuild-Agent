<script>
import { ref } from 'vue';
export default {
  props: {
    isAgent: Boolean,
    isClassList: String,
    isScrollHeight: String,
  },
  setup(props) {
    const agentPopup = ref(props.isAgent);
    const classList = ref(props.isClassList);
    const scrollList = ref(props.isScrollHeight);

    return {
      agentPopup,
      classList,
      scrollList,
    };
  },
};
</script>

<template>
  <transition name="fade">
    <div class="agent" v-if="agentPopup">
      <div
        class="agent--container"
        :class="{
          'agent--container__small': classList === 'small',
          'agent--container__little': classList === 'little',
          auto: scrollList === 'auto',
          'auto-min': classList === 'auto-min',
        }"
      >
        <i class="ico ico-close" @click="agentPopup = false"></i>
        <slot name="title" />
        <div class="scroll-container" :class="scrollList">
          <slot name="contents" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '@/assets_agent/scss/views/agent/AgentPopup.scss';
</style>
