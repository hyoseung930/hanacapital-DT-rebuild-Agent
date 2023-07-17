<script>
// Agent_P09_l001
import { ref } from 'vue';

import UiLayer from '@/components_agent/ui/layer/UiLayer.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>SGI 가입정보</PopupTitle>
        </ModalPopupHead>
      </template>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 row-margin-contents">발송정보</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="35%" />
                <col width="15%" />
                <col width="35%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">제휴사주문번호</td>
                  <td>12345@678901</td>
                  <td class="title">상담번호</td>
                  <td>C12345678901234</td>
                </tr>
                <tr>
                  <td class="title">고객명</td>
                  <td><input type="text" /></td>
                  <td class="title">가입금액</td>
                  <td>
                    <div class="flex-container">
                      <input type="text" class="rt" value="2,000,000" />원
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="title">시작일</td>
                  <td>
                    <input type="date" value="2022-01-01" />
                  </td>
                  <td class="title">종료일</td>
                  <td>
                    <input type="date" value="2022-01-01" />
                  </td>
                </tr>
                <tr>
                  <td class="title">SGI 담당지점</td>
                  <td><input type="text" /></td>
                  <td class="title">SGI담당자명</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td class="title">SGI증권번호</td>
                  <td><input type="text" /></td>
                  <td class="title">SGI담당자번호</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td class="title">사서함번호(전)</td>
                  <td><input type="text" /></td>
                  <td class="title">사서함번호(후)</td>
                  <td><input type="text" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" scoped>
@import '@/assets_agent/scss/views/agent/AgentCommon.scss';
</style>

<style lang="scss" module>
@import '@/assets_agent/scss/components/import/basic-table.scss';
</style>