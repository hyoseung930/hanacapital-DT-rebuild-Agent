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
        <div class="flex-container aifs no-gap fw">
          <table class="table-type-04 w100p bt">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>품목 중분류</th>
                <th>품목 소분류</th>
                <th>품목 상세분류</th>
                <th>품목명</th>
              </tr>
            </thead>
          </table>
          <div class="scroll-container mxh-640 w25p">
            <table class="table-type-04 w100p">
              <tbody>
                <tr class="on">
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
          <div class="scroll-container mxh-640 w25p">
            <table class="table-type-04 w100p">
              <tbody class="scroll-container mxh-678">
                <tr class="on">
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
                <tr>
                  <td class="txt-center">소분류</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scroll-container mxh-640 w25p">
            <table class="table-type-04 w100p">
              <tbody>
                <tr>
                  <td class="txt-center">S36_기타채널</td>
                </tr>
                <tr class="on">
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
          <div class="scroll-container mxh-640 w25p">
            <table class="table-type-04 w100p">
              <tbody>
                <tr class="on">
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
