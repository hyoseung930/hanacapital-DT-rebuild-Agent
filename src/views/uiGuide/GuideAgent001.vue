<script>
import { ref } from 'vue';

import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';

import Agent_P01_l001 from '@/views/agent/Agent_P01_l001.vue';
import Agent_P00_l002 from '@/views/agent/Agent_P00_l002.vue';
import Agent_P00_l003 from '@/views/agent/Agent_P00_l003.vue';
import Agent_P00_l004 from '@/views/agent/Agent_P00_l004.vue';
import Agent_P00_l005 from '@/views/agent/Agent_P00_l005.vue';
import Agent_P00_l006 from '@/views/agent/Agent_P00_l006.vue';
import Agent_P00_l007 from '@/views/agent/Agent_P00_l007.vue';
import Agent_P00_l008 from '@/views/agent/Agent_P00_l008.vue';
import Agent_P00_l009 from '@/views/agent/Agent_P00_l009.vue';
import Agent_P00_l010 from '@/views/agent/Agent_P00_l010.vue';
import Agent_P00_l011 from '@/views/agent/Agent_P00_l011.vue';
import Agent_P00_l012 from '@/views/agent/Agent_P00_l012.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Agent_P01_l001,
    Agent_P00_l002,
    Agent_P00_l003,
    Agent_P00_l004,
    Agent_P00_l005,
    Agent_P00_l006,
    Agent_P00_l007,
    Agent_P00_l008,
    Agent_P00_l009,
    Agent_P00_l010,
    Agent_P00_l011,
    Agent_P00_l012,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);
    const layer010 = ref(null);
    const layer011 = ref(null);
    const layer012 = ref(null);

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
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };
    const layer011Open = (e = {}) => {
      layer011.value.layer.open(e.target);
    };
    const layer012Open = (e = {}) => {
      layer012.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer009,
      layer010,
      layer011,
      layer012,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
      layer011Open,
      layer012Open,
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
          공지팝업<br />Agent_P01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          서류등록 팝업<br />Agent_P00_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          상담등록내역 팝업<br />Agent_P00_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          상담등록내역 팝업<br />Agent_P00_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          상담/사전승인 내역 조회 팝업<br />Agent_P00_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          신주소 팝업<br />Agent_P00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          개설은행 조회 팝업<br />Agent_P00_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          제조사 조회 팝업<br />Agent_P00_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          사전신용정보조회동의 URL발송 팝업<br />Agent_P00_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          판매대리점 조회 팝업<br />Agent_P00_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          품목 선택 팝업<br />Agent_P00_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          국적 조회 팝업<br />Agent_P00_l012
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Agent_P01_l001 ref="layer001" />
    <Agent_P00_l002 ref="layer002" />
    <Agent_P00_l003 ref="layer003" />
    <Agent_P00_l004 ref="layer004" />
    <Agent_P00_l005 ref="layer005" />
    <Agent_P00_l006 ref="layer006" />
    <Agent_P00_l007 ref="layer007" />
    <Agent_P00_l008 ref="layer008" />
    <Agent_P00_l009 ref="layer009" />
    <Agent_P00_l010 ref="layer010" />
    <Agent_P00_l011 ref="layer011" />
    <Agent_P00_l012 ref="layer012" />
  </PageContents>
</template>
