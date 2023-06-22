<script>
import { ref } from 'vue';
// Agent_P00_l003

import AgentPopup from '@/components/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    const agentPopup = ref(true);
    const startDate = '2022-01-01';
    const endDate = '2022-01-01';

    return {
      startDate,
      endDate,
      agentPopup,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup">
    <template #title>
      <div class="agent--container__title">상담등록내역</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="search-container">
          <table class="table-type-search">
            <colgroup>
              <col width="6%" />
              <col width="44%" />
              <col width="6%" />
              <col width="44%" />
            </colgroup>
            <tbody>
              <tr>
                <td>상담일자</td>
                <td>
                  <div class="flex-container">
                    <input type="date" v-model="startDate" />
                    <span>-</span>
                    <input type="date" v-model="endDate" />
                  </div>
                </td>
                <td>검색조건</td>
                <td>
                  <div class="flex-container">
                    <div class="select-container">
                      <select>
                        <option>고객명</option>
                      </select>
                    </div>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>판매점</td>
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
      </div>
    </template>
  </AgentPopup>
</template>
