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
      <div class="agent--container__title">신주소 팝업</div>
    </template>
    <template #contents>
      <div class="container">
        <div class="flex-container under-tab jcfs">
          <div class="on">지번주소</div>
          <div>도로명주소</div>
        </div>

        <div class="flex-container address--wrap">
          <div class="bg-gary address--wrap__container">
            <div class="flex-container">
              <div class="address--wrap__container-title">읍면동</div>
              <input type="text" />
            </div>
            <div class="flex-container">
              <div class="address--wrap__container-title">우편번호</div>
              <input type="text" />
            </div>
            <div class="explan">
              <i class="ico ico-explan"></i> [주소조회] 거래시 찾고자 하는
              지역의 '동이름'을 입력해 주십시오.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(예: 서울시 강남구
              삼성1동 -> '삼성1')
              <br />
              <br />
              <i class="ico ico-explan"></i> 3-15대로의 경우 -> (-)은 ㄱ +
              한자키를 누른 후 8번을 선택해 주세요.
            </div>
          </div>
          <div class="address--wrap__container"></div>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
