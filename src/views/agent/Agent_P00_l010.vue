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
          <PopupTitle>판매대리점 조회</PopupTitle>
        </ModalPopupHead>
      </template>

      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div class="container">
            <div class="search--container">
              <div class="search--container__box">
                <div class="search--container__list">
                  <div class="search--container__list-title">조회조건</div>
                  <div class="search--container__list-contents w85p">
                    <div class="select-container w20p">
                      <select>
                        <option>성명/상호</option>
                      </select>
                    </div>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div class="btn-container">
                <button class="btn btn-primary btn-search-02">검색</button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div :class="$style['basic-table']">
            <table :class="$style['none-search']">
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col width="10%" />
                <col width="15%" />
                <col width="10%" />
                <col width="50%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th>성명/상호</th>
                  <th>주민/사업번호</th>
                  <th>본지점</th>
                  <th>거래구분</th>
                  <th>고객구분명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">상호명</td>
                  <td class="txt-center">123-12-1****</td>
                  <td class="txt-center">본사</td>
                  <td class="txt-center">
                    공급자, 제조사, 판매대리점, 탁송/등록대행사
                  </td>
                  <td class="txt-center">법인</td>
                </tr>
                <tr>
                  <td class="txt-center">상호명</td>
                  <td class="txt-center">123-12-1****</td>
                  <td class="txt-center">본사</td>
                  <td class="txt-center">
                    공급자, 제조사, 판매대리점, 탁송/등록대행사
                  </td>
                  <td class="txt-center">법인</td>
                </tr>
                <tr>
                  <td class="txt-center">상호명</td>
                  <td class="txt-center">123-12-1****</td>
                  <td class="txt-center">본사</td>
                  <td class="txt-center">
                    공급자, 제조사, 판매대리점, 탁송/등록대행사
                  </td>
                  <td class="txt-center">법인</td>
                </tr>
                <tr>
                  <td class="txt-center">상호명</td>
                  <td class="txt-center">123-12-1****</td>
                  <td class="txt-center">본사</td>
                  <td class="txt-center">
                    공급자, 제조사, 판매대리점, 탁송/등록대행사
                  </td>
                  <td class="txt-center">법인</td>
                </tr>
                <tr>
                  <td class="txt-center">상호명</td>
                  <td class="txt-center">123-12-1****</td>
                  <td class="txt-center">본사</td>
                  <td class="txt-center">
                    공급자, 제조사, 판매대리점, 탁송/등록대행사
                  </td>
                  <td class="txt-center">법인</td>
                </tr>
                <tr>
                  <td class="txt-center">상호명</td>
                  <td class="txt-center">123-12-1****</td>
                  <td class="txt-center">본사</td>
                  <td class="txt-center">
                    공급자, 제조사, 판매대리점, 탁송/등록대행사
                  </td>
                  <td class="txt-center">법인</td>
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
