<script>
import { ref } from 'vue';

import UiLayer from '@/components_agent/ui/layer/UiLayer.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';
import PaginationNav from '@/components_agent/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components_agent/ui/pagination/PaginationNavArrow.vue';
import PaginationNavNumber from '@/components_agent/ui/pagination/PaginationNavNumber.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavNumber,
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
          <PopupTitle>상담/사전승인 내역 조회</PopupTitle>
        </ModalPopupHead>
      </template>
      <section class="row-margin-block-small">
        <section class="row-margin-block-small">
          <div class="container">
            <div class="search--container">
              <div class="search--container__box">
                <div class="search--container__list">
                  <div class="search--container__list-title">상품코드</div>
                  <div class="search--container__list-contents w15p">
                    <div class="select-container">
                      <select>
                        <option>선택</option>
                      </select>
                    </div>
                  </div>
                  <div class="search--container__list-title">승인일자</div>
                  <div class="search--container__list-contents w30p">
                    <input type="date" />
                    <span>~</span>
                    <input type="date" />
                  </div>
                </div>
                <div class="search--container__list">
                  <div class="search--container__list-title">검색조건</div>
                  <div class="search--container__list-contents w35p">
                    <div class="select-container w85p">
                      <select>
                        <option>고객명</option>
                      </select>
                    </div>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div class="btn-container">
                <button class="btn btn-primary btn-search-02">조회</button>
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
                <col width="8%" />
                <col width="8%" />
                <col width="10%" />
                <col width="15%" />
                <col width="10%" />
                <col width="10%" />
                <col width="7%" />
                <col width="12%" />
                <col width="10%" />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>상담/승인일자</th>
                  <th>거래방식</th>
                  <th>고객구분</th>
                  <th>고객명</th>
                  <th>주민/사업자번호</th>
                  <th>품목명</th>
                  <th>상품코드</th>
                  <th>사전심사</th>
                  <th>신청/승인금액</th>
                  <th>유효일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">건별거래</td>
                  <td class="txt-center">개인</td>
                  <td class="txt-center">김하나</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">LED전광판</td>
                  <td class="txt-center">일반할부</td>
                  <td class="txt-center cGreen">승인</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">2023.01.01</td>
                </tr>
                <tr>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">건별거래</td>
                  <td class="txt-center">개인</td>
                  <td class="txt-center">김하나</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">LED전광판</td>
                  <td class="txt-center">일반할부</td>
                  <td class="txt-center cGreen">승인</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">2023.01.01</td>
                </tr>
                <tr>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">건별거래</td>
                  <td class="txt-center">개인</td>
                  <td class="txt-center">김하나</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">LED전광판</td>
                  <td class="txt-center">일반할부</td>
                  <td class="txt-center cGreen">승인</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">2023.01.01</td>
                </tr>
                <tr>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">건별거래</td>
                  <td class="txt-center">개인</td>
                  <td class="txt-center">김하나</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">LED전광판</td>
                  <td class="txt-center">일반할부</td>
                  <td class="txt-center cGreen">승인</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">2023.01.01</td>
                </tr>
                <tr>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">건별거래</td>
                  <td class="txt-center">개인</td>
                  <td class="txt-center">김하나</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">LED전광판</td>
                  <td class="txt-center">일반할부</td>
                  <td class="txt-center cGreen">승인</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">2023.01.01</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Pagination -->
          <PaginationNav
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <PaginationNavArrow type="prev" :disabled="true" />
            <PaginationNavNumber :active="true">1</PaginationNavNumber>
            <PaginationNavNumber>2</PaginationNavNumber>
            <PaginationNavNumber>3</PaginationNavNumber>
            <PaginationNavNumber>4</PaginationNavNumber>
            <PaginationNavNumber>5</PaginationNavNumber>
            <PaginationNavArrow type="next" />
          </PaginationNav>
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
