<script>
import { ref } from 'vue';
// Agent_P00_l003

import AgentPopup from '@/components_agent/ui/popup/AgentPopup.vue';

export default {
  components: {
    AgentPopup,
  },
  setup() {
    const agentPopup = ref(true);
    const startDate = '2022-01-01';
    const endDate = '2022-01-01';
    const scrollList = ref('auto');

    return {
      startDate,
      endDate,
      agentPopup,
      scrollList,
    };
  },
};
</script>

<template>
  <AgentPopup :isAgent="agentPopup" :isScrollHeight="scrollList">
    <template #title>
      <div class="agent--container__title">서류등록</div>
    </template>
    <template #contents>
      <div class="container pb80">
        <table class="table-type-04 none-search-small bt">
          <tbody>
            <tr>
              <td>등록된 게시글이 없습니다.</td>
            </tr>
          </tbody>
        </table>

        <div class="file-send">
          <div class="flex-container jcsb">
            <div class="flex-container jcfs">
              <i class="ico ico-image-no"></i>
              파일첨부
            </div>
            <i class="ico ico-plus-gray"></i>
          </div>
        </div>

        <div class="scroll-container over-w mxh-350">
          <div class="file-list">
            <div class="flex-container jcsb">
              <div class="flex-container jcfs">
                <i class="ico ico-image"></i>
                파일명.jpg
              </div>
              <button class="btn btn-s05">삭제</button>
            </div>
            <div class="flex-container jcsb">
              <div class="flex-container jcfs">
                <i class="ico ico-image"></i>
                파일명.jpg
              </div>
              <button class="btn btn-s05">삭제</button>
            </div>
            <div class="flex-container jcsb">
              <div class="flex-container jcfs">
                <i class="ico ico-image"></i>
                파일명.jpg
              </div>
              <button class="btn btn-s05">삭제</button>
            </div>
            <div class="flex-container jcsb">
              <div class="flex-container jcfs">
                <i class="ico ico-image"></i>
                파일명.jpg
              </div>
              <button class="btn btn-s05">삭제</button>
            </div>
            <div class="flex-container jcsb">
              <div class="flex-container jcfs">
                <i class="ico ico-image"></i>
                파일명.jpg
              </div>
              <button class="btn btn-s05">삭제</button>
            </div>
            <div class="flex-container jcsb">
              <div class="flex-container jcfs">
                <i class="ico ico-image"></i>
                파일명.jpg
              </div>
              <button class="btn btn-s05">삭제</button>
            </div>
          </div>
        </div>

        <div class="explan mt40">
          <p>
            서류등록 파일은 이미지 파일만 가능합니다. (jpg, jpge, png, gif, tif,
            pdf 파일)
          </p>
          <p>서류등록 파일은 최대 5개까지 등록 가능합니다.</p>
        </div>

        <div class="btn-container fixed">
          <button class="btn btn-s01 btn-search">저장</button>
        </div>
      </div>
    </template>
  </AgentPopup>
</template>
