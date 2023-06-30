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
    <div className="container main">
      <div className="flex-container">
        <div className="error-box flex-container fw">
          <img src="@/assets/images/illustration/img-error.png" />
          <div className="error-box-title">
            죄송합니다.<br />페이지 오류가 발생했습니다
          </div>
          <div className="error-box-content">MCI.RQS.ERROR.0000000</div>
          <div className="btn-container">
            <button className="btn btn-s01">홈으로</button>
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
