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
          <PopupTitle>승계 전 이용자 조회</PopupTitle>
        </ModalPopupHead>
      </template>
      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div class="container">
            <div class="search--container">
              <div class="search--container__box">
                <div class="search--container__list">
                  <div class="search--container__list-title">성명/상호</div>
                  <div class="search--container__list-contents w20p">
                    <input type="text" />
                  </div>
                  <div class="search--container__list-title">주민/사업자번호</div>
                  <div class="search--container__list-contents w20p">
                    <input type="text" />
                  </div>
                  <div class="search--container__list-title">연락처</div>
                  <div class="search--container__list-contents w20p">
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
        </section>
      </section>

      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col width="8%" />
                <col width="9%" />
                <col width="13%" />
                <col width="11%" />
                <col width="11%" />
                <col width="12%" />
                <col width="8%" />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>채권상태</th>
                  <th>성명/상호</th>
                  <th>주민/사업번호</th>
                  <th>실행일자</th>
                  <th>실행금액</th>
                  <th>원금잔액</th>
                  <th>총회차</th>
                  <th>품목</th>
                  <th>판매점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">정상</td>
                  <td class="txt-center">홍길동</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">20개월</td>
                  <td class="txt-center">이온수기_온누리헬스케어_무</td>
                  <td class="txt-center">㈜온누리헬스케어</td>
                </tr>
                <tr>
                  <td class="txt-center">정상</td>
                  <td class="txt-center">홍길동</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">20개월</td>
                  <td class="txt-center">이온수기_온누리헬스케어_무</td>
                  <td class="txt-center">㈜온누리헬스케어</td>
                </tr>
                <tr>
                  <td class="txt-center">정상</td>
                  <td class="txt-center">홍길동</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">20개월</td>
                  <td class="txt-center">이온수기_온누리헬스케어_무</td>
                  <td class="txt-center">㈜온누리헬스케어</td>
                </tr>
                <tr>
                  <td class="txt-center">정상</td>
                  <td class="txt-center">홍길동</td>
                  <td class="txt-center">123456-1******</td>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">20개월</td>
                  <td class="txt-center">이온수기_온누리헬스케어_무</td>
                  <td class="txt-center">㈜온누리헬스케어</td>
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
