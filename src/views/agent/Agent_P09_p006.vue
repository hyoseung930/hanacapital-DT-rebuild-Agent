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

    return {
      startDate,
      endDate,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>연체매각리스트</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">매각요청일자</div>
            <div class="search--container__list-contents">
              <input type="date" v-model="startDate" />
              <span>~</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w45p">
              <div class="select-container w50p">
                <select>
                  <option value="1">제휴사주문번호</option>
                </select>
              </div>
              <input type="text" />
            </div>
          </div>
          <div class="search--container__list">
            <div class="search--container__list-title">SGI가입여부</div>
            <div class="search--container__list-contents">
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
        </div>

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
          <col width="93%" />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center cDisabled">건수</td>
            <td class="txt-center">2</td>
          </tr>
          <tr>
            <td class="txt-center cDisabled">채권잔액</td>
            <td class="txt-center">1,234,567</td>
          </tr>
          <tr>
            <td class="txt-center cDisabled">매각금액</td>
            <td class="txt-center">1,234,567</td>
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

      <table class="table-type-04">
        <colgroup>
          <col width="5%" />
          <col width="8%" />
          <col width="13%" />
          <col width="13%" />
          <col width="13%" />
          <col width="6%" />
          <col width="8%" />
          <col width="8%" />
          <col width="6%" />
          <col width="5%" />
          <col width="6%" />
          <col width="7%" />
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>매각요청일자</th>
            <th>제휴사주문번호</th>
            <th>채권번호</th>
            <th>고객명</th>
            <th>연체회차</th>
            <th>채권잔액</th>
            <th>매각적용비율</th>
            <th>연체금액</th>
            <th>총회차</th>
            <th>수납회차</th>
            <th>SGI가입여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">L12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">0</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">40</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">60</td>
            <td class="txt-center">0</td>
            <td class="txt-center">Y</td>
          </tr>
        </tbody>
      </table>

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
