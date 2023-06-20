<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="agent">
    <div class="agent--container scroll-container">
      <i class="ico ico-close"></i>
      <slot name="title" />
      <slot name="contents" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/agent/AgentPopup.scss';
</style>
