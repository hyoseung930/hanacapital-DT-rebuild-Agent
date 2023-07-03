<script>
// BF_P02_p001
import PageContents from '@/components_agent/ui/layout/PageContents.vue';
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
      <PageTitle>빠른상담신청 내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search-container">
        <table class="table-type-search">
          <colgroup>
            <col width="5%" />
            <col width="15%" />
            <col width="5%" />
            <col width="15%" />
            <col width="7%" />
            <col width="35%" />
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
              <td class="title">신청자명</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="btn-container">
          <button class="btn btn-primary btn-search btn-middle">검색</button>
        </div>
      </div>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>등록된 상담이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 결과가 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="22%" />
          <col width="22%" />
          <col width="22%" />
          <col width="22%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>구분</th>
            <th>신청자명</th>
            <th>연락처</th>
            <th>신청일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
            <td class="txt-center">2023.01.01</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">LM</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">010-1234-5678</td>
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
