<script>
// Common_P00_p013
import PageContents from '@/components_agent/ui/layout/PageContents.vue';
import IllustObject from '@/components_agent/ui/common/IllustObject.vue';
import IllustInfo from '@/components_agent/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components_agent/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components_agent/ui/common/IllustInfoText.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';
import IconCustomer from '@/assets_agent/images/icon/customer-center.svg?component';

export default {
  components: {
    PageContents,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconCustomer,
  },
};
</script>

<template>
  <PageContents>
    <IllustInfo>
      <IllustObject type="error" />
      <IllustInfoTitle>서비스를 일부 이용할 수 없습니다</IllustInfoTitle>
      <IllustInfoText>자세한 사항은 고객센터에 문의해 주세요.</IllustInfoText>
    </IllustInfo>

    <ButtonList :wrap="true" align="center">
      <ButtonListItem>
        <BasicButton>확인</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div :class="$style['bottom-info']">
      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">
                  고객센터 1800-1110
                </div>
                <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets_agent/scss/views/error/Common_P00_p013.scss';
</style>
