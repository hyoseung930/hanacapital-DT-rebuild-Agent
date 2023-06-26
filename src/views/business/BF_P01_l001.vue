<script>
// Agent_P00_l003
import { ref } from 'vue';

import AgentPopup from '@/components/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    const agentPopup = ref(true);
    const scrollList = ref('auto');
    return {
      agentPopup,
      scrollList,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup" :isScrollHeight="scrollList">
    <template #title>
      <div class="agent--container__title">한도 · 금리 확인</div>
    </template>
    <template #contents>
      <div class="container">
        <table class="table-type-01">
          <colgroup>
            <col width="5%" />
            <col width="19%" />
            <col width="19%" />
            <col width="19%" />
            <col width="19%" />
            <col width="19%" />
          </colgroup>
          <thead>
            <tr>
              <th>선택</th>
              <th>상품명</th>
              <th>대출한도</th>
              <th>금리</th>
              <th>신청대출기간</th>
              <th>최대대출기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">아파트론</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">행복아파트론</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">행복아파트론(예외)</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">원큐자동차담보대출</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">원큐자동차담보대출(대환)</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">원큐L자동차담보대출</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">원큐A자동차담보대출</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
            <tr>
              <td class="txt-center">
                <div class="radio-container">
                  <label class="flex-container jcfs">
                    <input type="radio" name="a1" checked />
                    <span></span>
                  </label>
                </div>
              </td>
              <td class="txt-center">사업자주택담보대출</td>
              <td class="txt-center">20,000 만원</td>
              <td class="txt-center">14.20%</td>
              <td class="txt-center">48개월</td>
              <td class="txt-center">60개월</td>
            </tr>
          </tbody>
        </table>
        <div class="explan">
          <i class="ico ico-explan"></i>
          해당 금리는 신청대출기간 기준이며 대출기간 변경 시, 변경될 수
          있습니다.
        </div>
        <div class="btn-container mt40">
          <button class="btn btn-s01 w20p btn-middle">확인</button>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
