<script>
import { ref } from 'vue';
// Agent_P00_l003

import AgentPopup from '@/components_agent/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    const agentPopup = ref(true);

    return {
      agentPopup,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup">
    <template #title>
      <div class="agent--container__title">제조사 조회</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="search--container">
          <div class="search--container__box">
            <div class="search--container__list">
              <div class="search--container__list-title">조회조건</div>
              <div class="search--container__list-contents w85p">
                <div class="select-container w40p">
                  <select>
                    <option>주민/사업번호</option>
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

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <table class="table-type-04 bt">
          <colgroup>
            <col width="20%" />
            <col width="15%" />
            <col width="20%" />
            <col width="30%" />
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
    </template>
  </AgentPopup>
</template>
