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
      <PageTitle>민원접수내역</PageTitle>
    </PageHead>

    <div className="container">
      <div className="search-container">
        <table className="table-type-search">
          <colgroup>
            <col width="7%" />
            <col width="20%" />
            <col width="7%" />
            <col width="7%" />
            <col width="20%" />
            <col width="7%" />
            <col width="40%" />
          </colgroup>
          <tbody>
            <tr>
              <td className="title">상담일자</td>
              <td colSpan="2">
                <div className="flex-container">
                  <input type="date" v-model="startDate" />
                  <span>-</span>
                  <input type="date" v-model="endDate" />
                </div>
              </td>
              <td className="title">고객구분</td>
              <td colspan="3">
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
            <tr>
              <td className="title">판매점</td>
              <td>
                <input type="text" />
              </td>
              <td className="title">민원상태</td>
              <td colspan="2">
                <div className="select-container w50p">
                  <select>
                    <option>선택</option>
                  </select>
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

      <div className="search-count">
        <span>
          합계 : <span className="cGreen">85</span>건 /
          <span className="cGreen">2,700,462,280</span>원
        </span>

        <div className="btn-container">
          <button className="btn btn-s02">
            <i className="ico ico-excel"></i>엑셀변환
          </button>
        </div>
      </div>

      <div className="scroll-container over-h">
        <table className="table-type-04 bt">
          <colgroup>
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="5%" />
            <col width="13%" />
            <col width="13%" />
            <col width="13%" />
            <col width="10%" />
            <col width="13%" />
            <col width="13%" />
            <col width="8%" />
            <col width="8%" />
          </colgroup>
          <thead>
            <tr>
              <th>민원상태</th>
              <th>발생일</th>
              <th>실행일</th>
              <th>고객명</th>
              <th>주민/사업번호</th>
              <th>채권상태</th>
              <th>할부원금</th>
              <th>잔여/총회차</th>
              <th>품목</th>
              <th>민원유형</th>
              <th>처리완료예정일</th>
              <th>처리완료일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="txt-center cGreen">처리완료</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">김하나</td>
              <td className="txt-center">123456-1******</td>
              <td className="txt-center">연체</td>
              <td className="txt-center">999,999,999원</td>
              <td className="txt-center">1/200</td>
              <td className="txt-center">DATA</td>
              <td className="txt-center">신용도 영향</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">2023.01.01</td>
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
