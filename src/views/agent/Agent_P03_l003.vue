<script>
import { ref } from 'vue';

import UiLayer from '@/components_agent/ui/layer/UiLayer.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';

export default {
  components: {
    UiLayer,
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>하나캐피탈 채무승계 확약 URL 발송</PopupTitle>
        </ModalPopupHead>
      </template>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 row-margin-contents">발신자정보</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="35%" />
                <col width="15%" />
                <col width="35%" />
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">발신자</td>
                  <td>
                    <input type="text" disabled />
                  </td>
                  <td class="title">대표전화</td>
                  <td>
                    <input type="text" value="김하나" />
                  </td>
                </tr>
                <tr>
                  <td class="title">부서명</td>
                  <td colspan="3">
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 row-margin-contents">수신처정보</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="35%" />
                <col width="15%" />
                <col width="35%" />
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">수신인</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td class="title">생년월일</td>
                  <td>
                    <input type="date" value="2022-01-01" />
                  </td>
                </tr>
                <tr>
                  <td class="title">전화번호</td>
                  <td colspan="3">
                    <input type="tel" class="w25p" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 row-margin-contents">발송정보</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="85%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">동의 방식</td>
                  <td>
                    <div class="flex-container jcfs">
                      <div class="radio-container">
                        <label class="flex-container jcfs">
                          <input type="radio" name="type" checked />
                          <span class="small"></span>
                          URL 동의
                        </label>
                      </div>
                      <div class="radio-container">
                        <label class="flex-container jcfs">
                          <input type="radio" name="type" />
                          <span class="small"></span>
                          ARS 동의
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="title">제목</td>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <td class="title">사전신용정보조회<br />동의 녹취 스크립트</td>
                  <td>
                    <textarea class="textarea"></textarea>
                    <div class="flex-container jcfe cDisabled">
                      <strong>0</strong>Byte
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div class="btn-container">
            <button class="btn btn-send">전송하기</button>
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