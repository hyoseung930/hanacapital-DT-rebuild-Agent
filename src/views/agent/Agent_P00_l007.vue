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
      <div class="agent--container__title">개설은행 조회</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="search-container">
          <table class="table-type-search">
            <colgroup>
              <col width="15%" />
              <col width="85%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="title">조회조건</td>
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
            </tbody>
          </table>

          <div class="btn-container">
            <button class="btn btn-primary btn-search">검색</button>
          </div>
        </div>

        <table class="table-type-01 none-search">
          <tbody>
            <tr>
              <td>조회된 내용이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <div class="scroll-container">
          <div class="scroll-container mxh-378">
            <div class="flex-container">
              <table class="table-type-04 bt none-bottom">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>은행코드</th>
                    <th>은행명</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="scroll-container mxh-378">
            <div class="flex-container">
              <table class="table-type-04 body">
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <tbody>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
                  </tr>
                  <tr>
                    <td class="txt-center">060</td>
                    <td class="txt-center">BOA은행</td>
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
