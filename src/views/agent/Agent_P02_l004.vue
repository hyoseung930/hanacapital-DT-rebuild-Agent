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
          <PopupTitle>본인확인(본의명의 휴대폰소지자)</PopupTitle>
        </ModalPopupHead>
      </template>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 row-margin-contents">고객정보</h3>

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
                  <td class="title">AG명</td>
                  <td><input type="text" /></td>
                  <td class="title">고객명</td>
                  <td><input type="text" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-title-1 row-margin-contents">통신사선택</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="85%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">본인확인</td>
                  <td>
                    <div class="flex-container jcfs">
                      <div class="select-container w15p">
                        <select>
                          <option>SKT</option>
                        </select>
                      </div>
                      <input type="text" class="w30p" />
                      <button class="btn btn-s03">SMS발송</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-title-1 row-margin-contents">스크립트</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="85%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">본인확인</td>
                  <td class="txt-left">
                    본인명의 핸드폰이 맞으신가요? 제가 지금 손님 핸드폰으로
                    보내드린 인증번호를 말씀해 주시겠습니까? 주민번호 앞 7자리
                    : 주민번호 앞 7자리 – 뒷자리 중 첫번째 자리$ 본인명의
                    핸드폰이 맞으신가요? 제가 지금 손님 보내드린 인증번호를
                    말씀해 주시겠습니까? 주민번호 앞 7자리 : 주민번호 앞 7자리
                    – 뒷자리 중 첫번째 자리$
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-title-1 row-margin-contents">인증번호 확인</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="85%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">본인확인</td>
                  <td>
                    <div class="flex-container jcfs">
                      <input type="text" class="w30p" />
                      <button class="btn btn-s03">인증확인</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-title-1 row-margin-contents">손님상담</h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="85%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">1차상담업로드</td>
                  <td>
                    <button class="btn btn-s03">손님상담</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-title-1 row-margin-contents flex-container jcsb">
            ARS 전송

            <div class="btn-container">
              <button class="btn btn-primary">ARS</button>
            </div>
          </h3>

          <div :class="$style['basic-table']">
            <table :class="$style['txt-left']">
              <colgroup>
                <col width="15%" />
                <col width="85%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">ARS전송</td>
                  <td class="txt-left">
                    기타 계약사항 안내는 ARS로 진행될 예정입니다. 전화를
                    끊으시고 “02-1800-9540” 번호로 전화오면, 끝까지 들어주시고
                    자동으로 끊겨야 완료 됩니다. 잠시 후 감사합니다.
                  </td>
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

