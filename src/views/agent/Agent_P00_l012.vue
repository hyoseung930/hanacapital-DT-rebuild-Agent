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
    const classList = ref('small');

    return {
      agentPopup,
      classList,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup" :isClassList="classList">
    <template #title>
      <div class="agent--container__title">국적 조회</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="search-container">
          <table class="table-type-search">
            <colgroup>
              <col width="10%" />
              <col width="90%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="title">국가명</td>
                <td>
                  <div class="flex-container">
                    <input type="text" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="btn-container">
            <button class="btn btn-primary btn-search">검색</button>
          </div>
        </div>

        <div class="scroll-container">
          <div class="scroll-container">
            <div class="flex-container">
              <table class="table-type-04 bt none-bottom">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>국가코드</th>
                    <th>국가명</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="scroll-container">
            <div class="flex-container">
              <table class="table-type-04 body">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                  <tr>
                    <td class="txt-center">AD</td>
                    <td class="txt-center">안도라</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
