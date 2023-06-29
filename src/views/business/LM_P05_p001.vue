<script>
// BF_P02_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
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
      <PageTitle>현황조회</PageTitle>
    </PageHead>

    <div class="container">
      <div class="status-check">
        <div class="flex-container">
          <div class="item on">
            <div class="count">0</div>
            <div class="subject">전체</div>
          </div>
          <div class="item">
            <div class="count">0</div>
            <div class="subject">신용동의</div>
          </div>
          <div class="item">
            <div class="count">0</div>
            <div class="subject">상담</div>
          </div>
          <div class="item">
            <div class="count">0</div>
            <div class="subject">계약</div>
          </div>
          <div class="item">
            <div class="count">0</div>
            <div class="subject">심사</div>
          </div>
          <div class="item">
            <div class="count">0</div>
            <div class="subject">송금</div>
          </div>
        </div>
      </div>
      <div class="search-container">
        <table class="table-type-search">
          <colgroup>
            <col width="5%" />
            <col width="25%" />
            <col width="5%" />
            <col width="15%" />
            <col width="7%" />
            <col width="25%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">조회기간</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>직접입력</option>
                    </select>
                  </div>
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
          <button class="btn btn-primary btn-search btn-middle">조회</button>
        </div>
      </div>

      <table class="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 결과가 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="7%" />
          <col width="8%" />
          <col width="16%" />
          <col width="9%" />
          <col width="17%" />
          <col width="17%" />
          <col width="5%" />
          <col width="6%" />
          <col width="8%" />
        </colgroup>
        <thead>
          <tr>
            <th>성명</th>
            <th>등록일</th>
            <th>금액</th>
            <th>상품명</th>
            <th>신용동의</th>
            <th>상담</th>
            <th>품의(계약)</th>
            <th>심사</th>
            <th>정산결과</th>
            <th>서류등록</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">김하나</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">행복아파트론</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">C42302010014400</td>
            <td class="txt-center">D42302010014400</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center cGreen">완료</td>
            <td class="txt-center">
              <button class="btn btn-s05">서류등록</button>
            </td>
          </tr>
          <tr>
            <td class="txt-center">김하나</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">행복아파트론</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">C42302010014400</td>
            <td class="txt-center">D42302010014400</td>
            <td class="txt-center cRed">부결</td>
            <td class="txt-center cGreen">완료</td>
            <td class="txt-center">
              <button class="btn btn-s05">서류등록</button>
            </td>
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
