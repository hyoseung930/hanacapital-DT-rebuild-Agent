<script>
import { ref } from 'vue';

import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';

// import layer from '@/views/';
import Agent_P02_l002 from '@/views/agent/Agent_P02_l002.vue';
import Agent_P02_l003 from '@/views/agent/Agent_P02_l003.vue';
import Agent_P02_l004 from '@/views/agent/Agent_P02_l004.vue';
import Agent_P02_l005 from '@/views/agent/Agent_P02_l005.vue';
import Agent_P02_l006 from '@/views/agent/Agent_P02_l006.vue';
import Agent_P02_l007 from '@/views/agent/Agent_P02_l007.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Agent_P02_l002,
    Agent_P02_l003,
    Agent_P02_l004,
    Agent_P02_l005,
    Agent_P02_l006,
    Agent_P02_l007,
    // layer,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };

    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
    };

    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
          상환스케줄 시뮬레이터<br />Agent_P02_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          상환스케줄<br />Agent_P02_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          본인확인(본의명의 휴대폰소지자)<br />Agent_P02_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          하나캐피탈 전자 약정 URL발송<br />Agent_P02_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          판매점 제휴 협약을 위한 개인(신용)정보동의 URL발송<br />Agent_P02_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          하나캐피탈 할부 상담 URL 발송<br />Agent_P02_l007
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <!--
    <layer ref="layer001" />
    -->
    <Agent_P02_l002 ref="layer001" />
    <Agent_P02_l003 ref="layer002" />
    <Agent_P02_l004 ref="layer003" />
    <Agent_P02_l005 ref="layer004" />
    <Agent_P02_l006 ref="layer005" />
    <Agent_P02_l007 ref="layer006" />
  </PageContents>
</template>
