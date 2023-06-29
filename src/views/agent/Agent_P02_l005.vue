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
    return {
      agentPopup,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup">
    <template #title>
      <div class="agent--container__title">하나캐피탈 전자 약정 URL발송</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="title">발신자정보</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="35%" />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">발신자</td>
              <td>
                <input type="text" disabled />
              </td>
              <td class="title">대표전화</td>
              <td>
                <input type="tel" />
              </td>
            </tr>
            <tr>
              <td class="title">부서명</td>
              <td colspan="3">
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">수신처정보</div>
        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="35%" />
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">수신인</td>
              <td>
                <input type="text" />
              </td>
              <td class="title">생년월일</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td class="title">전화번호</td>
              <td colspan="3">
                <input type="tel" class="w25p" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="title">발송정보</div>

        <table class="table-type-01">
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">동의 방식</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="type" checked />
                      <span></span>
                      URL 동의
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="type" />
                      <span></span>
                      ARS 동의
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">제목</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td class="title">내용</td>
              <td>
                <textarea class="textarea"></textarea>
                <div class="flex-container jcfe cDisabled">
                  <strong>0</strong>Byte
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btn-container">
          <button class="btn btn-send">전송하기</button>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
