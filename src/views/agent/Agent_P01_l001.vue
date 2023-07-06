<script>
import { ref } from 'vue';

import UiLayerLittle from '@/components_agent/ui/layer/UiLayerLittle.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayerLittle,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayerLittle ref="layer" v-slot="layerSlotProps">
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>공지팝업 제목</PopupTitle>
        </ModalPopupHead>
      </template>
      <section>
        <div class="container none-image-container">
          <div class="none-image">Img area</div>
        </div>
      </section>
    </ModalPopup>
  </UiLayerLittle>
</template>
