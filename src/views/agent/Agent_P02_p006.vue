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
            <col width="114px" />
            <col width="92px" />
            <col width="120px" />
            <col width="92px" />
            <col width="80px" />
            <col width="92px" />
            <col width="160px" />
            <col width="82px" />
            <col width="100px" />
            <col width="80px" />
            <col width="80px" />
            <col width="148px" />
            <col width="120px" />
            <col width="200px" />
            <col width="90px" />
            <col width="160px" />
            <col width="200px" />
            <col width="110px" />
            <col width="156px" />
            <col width="80px" />
            <col width="158px" />
            <col width="130px" />
            <col width="80px" />
            <col width="110px" />
            <col width="80px" />
          </colgroup>
          <thead>
            <tr>
              <th>품의일</th>
              <th>실행일자</th>
              <th>진행상태</th>
              <th>온 · 약대상</th>
              <th>온 · 약완료</th>
              <th>이미지등록</th>
              <th>서류수신</th>
              <th>계약확인콜</th>
              <th>콜배정</th>
              <th>ARS 요청</th>
              <th>콜상태</th>
              <th>대금지급</th>
              <th>이용자명</th>
              <th>주민/사업자번호</th>
              <th>대출금액</th>
              <th>품목</th>
              <th>할부기간</th>
              <th>심사자명</th>
              <th>판매점명</th>
              <th>온라인약정</th>
              <th>실행취소/중도상환일</th>
              <th>채권상태</th>
              <th>유입경로</th>
              <th>신용조회동의</th>
              <th>배송대상</th>
              <th>배송문자</th>
              <th>배송완료</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center cGreen">승인</td>
              <td class="txt-center">O</td>
              <td class="txt-center">휴대전화인증</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">ARS</button>
                </div>
              </td>
              <td class="txt-center">일반(완료)</td>
              <td class="txt-center">완료</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">LED 전광판</td>
              <td class="txt-center">120개월</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">제우스이엔지</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">정상</td>
              <td class="txt-center">스마트폰(모바일웹)</td>
              <td class="txt-center">온라인(SMS)</td>
              <td class="txt-center">O</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">O</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">작성중</td>
              <td class="txt-center">O</td>
              <td class="txt-center">휴대전화인증</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">ARS</button>
                </div>
              </td>
              <td class="txt-center">일반(완료)</td>
              <td class="txt-center">완료</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">LED 전광판</td>
              <td class="txt-center">120개월</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">제우스이엔지</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">정상</td>
              <td class="txt-center">스마트폰(모바일웹)</td>
              <td class="txt-center">온라인(SMS)</td>
              <td class="txt-center">O</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">O</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center cRed">미실행취소</td>
              <td class="txt-center">O</td>
              <td class="txt-center">휴대전화인증</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">ARS</button>
                </div>
              </td>
              <td class="txt-center">일반(완료)</td>
              <td class="txt-center">완료</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">LED 전광판</td>
              <td class="txt-center">120개월</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">제우스이엔지</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">정상</td>
              <td class="txt-center">스마트폰(모바일웹)</td>
              <td class="txt-center">온라인(SMS)</td>
              <td class="txt-center">O</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">O</td>
            </tr>
            <tr>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center cRed">미실행취소</td>
              <td class="txt-center">O</td>
              <td class="txt-center">휴대전화인증</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">O</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">ARS</button>
                </div>
              </td>
              <td class="txt-center">일반(완료)</td>
              <td class="txt-center">완료</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">123456-1******</td>
              <td class="txt-center">999,999,999</td>
              <td class="txt-center">LED 전광판</td>
              <td class="txt-center">120개월</td>
              <td class="txt-center">김하나</td>
              <td class="txt-center">제우스이엔지</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
              <td class="txt-center">2023.01.01</td>
              <td class="txt-center">정상</td>
              <td class="txt-center">스마트폰(모바일웹)</td>
              <td class="txt-center">온라인(SMS)</td>
              <td class="txt-center">O</td>
              <td class="txt-center">
                <div class="flex-container">
                  <button class="btn btn-s05">SMS발송</button>
                </div>
              </td>
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
