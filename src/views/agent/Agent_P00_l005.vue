<script>
// Agent_P00_l003
import { ref } from 'vue';

import AgentPopup from '@/components_agent/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    const agentPopup = ref(true);
    const startDate = '2022-01-01';
    const endDate = '2022-01-01';

    return {
      agentPopup,
      startDate,
      endDate,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup">
    <template #title>
      <div class="agent--container__title">상담/사전승인 내역 조회</div>
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
                <td class="title">상품코드</td>
                <td>
                  <div class="select-container">
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                </td>
                <td class="title">승인일자</td>
                <td>
                  <div class="flex-container">
                    <input type="date" v-model="startDate" />
                    <span>-</span>
                    <input type="date" v-model="endDate" />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="title">검색조건</td>
                <td colspan="3">
                  <div class="flex-container jcfs">
                    <div class="select-container w20p">
                      <select>
                        <option>이용자</option>
                      </select>
                    </div>
                    <input type="text" class="w40p" />
                  </div>
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

        <table class="table-type-04 bt">
          <colgroup>
            <col width="10%" />
            <col width="9%" />
            <col width="8%" />
            <col width="10%" />
            <col width="15%" />
            <col width="10%" />
            <col width="10%" />
            <col width="7%" />
            <col width="12%" />
            <col width="8%" />
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
