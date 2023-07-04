<script>
// Agent_P03_p001
import PageContents from '@/components_agent/ui/agent/PageContents.vue';
import PageHead from '@/components_agent/ui/text/PageHead.vue';
import PageTitle from '@/components_agent/ui/text/PageTitle.vue';

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
      <PageTitle>판매/품목내역</PageTitle>
    </PageHead>

    <div className="container">
      <div class="search--container">
        <div class="search--container__box">
          <div class="search--container__list">
            <div class="search--container__list-title">사업자번호</div>
            <div class="search--container__list-contents w15p">
              <input type="text" />
            </div>
            <div class="search--container__list-title">품목</div>
            <div class="search--container__list-contents w45p">
              <input type="text" />
            </div>
          </div>
        </div>

        <div class="btn-container">
          <button class="btn btn-s03 btn-search-02">
            신규판매점 신용정보 SMS발송
          </button>
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

      <div className="scroll-container over-h">
        <table className="table-type-04 bt">
          <colgroup>
            <col width="15%" />
            <col width="15%" />
            <col width="15%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="8%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th>판매점명</th>
              <th>물품분류명</th>
              <th>물품명</th>
              <th>판매점코드</th>
              <th>적용금리</th>
              <th>등록일자</th>
              <th>적용일자</th>
              <th>적용종료일자</th>
              <th>이자부과여부</th>
              <th>담당자명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="txt-center">제우스이엔지</td>
              <td className="txt-center">보일러/태양광</td>
              <td className="txt-center">태양광(가정용-장기)</td>
              <td className="txt-center">1234512</td>
              <td className="txt-center">99%</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">2023.01.01</td>
              <td className="txt-center">이자부과</td>
              <td className="txt-center">김하나</td>
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
@import '@/assets_agent/scss/views/agent/AgentCommon.scss';
</style>
