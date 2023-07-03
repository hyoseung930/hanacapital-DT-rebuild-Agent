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
                <td class="title">상담일자</td>
                <td>
                  <div class="flex-container">
                    <input type="date" v-model="startDate" />
                    <span>-</span>
                    <input type="date" v-model="endDate" />
                  </div>
                </td>
                <td class="title">검색조건</td>
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
                <td class="title">판매점</td>
                <td>
                  <input type="text" class="w50p" />
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

        <div class="search-count">
          <span>
            합계 : <span class="cGreen">85</span>건 /
            <span class="cGreen">2,700,462,280</span>원
          </span>

          <div class="btn-container">
            <button class="btn btn-s02">
              <i class="ico ico-excel f-main-color"></i>엑셀변환
            </button>
          </div>
        </div>

        <div class="scroll-container over-h">
          <table class="table-type-04 bt">
            <colgroup>
              <col width="114px" />
              <col width="105px" />
              <col width="158px" />
              <col width="130px" />
              <col width="110px" />
              <col width="148px" />
              <col width="122px" />
              <col width="110px" />
              <col width="70px" />
              <col width="110px" />
              <col width="110px" />
              <col width="110px" />
            </colgroup>
            <thead>
              <tr>
                <th>상담일</th>
                <th>구분</th>
                <th>상담채널</th>
                <th>신용정보동의</th>
                <th>고객명</th>
                <th>주민/사업자번호</th>
                <th>신청금액</th>
                <th>상담결과</th>
                <th>AG손배</th>
                <th>품목</th>
                <th>판매점</th>
                <th>온라인약정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스케이네트웍스케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center">
                  <button class="btn btn-s05">SMS전송</button>
                </td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
              <tr>
                <td class="txt-center">2023.01.01</td>
                <td class="txt-center">이용자</td>
                <td class="txt-center">홈페이지(AG)</td>
                <td class="txt-center">온라인(SMS)</td>
                <td class="txt-center">김하나</td>
                <td class="txt-center">123456-1******</td>
                <td class="txt-center">999,999,999</td>
                <td class="txt-center cGreen">승인</td>
                <td class="txt-center">N</td>
                <td class="txt-center">케이네트웍스</td>
                <td class="txt-center">식기세척기</td>
                <td class="txt-center"></td>
              </tr>
            </tbody>
          </table>
        </div>

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
