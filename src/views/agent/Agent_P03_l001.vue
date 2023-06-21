<script>
// Agent_P00_l003
import { ref } from 'vue';

import AgentPopup from '@/components/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <AgentPopup>
    <template #title>
      <div class="agent--container__title">승계 전 이용자 조회</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="search-container">
          <table class="table-type-search">
            <colgroup>
              <col width="7%" />
              <col width="26%" />
              <col width="10%" />
              <col width="23%" />
              <col width="6%" />
              <col width="27%" />
            </colgroup>
            <tbody>
              <tr>
                <td>성명/상호</td>
                <td>
                  <div class="flex-container">
                    <input type="text" />
                  </div>
                </td>
                <td>주민/사업자번호</td>
                <td>
                  <input type="text" />
                </td>
                <td>연락처</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="btn-container">
            <button class="btn btn-primary btn-search">조회</button>
          </div>
        </div>

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <table class="table-type-01">
          <colgroup>
            <col width="8%" />
            <col width="9%" />
            <col width="13%" />
            <col width="11%" />
            <col width="7%" />
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

        <ul class="paging">
          <li class="first">&lt;</li>
          <li class="on">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li class="dot"></li>
          <li>25</li>
          <li class="last">&gt;</li>
        </ul>
      </div>
    </template>
  </AgentPopup>
</template>
