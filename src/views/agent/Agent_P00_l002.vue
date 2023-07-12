<script>
import { ref } from 'vue';

import UiLayer from '@/components_agent/ui/layer/UiLayer.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';

import IconImg from '@/assets_agent/images/icon/img.svg?component';
import IconImgColor from '@/assets_agent/images/icon/img-color.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconImg,
    IconImgColor,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <ModalPopup size="large">
      <template v-slot:head>
        <ModalPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
          <PopupTitle>서류등록</PopupTitle>
        </ModalPopupHead>
      </template>
      <ul class="reset-list">
        <li class="row-margin-container-medium">
          <div :class="[$style['upload-button'], 'row-margin-contents']">
            <input
              type="file"
              id="IF_P05_l001_upload001"
              :class="$style['upload-button__input']"
            />
            <div :class="$style['upload-button__block']">
              <span :class="$style['upload-button__img']">
                <IconImg />
              </span>
              <label
                for="IF_P05_l001_upload001"
                :class="$style['upload-button__label']"
                >파일첨부</label
              >
            </div>
          </div>

          <div :class="[$style['upload-file'], $style['upload-file--inside']]">
            <ul :class="$style['upload-file__list']">
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">첨부파일명.png</div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">첨부파일명.gif</div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
              <li :class="$style['upload-file__item']">
                <div :class="$style['upload-file__icon']">
                  <IconImgColor />
                </div>
                <div :class="$style['upload-file__content']">
                  <div :class="$style['upload-file__name']">
                    첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                  </div>
                </div>
                <div :class="$style['upload-file__button']">
                  <BasicButton line="true" theme="quaternary" size="small">
                    삭제
                  </BasicButton>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>

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
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets_agent/scss/components/import/upload-button.scss';
@import '@/assets_agent/scss/components/import/upload-file.scss';
@import '@/assets_agent/scss/components/import/basic-table.scss';
</style>

<style lang="scss" scoped>
@import '@/assets_agent/scss/views/agent/AgentCommon.scss';
</style>

