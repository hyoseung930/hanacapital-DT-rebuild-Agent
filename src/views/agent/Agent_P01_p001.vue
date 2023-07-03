<script>
// Agent_P03_p001
import PageContents from '@/components_agent/ui/agent/PageContents.vue';

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
    </div>
  </PageContents>

  <AgentPopup></AgentPopup>
</template>

<style lang="scss" scoped>
@import '@/assets_agent/scss/views/agent/AgentCommon.scss';
</style>
