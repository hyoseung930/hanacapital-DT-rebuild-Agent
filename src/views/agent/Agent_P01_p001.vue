<script>
// Agent_P03_p001
import PageContents from '@/components/ui/agent/PageContents.vue';

export default {
  components: {
    PageContents,
  },
};
</script>

<template>
  <PageContents>
    <div class="container main">
      <div class="flex-container main-container aifs">
        <div class="flex-container fw">
          <div class="title w100p">
            공지사항

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt none-search">
              <tbody>
                <tr>
                  <td class="none-border">등록된 게시글이 없습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex-container fw">
          <div class="title w100p">
            교육정보

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt">
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container jcsb">
                      <strong>개인정보보호법 관련</strong>
                      <span class="date">2023.01.01</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex-container main-container aifs">
        <div class="flex-container fw">
          <div class="title w100p">
            업무절차

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt">
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container jcsb">
                      <strong>개인정보보호법 관련</strong>
                      <span class="date">2023.01.01</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex-container fw">
          <div class="title w100p">
            각종서식다운로드

            <div class="btn-container">
              <button class="btn btn-snone">
                더보기
                <i class="ico ico-arrow"></i>
              </button>
            </div>
          </div>
          <div class="flex-container">
            <table class="table-type-04 bt">
              <tbody>
                <tr>
                  <td>
                    <div class="flex-container jcsb">
                      <strong>개인정보보호법 관련</strong>
                      <span class="date">2023.01.01</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="flex-container">
        <div class="error-box flex-container fw">
          <img src="@/assets/images/illustration/img-error.png" />
          <div class="error-box-title">
            죄송합니다.<br />페이지 오류가 발생했습니다
          </div>
          <div class="error-box-content">MCI.RQS.ERROR.0000000</div>
          <div class="btn-container">
            <button class="btn btn-s01">홈으로</button>
          </div>
        </div>
      </div>
    </div>
  </PageContents>

  <AgentPopup></AgentPopup>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/agent/AgentCommon.scss';
</style>
