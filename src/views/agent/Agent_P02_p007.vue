<script>
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
      <PageTitle>대금결제내역</PageTitle>
    </PageHead>

    <div className="container">
      <div className="search-container">
        <table className="table-type-search">
          <colgroup>
            <col width="5%" />
            <col width="20%" />
            <col width="6%" />
            <col width="60%" />
          </colgroup>
          <tbody>
            <tr>
              <td className="title">지급일자</td>
              <td>
                <div className="flex-container">
                  <input type="date" v-model="startDate" />
                  <span>-</span>
                  <input type="date" v-model="endDate" />
                </div>
              </td>
              <td className="title">검색조건</td>
              <td>
                <div className="flex-container jcfs">
                  <div className="select-container w20p">
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                  <input type="text" class="w60p" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="btn-container">
          <button className="btn btn-primary btn-search">조회</button>
        </div>
      </div>

      <table className="table-type-01 none-search">
        <tbody>
          <tr>
            <td>조회된 내용이 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <table class="table-type-01 mb60">
        <colgroup>
          <col width="11%" />
          <col width="22%" />
          <col width="11%" />
          <col width="22%" />
          <col width="11%" />
          <col width="22%" />
        </colgroup>
        <tbody>
          <tr>
            <td class="title">대상건수</td>
            <td><span class="cGreen">210</span>건</td>
            <td class="title">신청합계금액</td>
            <td><span class="cGreen">999,999,999</span>원</td>
            <td class="title">실지급액합계</td>
            <td><span class="cGreen">999,999,999</span>원</td>
          </tr>
        </tbody>
      </table>

      <div className="search-count">
        <span>
          합계 : <span className="cGreen">85</span>건 /
          <span className="cGreen">2,700,462,280</span>원
        </span>

        <div className="btn-container">
          <button className="btn btn-s03">
            <i className="ico ico-print"></i>인쇄하기
          </button>
          <button className="btn btn-s02">
            <i className="ico ico-excel"></i>엑셀변환
          </button>
        </div>
      </div>

      <div className="scroll-container over-h">
        <table className="table-type-04 bt">
          <colgroup>
            <col width="114px" />
            <col width="76px" />
            <col width="147px" />
            <col width="200px" />
            <col width="90px" />
            <col width="79px" />
            <col width="66px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="200px" />
          </colgroup>
          <thead>
            <tr>
              <th>동의요청일자</th>
              <th>이용자</th>
              <th>주민/사업번호</th>
              <th>품목</th>
              <th>할부기간</th>
              <th>이자형태</th>
              <th>금리</th>
              <th>신청금액</th>
              <th>선취수수류</th>
              <th>인지대</th>
              <th>실지급액</th>
              <th>지급수수료</th>
              <th>판매점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">김하나</td>
              <td className="txt-center">123456-1******</td>
              <td className="txt-center">LED 전광판</td>
              <td className="txt-center">120개월</td>
              <td className="txt-center">무이자</td>
              <td className="txt-center">99%</td>
              <td className="txt-center">999,999,999</td>
              <td className="txt-center">999,999,999</td>
              <td className="txt-center">999,999,999</td>
              <td className="txt-center">999,999,999</td>
              <td className="txt-center">999,999,999</td>
              <td className="txt-center">제우스이엔지</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="paging">
        <li className="first">&lt;</li>
        <li className="on">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li className="dot"></li>
        <li>25</li>
        <li className="last">&gt;</li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/AgentCommon.scss';
</style>
