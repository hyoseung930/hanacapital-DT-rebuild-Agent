<script>
import { ref } from 'vue';
// Agent_P03_p001
import PageContents from '@/components/ui/agent/PageContents.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
  },
  setup() {
    const startDate = '2022-01-01';
    const endDate = '2022-01-01';
    const isType = ref('1');

    return {
      startDate,
      endDate,
      isType,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>1차정산내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search-container">
        <table class="table-type-search">
          <colgroup>
            <col width="5%" />
            <col width="35%" />
            <col width="5%" />
            <col width="40%" />
            <col width="15%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">일자조건</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>수신일자</option>
                    </select>
                  </div>
                  <input type="date" v-model="startDate" />
                  <span>-</span>
                  <input type="date" v-model="endDate" />
                </div>
              </td>
              <td class="title">검색조건</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="select-container w35p">
                    <select v-model="isType">
                      <option value="1">고객명</option>
                      <option value="2">채널명</option>
                      <option value="3">실행여부</option>
                      <option value="4">지급여부</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    :class="{ on: isType === '1', off: isType !== '1' }"
                  />
                  <div
                    class="select-container"
                    :class="{ on: isType === '2', off: isType !== '2' }"
                  >
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                  <div
                    class="w100p ml20"
                    :class="{ on: isType === '3', off: isType !== '3' }"
                  >
                    <div class="flex-container jcfs">
                      <div class="radio-container">
                        <label class="flex-container jcfs">
                          <input type="radio" name="a1" checked />
                          <span class="small"></span>
                          Y
                        </label>
                      </div>
                      <div class="radio-container">
                        <label class="flex-container jcfs">
                          <input type="radio" name="a1" />
                          <span class="small"></span>
                          N
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w100p ml20"
                    :class="{ on: isType === '4', off: isType !== '4' }"
                  >
                    <div class="flex-container jcfs">
                      <div class="radio-container">
                        <label class="flex-container jcfs">
                          <input type="radio" name="a2" checked />
                          <span class="small"></span>
                          Y
                        </label>
                      </div>
                      <div class="radio-container">
                        <label class="flex-container jcfs">
                          <input type="radio" name="a2" />
                          <span class="small"></span>
                          N
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">조회</button>
        </div>
      </div>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="16%" />
          <col width="16%" />
          <col width="16%" />
          <col width="16%" />
          <col width="16%" />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
            <th>정산대상금액</th>
            <th>정산예정금액</th>
            <th>실지급금액</th>
            <th>보증금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center cDisabled">건수</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
          </tr>
          <tr>
            <td class="txt-center cDisabled">금액</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">0</td>
          </tr>
        </tbody>
      </table>

      <div class="search-count">
        <span></span>
        <div class="btn-container">
          <button class="btn btn-s02">
            <i class="ico ico-excel"></i>엑셀변환
          </button>
        </div>
      </div>

      <div class="scroll-container over-h">
        <table class="table-type-04">
          <colgroup>
            <col width="80px" />
            <col width="120px" />
            <col width="120px" />
            <col width="80px" />
            <col width="200px" />
            <col width="150px" />
            <col width="90px" />
            <col width="90px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="90px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
          </colgroup>
          <thead>
            <tr>
              <th>순번</th>
              <th>수신일자</th>
              <th>실행일자</th>
              <th>고객명</th>
              <th>채널명</th>
              <th>선정산방식코드</th>
              <th>실행여부</th>
              <th>지급여부</th>
              <th>정산대상금액</th>
              <th>실지급금액</th>
              <th>보증금액</th>
              <th>주문건수</th>
              <th>정산예정일</th>
              <th>할인금액</th>
              <th>제휴사수수료금액</th>
              <th>미수금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">1</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">에이블리</td>
              <td class="txt-center">30일</td>
              <td class="txt-center">N</td>
              <td class="txt-center">N</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">100</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">999,999,999</td>
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
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/AgentCommon.scss';
</style>
