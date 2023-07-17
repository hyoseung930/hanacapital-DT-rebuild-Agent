<script>
import { ref } from 'vue';

import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';

// import layer from '@/views/';
import Agent_P09_l001 from '@/views/agent/Agent_P09_l001.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Agent_P09_l001,
    // layer,
  },
  setup() {
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
      align="full"
    >
      <ButtonListItem>
        <BasicButton @click="layer001Open">
          SGI 가입정보<br />Agent_P09_l001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <!--
    <layer ref="layer001" />
    -->
    <Agent_P09_l001 ref="layer001" />
  </PageContents>
</template>
