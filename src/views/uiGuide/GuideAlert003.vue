<script>
import { ref } from 'vue';

import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';

import AlertSystem from '@/components_agent/ui/layer/AlertSystem.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    AlertSystem,
  },
  setup() {
    const alert = ref(null);

    const alertOpen = (options) => {
      alert.value.open(options);
    };

    const alertOpen001 = () => {
      alertOpen({
        title: '타이틀',
        buttons: [
          {
            callback: (closeFn) => {
              console.log('확인');
              closeFn();
            },
            closeAfterCallback: () => {
              console.log('[확인] 닫는 애니메이션 끝난 후 호출 될 함수');
            },
          },
        ],
      });
    };

    return {
      alert,
      alertOpen001,
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
        <BasicButton @click="alertOpen001">얼럿</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <AlertSystem ref="alert" />
  </PageContents>
</template>
