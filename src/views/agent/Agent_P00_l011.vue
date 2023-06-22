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
      <div class="agent--container__title">품목선택</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="flex-container no-gap">
          <div class="scroll-container w25p">
            <table class="table-type-01">
              <thead>
                <tr>
                  <th>품목 중분류</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container w25p">
            <table class="table-type-01">
              <thead>
                <tr>
                  <th>품목 소분류</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container w25p">
            <table class="table-type-01">
              <thead>
                <tr>
                  <th>품목 상세분류</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container w25p">
            <table class="table-type-01">
              <thead>
                <tr>
                  <th>품목명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
