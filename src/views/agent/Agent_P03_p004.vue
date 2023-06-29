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
      <PageTitle>계약등록내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search-container">
        <table class="table-type-search">
          <colgroup>
            <col width="6%" />
            <col width="20%" />
            <col width="7%" />
            <col width="20%" />
            <col width="7%" />
            <col width="40%" />
          </colgroup>
          <tbody>
            <tr>
              <td class="title">일자선택</td>
              <td colspan="3">
                <div class="flex-container jcfs">
                  <div class="radio-container w60p">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a3" checked />
                      <span class="small"></span>
                      품의일자
                    </label>
                  </div>
                  <div class="radio-container w60p">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a3" />
                      <span class="small"></span>
                      실행일자
                    </label>
                  </div>
                  <input type="date" v-model="startDate" />
                  <span>-</span>
                  <input type="date" v-model="endDate" />
                </div>
              </td>
              <td class="title">고객구분</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>선택</option>
                    </select>
                  </div>
                  <input type="text" />
                </div>
              </td>
            </tr>
            <tr>
              <td class="title" colspan="2">
                <div class="flex-container jcfs">
                  품목&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" class="w70p" />
                </div>
              </td>
              <td class="title" colspan="2">
                <div class="flex-container jcfs">
                  판매점&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" class="w80p" />
                </div>
              </td>
              <td class="title">결제상태</td>
              <td>
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a1" checked />
                      <span class="small"></span>
                      전체
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a1" />
                      <span class="small"></span>
                      완료
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a1" />
                      <span class="small"></span>
                      미완료
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="title">진행상태</td>
              <td colspan="3">
                <div class="flex-container jcfs">
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" checked />
                      <span class="small"></span>
                      전체
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" />
                      <span class="small"></span>
                      작성중
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" />
                      <span class="small"></span>
                      미실행취소
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a2" />
                      <span class="small"></span>
                      승인
                    </label>
                  </div>
                </div>
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
            <i class="ico ico-excel"></i>엑셀변환
          </button>
        </div>
      </div>

      <div class="scroll-container over-h">
        <table class="table-type-04 bt">
          <colgroup>
            <col width="114px" />
            <col width="114px" />
            <col width="186px" />
            <col width="80px" />
            <col width="80px" />
            <col width="66px" />
            <col width="66px" />
            <col width="80px" />
            <col width="92px" />
            <col width="80px" />
            <col width="106px" />
            <col width="134px" />
            <col width="122px" />
            <col width="200px" />
            <col width="90px" />
            <col width="76px" />
            <col width="200px" />
            <col width="90px" />
            <col width="80px" />
            <col width="90px" />
            <col width="80px" />
          </colgroup>
          <thead>
            <tr>
              <th>품의일</th>
              <th>실행일자</th>
              <th>품의번호</th>
              <th>진행상태</th>
              <th>해피콜</th>
              <th>콜배정</th>
              <th>이미지등록</th>
              <th>서류수신</th>
              <th>대금지급상태</th>
              <th>약정서류진행상태</th>
              <th>이용자명</th>
              <th>주민/사업자번호</th>
              <th>대출금액</th>
              <th>품목</th>
              <th>할부기간</th>
              <th>심사자</th>
              <th>판매점</th>
              <th>전 이용자</th>
              <th>약정완료</th>
              <th>후 이용자</th>
              <th>약정완료</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">D12345-12345-1234</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">진행중</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">LED 전광판</td>
              <td class="txt-center">120개월</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">제우스이엔지</td>
              <td class="txt-center">오프라인</td>
              <td class="txt-center">O</td>
              <td class="txt-center">오프라인</td>
              <td class="txt-center">O</td>
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
