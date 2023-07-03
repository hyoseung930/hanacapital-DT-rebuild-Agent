<script>
// Agent_P07_p002
import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import PageHead from '@/components_agent/ui/text/PageHead.vue';
import PageTitle from '@/components_agent/ui/text/PageTitle.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';
import TextButton from '@/components_agent/ui/button/TextButton.vue';

import IconDownloadSmall from '@/assets_agent/images/icon/download-small.svg?component';

export default {
  components: {
    PageContents,
    PageHead,
    PageTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    IconDownloadSmall,
  },
};
</script>

<template>
  <PageContents size="wide">
    <PageHead>
      <PageTitle>각종서식다운로드</PageTitle>
    </PageHead>

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <div
          :class="[
            $style['board-detail__head-cell'],
            $style['board-detail__head-cell--title'],
          ]"
        >
          <h3 :class="$style['board-detail__title']">게시물 제목</h3>
        </div>
        <div :class="$style['board-detail__head-cell']">관리자</div>
        <div :class="$style['board-detail__head-cell']">2022.08.30</div>
        <div :class="$style['board-detail__head-cell']">23</div>
      </div>

      <section :class="$style['board-detail__contents']">
        // 게시물 내용 노출
      </section>

      <!-- Case : 첨부 파일 없을시 비노출 -->
      <div :class="$style['board-detail__foot']">
        <div :class="$style['download-list']">
          <ul :class="$style['download-list__list']">
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
            <li :class="$style['download-list__item']">
              <TextButton
                iconSize="large"
                textSize="regular"
                tagName="a"
                href="/foo/bar.pdf"
                download
              >
                첨부파일.pdf
                <template v-slot:rightIcon>
                  <IconDownloadSmall :class="$style['download-list__icon']" />
                </template>
              </TextButton>
            </li>
          </ul>
        </div>
      </div>
      <!-- // Case : 첨부 파일 없을시 비노출 -->
    </div>

    <ButtonList
      :wrap="true"
      align="center"
      :classNames="{
        wrap: 'row-margin-block-small',
      }"
    >
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/agent/Agent_P07_p001"
          >목록</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets_agent/scss/views/agent/Agent_P07_p002.scss';
</style>
