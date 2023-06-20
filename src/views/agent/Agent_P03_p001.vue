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
};
</script>

<template>
  <PageContents>
    <PageHead>
      <PageTitle>상담등록</PageTitle>
    </PageHead>

    <div className="container">
      <div className="title">
        승계 전 고객상담정보

        <div className="btn-container">
          <button className="btn btn-s03">상담등록내역</button>
          <button className="btn btn-s02">승계전이용자조회</button>
        </div>
      </div>

      <table className="table-type-01">
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
            <td className="title">성명(상호)</td>
            <td>홍길동</td>
            <td className="title">품목</td>
            <td>이온수기 온누리헬스케어</td>
            <td className="title">판매점명</td>
            <td>㈜온누리헬스케어</td>
          </tr>
          <tr>
            <td className="title">형태구분</td>
            <td>개인</td>
            <td className="title">실행금액</td>
            <td>1,200,000원</td>
            <td className="title">월할부금</td>
            <td>60,000원</td>
          </tr>
          <tr>
            <td className="title">주민/사업자번호</td>
            <td>123456-1******</td>
            <td className="title">원금잔액</td>
            <td>780,000원</td>
            <td className="title">결제일자</td>
            <td>01</td>
          </tr>
          <tr>
            <td className="title">실행일자</td>
            <td>2023.01.01</td>
            <td className="title">잔여/총회차</td>
            <td>13/20</td>
            <td className="title">이자형태/적용금리</td>
            <td>무지아/0</td>
          </tr>
          <tr>
            <td className="title">승계수수료/인지대</td>
            <td>0/0</td>
            <td className="title">AG손배조건부</td>
            <td colSpan="3">N</td>
          </tr>
        </tbody>
      </table>

      <div className="title">승계 후 고객상담정보</div>

      <table className="table-type-01">
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
            <td className="title required">성명(상호)</td>
            <td>
              <input type="text" value="김아무" />
            </td>
            <td className="title required">주민등록번호</td>
            <td>
              <div className="flex-container">
                <input type="text" value="123456-1******" />
                <button className="btn btn-s03">확인</button>
              </div>
            </td>
            <td className="title required">품목</td>
            <td>
              <input type="text" value="이온수기 온누리헬스케어" disabled />
            </td>
          </tr>
          <tr>
            <td className="title">대표자명</td>
            <td>
              <input type="text" value="이온수기 온누리헬스케어" disabled />
            </td>
            <td className="title">사업자번호</td>
            <td>
              <div className="flex-container">
                <input type="text" value="" disabled />
                <button className="btn btn-s04">확인</button>
              </div>
            </td>
            <td className="title">물품단가/수령</td>
            <td>
              <div className="flex-container">
                <input type="text" className="rt" value="840,000" disabled />원
                <input type="text" className="rt" value="1" disabled />개
              </div>
            </td>
          </tr>
          <tr>
            <td className="title required">형태구분</td>
            <td>
              <div className="flex-container jcfs">
                <div className="radio-container">
                  <label className="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span></span>
                    개인
                  </label>
                </div>
                <div className="radio-container">
                  <label className="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span></span>
                    사업자
                  </label>
                </div>
                <div className="radio-container">
                  <label className="flex-container jcfs">
                    <input type="radio" name="type" />
                    <span></span>
                    법인
                  </label>
                </div>
              </div>
            </td>
            <td className="title required">신용정보조회동의</td>
            <td>
              <div className="flex-container">
                <input type="text" value="온라인(SMS)" disabled />
                <button className="btn btn-s03">선택</button>
              </div>
            </td>
            <td className="title">물품구입금액</td>
            <td>
              <div className="flex-container">
                <input type="text" className="rt" value="840,000" disabled />원
              </div>
            </td>
          </tr>
          <tr>
            <td className="title required">거래구분/관계</td>
            <td>
              <div className="flex-container">
                <div className="select-container">
                  <select>
                    <option>이용자</option>
                  </select>
                </div>
                <div className="select-container">
                  <select disabled>
                    <option>본인</option>
                  </select>
                </div>
              </div>
            </td>
            <td className="title">할부신청금액</td>
            <td>
              <div className="flex-container">
                <input type="text" className="rt" value="840,000" disabled />원
              </div>
            </td>
            <td className="title">할부기간</td>
            <td>
              <div className="flex-container">
                <div className="select-container">
                  <select>
                    <option>7개월</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="title">AG손배조건부취급</td>
            <td colSpan="5">
              <div className="flex-container jcfs">
                <div className="radio-container">
                  <label className="flex-container jcfs">
                    <input type="radio" name="a1" />
                    <span></span>
                    Y
                  </label>
                </div>
                <div className="radio-container">
                  <label className="flex-container jcfs">
                    <input type="radio" name="a1" />
                    <span></span>
                    N
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="title">
        승인결과 내역

        <div className="btn-container">
          <button className="btn btn-s03">상담등록</button>
        </div>
      </div>

      <table className="table-type-01">
        <colgroup>
          <col width="15%" />
          <col width="85%" />
        </colgroup>
        <thead>
          <tr>
            <th>심사유형</th>
            <th>진행절차</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="txt-center">시스템거절</td>
            <td>시스템거절 건으로 취급이 불가합니다.</td>
          </tr>
        </tbody>
      </table>

      <div className="title">
        이용자 · 연대보증인 내역

        <div className="btn-container">
          <button className="btn btn-s05">삭제</button>
          <button className="btn btn-s02">
            <i className="ico ico-plus"></i>고객추가등록
          </button>
        </div>
      </div>

      <table className="table-type-01">
        <colgroup>
          <col width="5%" />
          <col width="15%" />
          <col width="15%" />
          <col />
          <col width="15%" />
          <col width="10% " />
        </colgroup>
        <thead>
          <tr>
            <th>선택</th>
            <th>거래구분</th>
            <th>관계</th>
            <th>고객명</th>
            <th>주민/사업자번호</th>
            <th>판정결과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="txt-center"><i className="ico ico-checked"></i></td>
            <td className="txt-center">이용자</td>
            <td className="txt-center">본인</td>
            <td className="txt-center">㈜고은푸드</td>
            <td className="txt-center">123-45-7****</td>
            <td className="txt-center">거절</td>
          </tr>
          <tr>
            <td className="txt-center"><i className="ico ico-nchecked"></i></td>
            <td className="txt-center">이용자</td>
            <td className="txt-center">본인</td>
            <td className="txt-center">㈜고은푸드</td>
            <td className="txt-center">123-45-7****</td>
            <td className="txt-center">거절</td>
          </tr>
        </tbody>
      </table>

      <div className="title">
        상담 · 심사의견 내역

        <div className="btn-container">
          <button className="btn btn-s05">부결</button>
          <button className="btn btn-s02">심사승인</button>
        </div>
      </div>

      <table className="table-type-01">
        <colgroup>
          <col width="10%" />
          <col width="10%" />
          <col width="15%" />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>처리구분</th>
            <th>처리결과</th>
            <th>처리일자</th>
            <th>상담/심사의견</th>
            <th>조건부승인내역</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="txt-center">상담의견</td>
            <td className="txt-center">심사요청</td>
            <td className="txt-center">2022.10.26 14:15:15</td>
            <td>
              <input type="text" value="승인" />
            </td>
            <td className="txt-center h-72" rowSpan="2">
              <div className="scroll-container">
                조건부 승인 내역이 해당 영역에 노출될 예정입니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.<br />
                높이는 고정이며, 길어질 경우 스크롤이 생성됩니다.
              </div>
            </td>
          </tr>
          <tr>
            <td className="txt-center">상담의견</td>
            <td className="txt-center">심사요청</td>
            <td className="txt-center">2022.10.26 14:15:15</td>
            <td className="bdr">일반심사건입니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageContents>

  <AgentPopup></AgentPopup>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/Agent_P03_p001.scss';
</style>
