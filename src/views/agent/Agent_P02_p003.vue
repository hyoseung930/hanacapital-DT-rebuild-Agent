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
      <PageTitle>상담등록내역</PageTitle>
    </PageHead>

    <div class="container">
      <div class="search-container">
        <table class="table-type-search">
          <colgroup>
            <col width="6%" />
            <col width="27%" />
            <col width="6%" />
            <col width="27%" />
            <col width="6%" />
            <col width="27%" />
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
              <td class="title">검색조건</td>
              <td>
                <div class="flex-container">
                  <div class="select-container">
                    <select>
                      <option>고객명</option>
                    </select>
                  </div>
                  <input type="text" />
                </div>
              </td>
              <td class="title">판매점</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td class="title">사업자번호</td>
              <td>
                <input type="text" />
              </td>
              <td class="title">상담결과</td>
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
                      접수
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a1" />
                      <span class="small"></span>
                      심사중
                    </label>
                  </div>
                  <div class="radio-container">
                    <label class="flex-container jcfs">
                      <input type="radio" name="a1" />
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

      <table class="table-type-01">
        <colgroup>
          <col width="7%" />
          <col width="7%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="6%" />
          <col width="7%" />
          <col width="6%" />
          <col width="5%" />
          <col width="10%" />
          <col width="10%" />
          <col width="8%" />
        </colgroup>
        <thead>
          <tr>
            <th>상담일</th>
            <th>구분</th>
            <th>상담채널</th>
            <th>고객명</th>
            <th>주민/사업자번호</th>
            <th>판정결과</th>
            <th>신청금액</th>
            <th>상담결과</th>
            <th>AG손배</th>
            <th>품목</th>
            <th>판매점</th>
            <th>온라인약정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-success">정상</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-success">정상</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-bad">거절</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center cGreen">승인</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="txt-center">2023.01.01</td>
            <td class="txt-center">이용자</td>
            <td class="txt-center">홈페이지(AG)</td>
            <td class="txt-center">김하나</td>
            <td class="txt-center">123456-1******</td>
            <td class="txt-center">
              <span class="status status-warning">유의</span>
            </td>
            <td class="txt-center">999,999,999</td>
            <td class="txt-center">심사중</td>
            <td class="txt-center">N</td>
            <td class="txt-center">식기세척기</td>
            <td class="txt-center">케이네트웍스</td>
            <td class="txt-center">
              <div class="flex-container">
                <button class="btn btn-s05">SMS발송</button>
              </div>
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
