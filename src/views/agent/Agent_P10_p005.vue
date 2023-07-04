<script>
// Agent_P03_p001
import PageContents from '@/components_agent/ui/agent/PageContents.vue';
import PageHead from '@/components_agent/ui/text/PageHead.vue';
import PageTitle from '@/components_agent/ui/text/PageTitle.vue';

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
      <PageTitle>사전동의내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">동의일자</div>
            <div class="search--container__list-contents w25p">
              <input type="date" v-model="startDate" />
              <span>-</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">동의여부</div>
            <div class="search--container__list-contents w25p">
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
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w45p">
              <div class="select-container w80p">
                <select>
                  <option>고객명</option>
                </select>
              </div>
              <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">조회</button>
        </div>
      </div>

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="30%" />
          <col width="30%" />
          <col width="30%" />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
            <th>동의</th>
            <th>미동의</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center cDisabled">건수</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
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

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-04">
        <colgroup>
          <col width="4%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>동의일자</th>
            <th>동의여부</th>
            <th>고객명</th>
            <th>생년월일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">N</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">2023.01.01</td>
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
@import '@/assets_agent/scss/views/agent/AgentCommon.scss';
</style>
