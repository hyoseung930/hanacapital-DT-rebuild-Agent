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
    <ModalPopup>
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>상환스케줄</PopupTitle>
        </ModalPopupHead>
      </template>
      <section>
        <div class="container">
          <div class="title">계약내용</div>
          <table class="table-type-01">
            <colgroup>
              <col width="13%" />
              <col width="20%" />
              <col width="13%" />
              <col width="20%" />
              <col width="13%" />
              <col width="20%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="title">이용자</td>
                <td>김하나</td>
                <td class="title">계약번호</td>
                <td>D12345-12345-11111</td>
                <td class="title">할부원금</td>
                <td>2,564,000원</td>
              </tr>
              <tr>
                <td class="title">주민/사업번호</td>
                <td>545-**-*****</td>
                <td class="title">실행일자</td>
                <td>2023.01.01</td>
                <td class="title">취급수수료</td>
                <td>999,999,999원</td>
              </tr>
              <tr>
                <td class="title">상품종류</td>
                <td>일반할부_일반할부</td>
                <td class="title">할부기간</td>
                <td>36개월</td>
                <td class="title">유예원금</td>
                <td>999,999,999원</td>
              </tr>
              <tr>
                <td class="title">품목명</td>
                <td colspan="5">카드/포스 단말기</td>
              </tr>
            </tbody>
          </table>

          <div class="title">
            상한스케줄
            <div class="btn-container">
              <button class="btn btn-s03">
                <i class="ico ico-print"></i>
                인쇄하기
              </button>
            </div>
          </div>

          <table class="table-type-01 none-search">
            <tbody>
              <tr>
                <td>조회된 내용이 없습니다.</td>
              </tr>
            </tbody>
          </table>

          <div class="scroll-container over-h">
            <table class="table-type-01">
              <colgroup>
                <col width="6%" />
                <col width="9%" />
                <col width="13%" />
                <col width="13%" />
                <col width="13%" />
                <col width="13%" />
                <col width="13%" />
                <col width="13%" />
              </colgroup>
              <thead>
                <tr>
                  <th>회차</th>
                  <th>납부계획일</th>
                  <th>원금</th>
                  <th>이자</th>
                  <th>① 매회납부금</th>
                  <th>② 기타금액</th>
                  <th>납부금액(①+②)</th>
                  <th>미회수원금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">1</td>
                  <td class="txt-center">2023.01.01</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                  <td class="txt-center">999,999,999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ModalPopup>
  </UiLayer>
</template>
