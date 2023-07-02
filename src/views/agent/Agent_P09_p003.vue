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
      <PageTitle>수납진행내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">수납요청일자</div>
            <div class="search--container__list-contents">
              <input type="date" v-model="startDate" />
              <span>~</span>
              <input type="date" v-model="endDate" />
            </div>
            <div class="search--container__list-title">진행상태</div>
            <div class="search--container__list-contents">
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
                  정상
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  오류
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a1" />
                  <span class="small"></span>
                  보류
                </label>
              </div>
            </div>
          </div>
          <div class="search--container__list">
            <div class="search--container__list-title">검색조건</div>
            <div class="search--container__list-contents w35p">
              <div class="select-container">
                <select>
                  <option value="1">제휴사주문번호</option>
                </select>
              </div>
              <input type="text" />
            </div>
            <div class="search--container__list-title">고객구분</div>
            <div class="search--container__list-contents">
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
                  개인
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a2" />
                  <span class="small"></span>
                  개인사업자
                </label>
              </div>
              <div class="radio-container">
                <label class="flex-container jcfs">
                  <input type="radio" name="a2" />
                  <span class="small"></span>
                  법인
                </label>
              </div>
            </div>
            <div class="search--container__list-title">승계여부</div>
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
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th>항목</th>
            <th>전체</th>
            <th>부결</th>
            <th>승인</th>
            <th>심사</th>
            <th>매입</th>
            <th>매입대기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center cDisabled">건수</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
            <td class="txt-center">368</td>
          </tr>
          <tr>
            <td class="txt-center cDisabled">금액</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
            <td class="txt-center">2,152,580,000</td>
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
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <col width="6%" />
          <col width="7%" />
          <col width="7%" />
          <col width="15%" />
          <col width="8%" />
        </colgroup>
        <thead>
          <tr>
            <th>순번</th>
            <th>심사요청일자</th>
            <th>제휴사주문번호</th>
            <th>상담번호</th>
            <th>고객명</th>
            <th>심사결과</th>
            <th>고객구분</th>
            <th>신청개월수</th>
            <th>심사품목</th>
            <th>승계여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">1234567891234</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center cRed">부결</td>
            <td class="txt-center">개인</td>
            <td class="txt-center">120개월</td>
            <td class="txt-center">[리체]수납장</td>
            <td class="txt-center">Y</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">1234567891234</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">개인</td>
            <td class="txt-center">120개월</td>
            <td class="txt-center">[리체]수납장</td>
            <td class="txt-center">Y</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">1234567891234</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">개인</td>
            <td class="txt-center">120개월</td>
            <td class="txt-center">[리체]수납장</td>
            <td class="txt-center">Y</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">1234567891234</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">개인</td>
            <td class="txt-center">120개월</td>
            <td class="txt-center">[리체]수납장</td>
            <td class="txt-center">Y</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">1234567891234</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">개인</td>
            <td class="txt-center">120개월</td>
            <td class="txt-center">[리체]수납장</td>
            <td class="txt-center">Y</td>
          </tr>
          <tr>
            <td class="txt-center">1</td>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">1234567891234</td>
            <td class="txt-center">C12345678901234</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">개인</td>
            <td class="txt-center">120개월</td>
            <td class="txt-center">[리체]수납장</td>
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
