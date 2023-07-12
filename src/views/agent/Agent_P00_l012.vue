<script>
import { ref } from 'vue';

import UiLayerSmall from '@/components_agent/ui/layer/UiLayerSmall.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayerSmall,
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
  <UiLayerSmall ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>판매대리점 조회</PopupTitle>
        </ModalPopupHead>
      </template>
      <section>
        <div class="container">
          <div class="search-container">
            <table class="table-type-search">
              <colgroup>
                <col width="10%" />
                <col width="90%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">국가명</td>
                  <td>
                    <div class="flex-container">
                      <input type="text" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="btn-container">
              <button class="btn btn-primary btn-search">검색</button>
            </div>
          </div>

          <div class="scroll-container">
            <div class="scroll-container">
              <div class="flex-container">
                <table class="table-type-04 bt none-bottom">
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>국가코드</th>
                      <th>국가명</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div class="scroll-container">
              <div class="flex-container">
                <table class="table-type-04 body">
                  <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                    <tr>
                      <td class="txt-center">AD</td>
                      <td class="txt-center">안도라</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModalPopup>
  </UiLayerSmall>
</template>
