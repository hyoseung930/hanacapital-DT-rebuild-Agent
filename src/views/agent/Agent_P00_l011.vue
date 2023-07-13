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
          <PopupTitle>품목 선택</PopupTitle>
        </ModalPopupHead>
      </template>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div class="flex-container aifs no-gap fw bdrbt">
            <div :class="$style['basic-table']">
              <table class="table-type-04 w100p bt">
                <colgroup>
                  <col width="25%" />
                  <col width="25%" />
                  <col width="25%" />
                  <col width="25%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>품목 중분류</th>
                    <th>품목 소분류</th>
                    <th>품목 상세분류</th>
                    <th>품목명</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="scroll-container mxh-770 w25p bdrrt">
              <table class="table-type-04 body w100p">
                <tbody>
                  <tr class="on">
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="scroll-container mxh-770 w25p bdrlf">
              <table class="table-type-04 body w100p">
                <tbody class="scroll-container mxh-678">
                  <tr class="on">
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                  <tr>
                    <td class="txt-center">소분류</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="scroll-container mxh-770 w25p bdrlf bdrrt">
              <table class="table-type-04 body w100p">
                <tbody>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr class="on">
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="scroll-container mxh-770 w25p bdrlf">
              <table class="table-type-04 body w100p">
                <tbody>
                  <tr class="on">
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                  <tr>
                    <td class="txt-center">S36_기타채널</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </ModalPopup>
  </UiLayerSmall>
</template>

<style lang="scss" scoped>
@import '@/assets_agent/scss/views/agent/AgentCommon.scss';
</style>

<style lang="scss" module>
@import '@/assets_agent/scss/components/import/basic-table.scss';
</style>
