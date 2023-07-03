<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';

import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import PageHead from '@/components_agent/ui/text/PageHead.vue';
import PageHeadRow from '@/components_agent/ui/text/PageHeadRow.vue';
import PageTitle from '@/components_agent/ui/text/PageTitle.vue';
import PageMainText from '@/components_agent/ui/text/PageMainText.vue';
import PageSubText from '@/components_agent/ui/text/PageSubText.vue';

export default {
  components: {
    PageContents,
    PageHead,
    PageHeadRow,
    PageTitle,
    PageMainText,
    PageSubText,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 제거
      store.ui.common.setRootClassName();
    });

    return {
      store,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>contents head</template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">타이틀</PageTitle>
        <template v-slot:right>Optional Area</template>
      </PageHeadRow>
      <PageMainText align="left">
        메인 텍스트 메인 텍스트 메인 텍스트 메인 텍스트
      </PageMainText>
      <PageSubText align="left">
        서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트 서브 텍스트
        서브 텍스트 서브 텍스트
      </PageSubText>
    </PageHead>

    <div style="height: 1500px; border: 10px dotted #666">
      스크롤 생기게 하기 위한 더미
    </div>

    <template v-slot:foot>contents foot</template>
  </PageContents>
</template>
