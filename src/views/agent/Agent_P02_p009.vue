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
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">발생일자</div>
            <div class="search--container__list-contents">
              <input type="date" v-model="startDate" />
              <span>~</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w50p">
              <div class="select-container w30p">
                <select>
                  <option>선택</option>
                </select>
              </div>
              <input type="text" />
            </div>
          </div>
          <div class="search--container__list">
            <div class="search--container__list-title">판매점</div>
            <div class="search--container__list-contents w20p">
              <input type="text" />
            </div>
            <div class="search--container__list-title">민원상태</div>
            <div class="search--container__list-contents w10p">
              <div class="select-container">
                <select>
                  <option>선택</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-primary btn-search-02">조회</button>
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
        <span> 합계 : <span className="cGreen">85</span>건 </span>
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
            <tr>
              <td className="txt-center cRed">오류</td>
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
            <tr>
              <td className="txt-center">처리중</td>
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
