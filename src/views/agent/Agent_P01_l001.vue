<script>
import { ref } from 'vue';
// Agent_P00_l003

import AgentPopup from '@/components/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    const agentPopup = ref(true);
    const classList = ref('little');

    return {
      agentPopup,
      classList,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup" :isClassList="classList">
    <template #title>
      <div class="agent--container__title min-padding-bottom">
        공지팝업 제목
      </div>
    </template>
    <template #contents>
      <div class="container none-image-container">
        <div class="none-image">Img area</div>
      </div>
    </template>
  </AgentPopup>
</template>
