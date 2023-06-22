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
    const isOpen = ref(false);
    const address = ref('-');
    const isAddress = ref(false);
    const isSelectAddress = ref(false);

    function addressClick() {
      address.value = '서울 강서구 화곡동';
      isOpen.value = true;
    }
    function addressCheck() {
      isAddress.value = true;
    }

    function nextPart() {
      if (isAddress.value !== true) {
        alert('주소를 선택해 주세요.');
        return;
      }
      isSelectAddress.value = true;
    }

    return {
      agentPopup,
      startDate,
      endDate,
      isOpen,
      address,
      isAddress,
      isSelectAddress,

      addressClick,
      addressCheck,
      nextPart,
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
          <div class="address--wrap__container-02" v-if="!isSelectAddress">
            <div class="title">주소선택</div>
            <table class="table-type-01 none-search-small">
              <thead>
                <tr>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-01">
              <thead>
                <tr>
                  <th>주소</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="txt-center" @click="addressClick">
                    서울 강서구 화곡동
                  </td>
                </tr>
                <tr>
                  <td class="txt-center">서울 강서구 화곡동</td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-02">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <tbody>
                <tr>
                  <td class="title">검색된 주소</td>
                  <td class="txt-right">{{ address }}</td>
                </tr>
                <tr>
                  <td class="title">나머지주소</td>
                  <td>
                    <div class="flex-container">
                      <input type="text" :disabled="!isOpen" />
                      <button
                        class="btn"
                        :class="{ 'btn-s04': !isOpen, 'btn-primary': isOpen }"
                      >
                        검증
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-03 none-search-small">
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>
            <table class="table-type-03">
              <colgroup>
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container">
                      <div class="radio-container">
                        <label
                          class="flex-container jcfs"
                          @click="addressCheck"
                        >
                          <input type="radio" name="a1" />
                          <span></span>
                        </label>
                      </div>
                      <div class="depth2 w10p">
                        <div>지번</div>
                        <div>도로명</div>
                      </div>
                      <div class="w80p">
                        <div>서울 강서구 화곡동 987-1번지</div>
                        <div>서울 강서구 화곡로 279(화곡동)</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="flex-container">
                      <div class="radio-container">
                        <label
                          class="flex-container jcfs"
                          @click="addressCheck"
                        >
                          <input type="radio" name="a1" />
                          <span></span>
                        </label>
                      </div>
                      <div class="depth2 w10p">
                        <div>지번</div>
                        <div>도로명</div>
                      </div>
                      <div class="w80p">
                        <div>서울 강서구 화곡동 987-1번지</div>
                        <div>서울 강서구 화곡로 279(화곡동)</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="btn-container">
              <button
                class="btn w50p"
                :class="{ 'btn-s04': !isAddress, 'btn-s03': isAddress }"
              >
                취소
              </button>
              <button
                class="btn w50p"
                :class="{ 'btn-s05': !isAddress, 'btn-s02': isAddress }"
                @click="nextPart"
              >
                다음
              </button>
            </div>
          </div>
          <div class="address--wrap__container-02" v-if="isSelectAddress">
            <div class="title">주소 확인</div>
            <div class="explan explan-success">
              <i class="ico ico-success"></i>
              입력새길에 1:1 지번매칭성공.
            </div>
            <div class="flex-container fw address--wrap__container-box">
              <div class="address--wrap__container-02-address">
                <div class="title">입력주소</div>
                <div class="content">
                  <span>07687</span>
                  <span class="bar"></span>
                  <span>서울 강서구 화곡동</span>
                  <span class="bar"></span>
                  <span>987-1</span>
                </div>
              </div>
              <div class="address--wrap__container-02-address on">
                <div class="title">표준화지번주소</div>
                <div class="content">
                  <span>07687</span>
                  <span class="bar"></span>
                  <span>서울 강서구 화곡동</span>
                  <span class="bar"></span>
                  <span>987-1번지</span>
                </div>
              </div>
              <div class="address--wrap__container-02-address">
                <div class="title">도로명주소</div>
                <div class="content">
                  <span>07687</span>
                  <span class="bar"></span>
                  <span>서울 강서구 화곡동297</span>
                  <span class="bar"></span>
                  <span>(화곡동)</span>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <button class="btn btn-s03 w50p">취소</button>
              <button class="btn btn-s02 w50p">확인</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
