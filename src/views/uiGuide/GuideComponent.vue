<script>
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';

import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import ButtonList from '@/components_agent/ui/button/ButtonList.vue';
import ButtonListItem from '@/components_agent/ui/button/ButtonListItem.vue';
import TextButton from '@/components_agent/ui/button/TextButton.vue';
import UiLayer from '@/components_agent/ui/layer/UiLayer.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components_agent/ui/layer/PopupSubTitle.vue';
import PopupText from '@/components_agent/ui/layer/PopupText.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';
import AlertPopup from '@/components_agent/ui/layer/AlertPopup.vue';
import CheckBox from '@/components_agent/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components_agent/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components_agent/ui/form/CheckBoxObject.vue';
import RadioButton from '@/components_agent/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components_agent/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components_agent/ui/form/RadioButtonObject.vue';
import InputBlock from '@/components_agent/ui/form/InputBlock.vue';
import InputBlockCell from '@/components_agent/ui/form/InputBlockCell.vue';
import FormList from '@/components_agent/ui/form/FormList.vue';
import FormListItem from '@/components_agent/ui/form/FormListItem.vue';
import FormInvalid from '@/components_agent/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components_agent/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components_agent/ui/form/FormHelpText.vue';
import BasicInput from '@/components_agent/ui/form/BasicInput.vue';
import BasicSelect from '@/components_agent/ui/form/BasicSelect.vue';
import BasicDatepicker from '@/components_agent/ui/form/BasicDatepicker.vue';
import BasicTextarea from '@/components_agent/ui/form/BasicTextarea.vue';
import SecurityInput from '@/components_agent/ui/form/SecurityInput.vue';
import PartInput from '@/components_agent/ui/form/PartInput.vue';
import SecurityKeypadButton from '@/components_agent/ui/button/SecurityKeypadButton.vue';
import SearchButton from '@/components_agent/ui/button/SearchButton.vue';
import BoxCheck from '@/components_agent/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components_agent/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components_agent/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components_agent/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components_agent/ui/form/BoxCheckListItem.vue';
import RoundStatus from '@/components_agent/ui/text/RoundStatus.vue';
import NoticeText from '@/components_agent/ui/text/NoticeText.vue';
import UiTab from '@/components_agent/ui/tab/UiTab.vue';
import UiTabList from '@/components_agent/ui/tab/UiTabList.vue';
import UiTabButton from '@/components_agent/ui/tab/UiTabButton.vue';
import UiTabPanel from '@/components_agent/ui/tab/UiTabPanel.vue';
import NavTab from '@/components_agent/ui/tab/NavTab.vue';
import NavTabButton from '@/components_agent/ui/tab/NavTabButton.vue';
import FilterTab from '@/components_agent/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components_agent/ui/tab/FilterTabButton.vue';
import SubTab from '@/components_agent/ui/tab/SubTab.vue';
import SubTabButton from '@/components_agent/ui/tab/SubTabButton.vue';
import RoundTab from '@/components_agent/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components_agent/ui/tab/RoundTabButton.vue';
import UiAccordion from '@/components_agent/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components_agent/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components_agent/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components_agent/ui/accordion/UiAccordionOpener.vue';
import BasicHr from '@/components_agent/ui/common/BasicHr.vue';
import KeyValue from '@/components_agent/ui/text/KeyValue.vue';
import KeyValueItem from '@/components_agent/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components_agent/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components_agent/ui/text/KeyValueText.vue';
import ContentsButton from '@/components_agent/ui/button/ContentsButton.vue';
import IllustObject from '@/components_agent/ui/common/IllustObject.vue';
import IllustInfo from '@/components_agent/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components_agent/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components_agent/ui/common/IllustInfoText.vue';
import UnitText from '@/components_agent/ui/text/UnitText.vue';
import BankLogo from '@/components_agent/ui/imageData/BankLogo.vue';
import PaginationNav from '@/components_agent/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components_agent/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components_agent/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components_agent/ui/pagination/PaginationNavNumber.vue';
import CarThumb from '@/components_agent/ui/imageData/CarThumb.vue';
import CarEmblem from '@/components_agent/ui/imageData/CarEmblem.vue';
import ColorChip from '@/components_agent/ui/imageData/ColorChip.vue';
import BasicTooltip from '@/components_agent/ui/tooltip/BasicTooltip.vue';
import SelectTable from '@/components_agent/ui/table/SelectTable.vue';
import SelectTableRow from '@/components_agent/ui/table/SelectTableRow.vue';
import UiScroller from '@/components_agent/ui/common/UiScroller.vue';

import IconAdd from '@/assets_agent/images/icon/add.svg?component';
import IconCustomer from '@/assets_agent/images/icon/customer-center.svg?component';
import IconImgColor from '@/assets_agent/images/icon/img-color.svg?component';
import IconImg from '@/assets_agent/images/icon/img.svg?component';
import IconTooltip from '@/assets_agent/images/icon/tooltip.svg?component';
import IconDownloadSmall from '@/assets_agent/images/icon/download-small.svg?component';

import ImgMainSample from '@/assets_agent/images/_dummy/main-sample.svg?component';

export default {
  components: {
    RouterLink,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupText,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    AlertPopup,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicInput,
    BasicSelect,
    BasicDatepicker,
    BasicTextarea,
    SecurityInput,
    PartInput,
    SecurityKeypadButton,
    SearchButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    RoundStatus,
    NoticeText,
    UiTab,
    UiTabList,
    UiTabButton,
    UiTabPanel,
    NavTab,
    NavTabButton,
    FilterTab,
    FilterTabButton,
    SubTab,
    SubTabButton,
    RoundTab,
    RoundTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    UnitText,
    BankLogo,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    CarThumb,
    CarEmblem,
    ColorChip,
    BasicTooltip,
    SelectTable,
    SelectTableRow,
    UiScroller,
    IconAdd,
    IconCustomer,
    IconImgColor,
    IconImg,
    IconTooltip,
    IconDownloadSmall,
    ImgMainSample,
  },

  setup() {
    const state = reactive({
      testError001: false,
      testMinDate001: '',
      testMaxDate001: '',
      testMinDate002: '',
      testMaxDate002: '',
    });

    const layerTest001 = ref(null);
    const layerTest002 = ref(null);
    const layerTest003 = ref(null);
    const layerTest004 = ref(null);
    const layerTest005 = ref(null);
    const testAccordion = ref(null);

    const layerOpenTest001 = (e = {}) => {
      layerTest001.value.open(e.target);
    };
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };
    const layerOpenTest004 = (e = {}) => {
      layerTest004.value.open(e.target);
    };
    const layerOpenTest005 = (e = {}) => {
      layerTest005.value.open(e.target);
    };

    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    const testAccordionAllOpen = () => {
      testAccordion.value.allOpen();
    };
    const testAccordionAllClose = () => {
      testAccordion.value.allClose();
    };

    return {
      state,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      layerTest005,
      testAccordion,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      layerOpenTest005,
      testErrorUpdate001,
      testInputEvent,
      testAccordionAllOpen,
      testAccordionAllClose,
    };
  },
};
</script>

<template>
  <div class="test-component-wrap">
    <h1 class="test-title">Components</h1>

    <section class="test-section">
      <h2 class="test-section-title">Layer</h2>
      <div class="test-section-sub">
        <UiLayer ref="layerTest001" v-slot="layerSlotProps">
          <ModalPopup>
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>최대 높이 800px</PopupText>

            <BasicButton @click="layerOpenTest002">높이 고정 팝업</BasicButton>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest002" v-slot="layerSlotProps">
          <ModalPopup :fix="true">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>

            <BasicButton @click="layerOpenTest003">얼럿형 팝업</BasicButton>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest004" v-slot="layerSlotProps">
          <ModalPopup size="regular">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 800px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest005" v-slot="layerSlotProps">
          <ModalPopup size="large">
            <template v-slot:head>
              <ModalPopupHead>
                <template v-slot:right>
                  <PopupButton @click="layerSlotProps.close()" />
                </template>
                <PopupTitle>타이틀</PopupTitle>
                <template v-slot:sub>
                  <PopupSubTitle>서브 타이틀</PopupSubTitle>
                </template>
              </ModalPopupHead>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>너비 1240px</PopupText>

            <div style="height: 1500px; border: 10px dotted #666">
              스크롤 생기게 하기 위한 더미
            </div>

            <template v-slot:foot>
              <ButtonList
                :wrap="true"
                align="center"
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="regular" :line="true" theme="quaternary"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular">Button 2</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </template>
          </ModalPopup>
        </UiLayer>

        <UiLayer ref="layerTest003" v-slot="layerSlotProps">
          <AlertPopup>
            <template v-slot:head>
              <PopupTitle>타이틀</PopupTitle>
            </template>

            <PopupText>// contents</PopupText>
            <PopupText>// contents</PopupText>

            <template v-slot:foot>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton
                    size="regular"
                    :line="true"
                    theme="quaternary"
                    @click="layerSlotProps.close()"
                    >Button 1</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="regular" @click="layerSlotProps.close()"
                    >Button 2</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </template>
          </AlertPopup>
        </UiLayer>

        <BasicButton @click="layerOpenTest001">모달 팝업</BasicButton>
        <BasicButton @click="layerOpenTest002"
          >모달 팝업 (높이 고정)</BasicButton
        >
        <BasicButton @click="layerOpenTest004"
          >모달 팝업 (너비 800)</BasicButton
        >
        <BasicButton @click="layerOpenTest005"
          >모달 팝업 (너비 1240)</BasicButton
        >
        <BasicButton @click="layerOpenTest003">얼럿형 팝업</BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BasicButton</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">button tag</h3>
        <BasicButton>Button</BasicButton>
        <BasicButton :disabled="true">Button</BasicButton>
        <BasicButton theme="secondary">Button</BasicButton>
        <BasicButton theme="secondary" :disabled="true">Button</BasicButton>
        <BasicButton theme="tertiary">Button</BasicButton>
        <BasicButton theme="tertiary" :disabled="true">Button</BasicButton>
        <BasicButton theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>

        <BasicButton :line="true">Button</BasicButton>
        <BasicButton :line="true" :disabled="true">Button</BasicButton>
        <BasicButton :line="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="secondary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="tertiary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton :line="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton :line="true" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a tag</h3>
        <BasicButton tagName="a">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="a" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" :line="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <BasicButton tagName="RouterLink" to="/">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton
          tagName="RouterLink"
          to="/"
          :line="true"
          disabledStyle="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">regular</h3>
        <BasicButton size="regular">Button</BasicButton>
        <BasicButton size="regular" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="regular" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="regular" theme="secondary">Button</BasicButton>
        <BasicButton size="regular" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="regular" theme="tertiary">Button</BasicButton>
        <BasicButton size="regular" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="regular" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="regular" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">small</h3>
        <BasicButton size="small">Button</BasicButton>
        <BasicButton size="small" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="small" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="small" theme="secondary">Button</BasicButton>
        <BasicButton size="small" theme="secondary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="small" theme="tertiary">Button</BasicButton>
        <BasicButton size="small" theme="tertiary" :disabled="true"
          >Button</BasicButton
        >
        <BasicButton size="small" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="small" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">inline style</h3>
        <BasicButton inline="true">Button</BasicButton>
        <BasicButton inline="true" :disabled="true">Button</BasicButton>
        <BasicButton tagName="a" inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" inline="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton inline="true" theme="quaternary" :disabled="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">only icon</h3>
        <BasicButton inline="true" :line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" :line="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="regular">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Button List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <ButtonList>
          <ButtonListItem flex="none">
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Left</h3>
        <ButtonList align="left">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <ButtonList align="center">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Right</h3>
        <ButtonList align="right">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Full</h3>
        <ButtonList align="full">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>
        <ButtonList :wrap="true">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>
        <ButtonList :wrap="true" :col="3">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 5</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 4</h3>
        <ButtonList :wrap="true" :col="4">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 2</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 3</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">Button 4</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Text Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <TextButton>Button</TextButton>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
        <TextButton theme="quaternary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
        <TextButton theme="quinary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a Tag</h3>
        <TextButton tagName="a" href="">Button</TextButton>
        <TextButton tagName="a" href="" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton tagName="a" href="" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <TextButton tagName="RouterLink" to="">Button</TextButton>
        <TextButton
          tagName="RouterLink"
          to=""
          theme="secondary"
          :iconFillAll="true"
        >
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton
          tagName="RouterLink"
          to=""
          theme="tertiary"
          :iconFillAll="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">underline</h3>
        <TextButton :underline="true">Button</TextButton>
        <TextButton theme="secondary" :underline="true" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :underline="true" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size regular</h3>
        <TextButton iconSize="regular" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="regular" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size medium</h3>
        <TextButton iconSize="medium" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="medium" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">icon size large</h3>
        <TextButton iconSize="large" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton iconSize="large" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">text size regular</h3>
        <TextButton textSize="regular" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton textSize="regular" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">text size medium</h3>
        <TextButton textSize="medium" theme="secondary" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton textSize="medium" theme="tertiary" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">block</h3>
        <TextButton :block="true">Button</TextButton>
        <TextButton theme="secondary" :block="true" :iconFillAll="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </TextButton>
        <TextButton theme="tertiary" :block="true" :iconFillAll="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </TextButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Contents Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ContentsButton>
          <h3 class="text-body-1 row-margin-small">타이틀</h3>
          <KeyValue align="left" margin="small" size="medium">
            <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
              <KeyValueTitle>도로명</KeyValueTitle>
              <KeyValueText>인천 서구 에코로 181</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3 color-black' }">
              <KeyValueTitle>입력 주소</KeyValueTitle>
              <KeyValueText>하나금융그룹 로비</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </ContentsButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">CheckBox</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CheckBox id="testCheckBox001" @change="testInputEvent">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox002"
          :defaultChecked="true"
          @change="testInputEvent"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox003" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox004" :disabled="true" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <CheckBox id="testCheckBox005" align="center">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox006" align="center" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox007" align="center" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox008"
          align="center"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>
        <CheckBox id="testCheckBox009" :full="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox010" :full="true" :defaultChecked="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox011" :full="true" :disabled="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox
          id="testCheckBox012"
          :full="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Only Object</h3>
        <CheckBox id="testCheckBox013" :onlyObject="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox014"
          :onlyObject="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox015" :onlyObject="true" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox016"
          :onlyObject="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">secondary</h3>
        <CheckBox id="testCheckBox017" theme="secondary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox018" theme="secondary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox019" theme="secondary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox020"
          theme="secondary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">tertiary</h3>
        <CheckBox id="testCheckBox021" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox022" theme="tertiary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox023" theme="tertiary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox024"
          theme="tertiary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quaternary</h3>
        <CheckBox id="testCheckBox025" theme="quaternary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox026"
          theme="quaternary"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox027" theme="quaternary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox028"
          theme="quaternary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quinary</h3>
        <CheckBox id="testCheckBox029" theme="quinary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox030" theme="quinary" :defaultChecked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox031" theme="quinary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox032"
          theme="quinary"
          :disabled="true"
          :defaultChecked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">RadioButton</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <RadioButton
          name="testRadioButton001"
          id="testRadioButton001_001"
          @change="testInputEvent"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton001"
          id="testRadioButton001_002"
          :defaultChecked="true"
          @change="testInputEvent"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton001d"
          id="testRadioButton001d_001"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton001d"
          id="testRadioButton001d_002"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <RadioButton
          name="testRadioButton002"
          id="testRadioButton002_001"
          align="center"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton002"
          id="testRadioButton002_002"
          align="center"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton002d"
          id="testRadioButton002d_001"
          align="center"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton002d"
          id="testRadioButton002d_002"
          align="center"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>
        <RadioButton
          name="testRadioButton003"
          id="testRadioButton003_001"
          :full="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
        <RadioButton
          name="testRadioButton003"
          id="testRadioButton003_002"
          :full="true"
          :defaultChecked="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
        <RadioButton
          name="testRadioButton003d"
          id="testRadioButton003d_001"
          :full="true"
          :disabled="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
        <RadioButton
          name="testRadioButton003d"
          id="testRadioButton003d_002"
          :full="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
          <RadioButtonObject />
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Only Object</h3>
        <RadioButton
          name="testRadioButton004"
          id="testRadioButton004_001"
          :onlyObject="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton004"
          id="testRadioButton004_002"
          :onlyObject="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton004d"
          id="testRadioButton004d_001"
          :onlyObject="true"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton004d"
          id="testRadioButton004d_002"
          :onlyObject="true"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">secondary</h3>
        <RadioButton
          name="testRadioButton005"
          id="testRadioButton005_001"
          theme="secondary"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton005"
          id="testRadioButton005_002"
          theme="secondary"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton005d"
          id="testRadioButton005d_001"
          theme="secondary"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton005d"
          id="testRadioButton005d_002"
          theme="secondary"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">tertiary</h3>
        <RadioButton
          name="testRadioButton006"
          id="testRadioButton006_001"
          theme="tertiary"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton006"
          id="testRadioButton006_002"
          theme="tertiary"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton006d"
          id="testRadioButton006d_001"
          theme="tertiary"
          :disabled="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
        <RadioButton
          name="testRadioButton006d"
          id="testRadioButton006d_002"
          theme="tertiary"
          :disabled="true"
          :defaultChecked="true"
        >
          <RadioButtonObject />
          <RadioButtonLabelText>Label<br />2 line label</RadioButtonLabelText>
        </RadioButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Form</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testErrorUpdate001(true)">에러 On</button>
        <button type="button" @click="testErrorUpdate001(false)">
          에러 Off
        </button>

        <FormList>
          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput001"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <template v-slot:innerLeft>text</template>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="testInput001"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>text</template>
                <template v-slot:right>
                  <BasicButton size="small" theme="quaternary">
                    button
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput002"
            :disabled="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="testInput002"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                    value="value"
                    :disabled="true"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                    value="1234"
                    :readonly="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="인증번호"
            titleOptionalText="(6자리)"
            target="#testInput003"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="testInput003"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3 color-red">00:00</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: 'SKT',
                      },
                      {
                        value: '2',
                        label: 'KT',
                      },
                      {
                        value: '3',
                        label: 'LG U+',
                      },
                      {
                        value: '4',
                        label: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        label: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        label: '알뜰폰 LG +',
                      },
                    ]"
                    title="통신사"
                    inputId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
                <template v-slot:right>
                  <!-- Cass : 전송 전 -->
                  <BasicButton size="small" theme="quaternary">
                    인증번호 전송
                  </BasicButton>
                  <!-- Cass : 전송 전 -->

                  <!-- Cass : 전송 후
                  <BasicButton size="small" theme="quaternary">
                    인증번호 재전송
                  </BasicButton>
                  -->
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>본인명의의 휴대폰만 가능합니다.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            titleOptionalText="(6자리)"
            target="#testInput005"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput005"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <PartInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 뒤 7자리 중 첫번째자리"
                    :afterDot="6"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="주민등록번호" target="#testInput006">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput006"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="주민등록번호 뒤 7자리"
                    :dot="[true, true, true, false, false, false, false]"
                  />
                </InputBlockCell>
                <InputBlockCell>
                  <SecurityKeypadButton />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput007">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput007" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput010"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '3개월',
                      },
                      {
                        value: '2',
                        label: '6개월',
                      },
                      {
                        value: '3',
                        label: '12개월',
                      },
                      {
                        value: '4',
                        label: '24개월',
                      },
                      {
                        value: '5',
                        label: '36개월',
                      },
                      {
                        value: '6',
                        label: '48개월',
                      },
                      {
                        value: '7',
                        label: '60개월',
                      },
                      {
                        value: '8',
                        label: '72개월',
                      },
                      {
                        value: '9',
                        label: '84개월',
                      },
                      {
                        value: '10',
                        label: '96개월',
                      },
                      {
                        value: '11',
                        label: '108개월',
                      },
                      {
                        value: '12',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="testInput010"
                    :selectable="
                      (option) => {
                        switch (option.value) {
                          case '3':
                          case '4':
                            return false;
                          default:
                            return true;
                        }
                      }
                    "
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput011"
            :selectOnly="true"
            :disabled="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :options="[
                      {
                        value: '1',
                        label: '3개월',
                      },
                      {
                        value: '2',
                        label: '6개월',
                      },
                      {
                        value: '3',
                        label: '12개월',
                      },
                      {
                        value: '4',
                        label: '24개월',
                      },
                      {
                        value: '5',
                        label: '36개월',
                      },
                      {
                        value: '6',
                        label: '48개월',
                      },
                      {
                        value: '7',
                        label: '60개월',
                      },
                      {
                        value: '8',
                        label: '72개월',
                      },
                      {
                        value: '9',
                        label: '84개월',
                      },
                      {
                        value: '10',
                        label: '96개월',
                      },
                      {
                        value: '11',
                        label: '108개월',
                      },
                      {
                        value: '12',
                        label: '120개월',
                      },
                    ]"
                    title="대출기간"
                    inputId="testInput011"
                    defaultValue="4"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="인도 요청일" target="#testInput012Button">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="인도 요청일"
                    id="testInput012"
                    buttonId="testInput012Button"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" target="#testInput013StartButton">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="testInput013Start"
                    buttonId="testInput013StartButton"
                    :max="state.testMaxDate001"
                    v-model="state.testMinDate001"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="testInput013End"
                    buttonId="testInput013EndButton"
                    :min="state.testMinDate001"
                    v-model="state.testMaxDate001"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.testError001">
              <BoxCheckList :classNames="{ wrap: 'row-margin-contents-small' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_001"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_002"
                  >
                    <BoxCheckLabel>3개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_003"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_004"
                  >
                    <BoxCheckLabel>1년</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="testInput014Start"
                    buttonId="testInput014StartButton"
                    :max="state.testMaxDate002"
                    v-model="state.testMinDate002"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">~</InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="testInput014End"
                    buttonId="testInput014EndButton"
                    :min="state.testMinDate002"
                    v-model="state.testMaxDate002"
                    :onChange="testInputEvent"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.testError001"
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            :maxlength="150"
            :count="true"
            title="Label"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </template>
          </BasicTextarea>

          <BasicTextarea
            :error="state.testError001"
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            :maxlength="150"
            :count="true"
            :disabled="true"
            title="Label"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>Helper Text</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <FormList :wrap="true">
          <FormListItem titleText="이름" target="#testInput015">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput015" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput016">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput016" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput017">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput017" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Search</h3>

        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="아파트 검색어"
              placeholder="동(읍/면) 또는 아파트 이름 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BoxCheck</h2>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">radio</h3>

        <BoxCheck name="testBoxCheck001" id="testBoxCheck001_001">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck001"
          id="testBoxCheck001_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck002"
          id="testBoxCheck002_003"
          :disabled="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          name="testBoxCheck002"
          id="testBoxCheck002_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">checkbox</h3>

        <BoxCheck type="checkbox" id="testBoxCheck003_001">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          type="checkbox"
          id="testBoxCheck003_002"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck type="checkbox" id="testBoxCheck003_003" :disabled="true">
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
        <BoxCheck
          type="checkbox"
          id="testBoxCheck003_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>Label<br />2 line label</BoxCheckLabel>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">contents - radio</h3>

        <BoxCheck
          :contents="true"
          name="testBoxCheck004"
          id="testBoxCheck004_001"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck004"
          id="testBoxCheck004_002"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck005"
          id="testBoxCheck005_003"
          :disabled="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          name="testBoxCheck005"
          id="testBoxCheck005_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
          <template v-slot:right>
            <BoxCheckObject />
          </template>
        </BoxCheck>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">contents - checkbox</h3>

        <BoxCheck :contents="true" type="checkbox" id="testBoxCheck006_001">
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_002"
          :defaultChecked="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_003"
          :disabled="true"
        >
          <template v-slot:left>
            <BoxCheckObject />
          </template>
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
        </BoxCheck>
        <BoxCheck
          :contents="true"
          type="checkbox"
          id="testBoxCheck006_004"
          :disabled="true"
          :defaultChecked="true"
        >
          <BoxCheckLabel>원리금 균등상환</BoxCheckLabel>
          <p class="text-body-3 color-gray row-margin-item-regular">
            가장 일반적인 방법으로 원금과 이자를 합한<br />
            상환금액이 매달 동일합니다.
          </p>
          <template v-slot:right>
            <BoxCheckObject />
          </template>
        </BoxCheck>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">BoxCheckList</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>

        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList002"
              id="testBoxCheckList002_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <BoxCheckList :wrap="true">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList003"
              id="testBoxCheckList003_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>

        <BoxCheckList :wrap="true" :col="3">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList004"
              id="testBoxCheckList004_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 4</h3>

        <BoxCheckList :wrap="true" col="4">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList005"
              id="testBoxCheckList005_005"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 5</h3>

        <BoxCheckList :wrap="true" col="5">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_001"
            >
              <BoxCheckLabel>Label 1</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_002"
            >
              <BoxCheckLabel>Label 2</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_003"
            >
              <BoxCheckLabel>Label 3</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_004"
            >
              <BoxCheckLabel>Label 4</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList006"
              id="testBoxCheckList006_005"
            >
              <BoxCheckLabel>Label 5</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">RoundStatus</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <RoundStatus>텍스트</RoundStatus>
        <RoundStatus theme="secondary">텍스트</RoundStatus>
        <RoundStatus theme="tertiary">텍스트</RoundStatus>
        <RoundStatus theme="quaternary">텍스트</RoundStatus>
        <RoundStatus theme="quinary">텍스트</RoundStatus>
        <RoundStatus theme="senary">텍스트</RoundStatus>
        <RoundStatus theme="septenary">텍스트</RoundStatus>
        <RoundStatus theme="octonary">텍스트</RoundStatus>
        <RoundStatus theme="nonary">텍스트</RoundStatus>
        <RoundStatus theme="denary">텍스트</RoundStatus>
        <RoundStatus theme="undenary">텍스트</RoundStatus>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size - Large</h3>
        <RoundStatus size="large">텍스트</RoundStatus>
        <RoundStatus theme="secondary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="tertiary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="quaternary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="quinary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="senary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="septenary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="octonary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="nonary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="denary" size="large">텍스트</RoundStatus>
        <RoundStatus theme="undenary" size="large">텍스트</RoundStatus>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Block</h3>
        <RoundStatus :block="true">텍스트</RoundStatus>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Basic List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Text Symbol</h3>

        <ol :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']">4.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']">5.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']">6.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ol>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Medium</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--medium']]">
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">regular margin (12px)</h3>
        <ul
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <NoticeText>Text Text Text Text Text</NoticeText>
        <NoticeText :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">check</h3>
        <NoticeText type="check">Text Text Text Text Text</NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Tab Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiTab v-slot="tabSlotProps" initialOpen="testTab001_003">
          <UiTabList>
            <UiTabButton link="testTab001_001">Tab 1</UiTabButton>
            <UiTabButton link="testTab001_002">Tab 2</UiTabButton>
            <UiTabButton link="testTab001_003">Tab 3</UiTabButton>
            <UiTabButton link="testTab001_004">Tab 4</UiTabButton>
          </UiTabList>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Nav Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <NavTab :useUiTab="true">
            <NavTabButton link="testNavTab001_001">Tab 1</NavTabButton>
            <NavTabButton link="testNavTab001_002">Tab 2</NavTabButton>
            <NavTabButton link="testNavTab001_003">Tab 3</NavTabButton>
            <NavTabButton link="testNavTab001_004">Tab 4</NavTabButton>
          </NavTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testNavTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testNavTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <NavTab>
          <NavTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </NavTabButton>
          <NavTabButton tagName="RouterLink" to="">Tab 2</NavTabButton>

          <NavTabButton tagName="a" href="" :active="true">
            Tab 3
          </NavTabButton>
          <NavTabButton tagName="a" href="">Tab 4</NavTabButton>

          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">auto</h3>

        <NavTab :auto="true">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 2</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 3</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 4</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 5
          </NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 6</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 7</NavTabButton>
          <NavTabButton tagName="button" type="button">Tab 8</NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Type Popup</h3>

        <NavTab type="popup">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Type Popup Head</h3>

        <NavTab type="popup-head">
          <NavTabButton tagName="button" type="button">Tab 1</NavTabButton>
          <NavTabButton tagName="button" type="button" :active="true">
            Tab 2
          </NavTabButton>
        </NavTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Filter Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <FilterTab :useUiTab="true">
            <FilterTabButton link="testFilterTab001_001">Tab 1</FilterTabButton>
            <FilterTabButton link="testFilterTab001_002">Tab 2</FilterTabButton>
            <FilterTabButton link="testFilterTab001_003">Tab 3</FilterTabButton>
            <FilterTabButton link="testFilterTab001_004">Tab 4</FilterTabButton>
          </FilterTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testFilterTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testFilterTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <FilterTab>
          <FilterTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </FilterTabButton>
          <FilterTabButton tagName="RouterLink" to="">Tab 2</FilterTabButton>

          <FilterTabButton tagName="a" href="" :active="true">
            Tab 3
          </FilterTabButton>
          <FilterTabButton tagName="a" href="">Tab 4</FilterTabButton>

          <FilterTabButton tagName="button" type="button" :active="true">
            Tab 5
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            Tab 6
          </FilterTabButton>
        </FilterTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Round Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <RoundTab :useUiTab="true">
            <RoundTabButton link="testRoundTab001_001">Tab 1</RoundTabButton>
            <RoundTabButton link="testRoundTab001_002">Tab 2</RoundTabButton>
            <RoundTabButton link="testRoundTab001_003">Tab 3</RoundTabButton>
            <RoundTabButton link="testRoundTab001_004">Tab 4</RoundTabButton>
          </RoundTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testRoundTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testRoundTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <RoundTab>
          <RoundTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </RoundTabButton>
          <RoundTabButton tagName="RouterLink" to="">Tab 2</RoundTabButton>

          <RoundTabButton tagName="a" href="" :active="true">
            Tab 3
          </RoundTabButton>
          <RoundTabButton tagName="a" href="">Tab 4</RoundTabButton>

          <RoundTabButton tagName="button" type="button" :active="true">
            Tab 5
          </RoundTabButton>
          <RoundTabButton tagName="button" type="button">
            Tab 6
          </RoundTabButton>
        </RoundTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Sub Tab</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Tab Base 이용시</h3>

        <UiTab v-slot="tabSlotProps">
          <SubTab :useUiTab="true">
            <SubTabButton link="testSubTab001_001">Tab 1</SubTabButton>
            <SubTabButton link="testSubTab001_002">Tab 2</SubTabButton>
            <SubTabButton link="testSubTab001_003">Tab 3</SubTabButton>
            <SubTabButton link="testSubTab001_004">Tab 4</SubTabButton>
          </SubTab>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testSubTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testSubTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testSubTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testSubTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">
          탭 기능 없이 단순 링크이거나 버튼 일 때
        </h3>

        <SubTab>
          <SubTabButton tagName="RouterLink" to="" :active="true">
            Tab 1
          </SubTabButton>
          <SubTabButton tagName="RouterLink" to="">Tab 2</SubTabButton>

          <SubTabButton tagName="a" href="" :active="true">
            Tab 3
          </SubTabButton>
          <SubTabButton tagName="a" href="">Tab 4</SubTabButton>

          <SubTabButton tagName="button" type="button" :active="true">
            Tab 5
          </SubTabButton>
          <SubTabButton tagName="button" type="button"> Tab 6 </SubTabButton>
        </SubTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Accordion Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testAccordionAllOpen">모두 열기</button>
        <button type="button" @click="testAccordionAllClose">모두 닫기</button>

        <UiAccordion ref="testAccordion">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps" :initialOpen="true">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Once</h3>

        <UiAccordion :once="true">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <UiAccordionOpener />
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">hr</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicHr className="row-margin-contents" />
        <BasicHr theme="secondary" className="row-margin-contents" />
        <BasicHr theme="tertiary" className="row-margin-contents" />
        <BasicHr theme="quaternary" className="row-margin-contents" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>
        <BasicHr type="popup" className="row-margin-contents" />
        <BasicHr
          theme="secondary"
          type="popup"
          className="row-margin-contents"
        />
        <BasicHr
          theme="tertiary"
          type="popup"
          className="row-margin-contents"
        />
        <BasicHr
          theme="quaternary"
          type="popup"
          className="row-margin-contents"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Key Value Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align left</h3>
        <KeyValue align="left">
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: small)
        </h3>
        <KeyValue align="left" size="small">
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>제목</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: regular)
        </h3>
        <KeyValue align="left" size="regular">
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <h3 class="test-section-sub-title row-margin-item-group">
          align left (title width size: medium)
        </h3>
        <KeyValue align="left" size="medium">
          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>타이틀</KeyValueTitle>
            <KeyValueText> 내용내용내용내용내용내용내용</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">vertical align : center</h3>
        <KeyValue verticalAlign="center">
          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Vertical</h3>
        <KeyValue direction="vertical">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">wrap - col 2</h3>
        <KeyValue :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin small</h3>
        <KeyValue margin="small">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">margin regular</h3>
        <KeyValue margin="regular">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Empty</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Secondary</h3>

        <div :class="[$style['empty'], $style['empty--secondary']]">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice section</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 등록</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할
                경우 로그인을 위해 공동인증서를 다시 등록해야 합니다.
              </div>
            </li>
          </ul>
        </section>
        <section :class="$style['notice-section']">
          <h3 :class="$style['notice-section__title']">공동인증서 삭제</h3>
          <ul :class="$style['basic-list']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인/개인사업자 회원은 공동인증서 로그인을 위해 아이디에
                공동인증서를 등록해야 합니다. (법인 회원은 별도 등록이 필요하지
                않습니다.)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                아이디에 등록했던 공동인증서를 삭제합니다. 공동인증서를 삭제할
                경우 로그인을 위해 공동인증서를 다시 등록해야 합니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Object</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <IllustObject />
        <IllustObject type="complete" />
        <IllustObject type="error" />
        <IllustObject type="fail" />
        <IllustObject type="license" />
        <IllustObject type="certification" />
        <IllustObject type="appfree" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <IllustInfo>
          <IllustObject type="fail" />
          <IllustInfoTitle>
            만기연장 신청 대상이 아닙니다<br />
            잔여 회차를 확인해 주세요
          </IllustInfoTitle>
          <IllustInfoText>
            <strong>하나캐피탈 스탁론</strong>에<br />
            관심을 가져주셔서 감사합니다.
          </IllustInfoText>
        </IllustInfo>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Icon List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">
                    고객센터 1800-1110
                  </div>
                  <div :class="$style['icon-list__text']">
                    평일 09:00 ~ 18:00
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><ImgMainSample /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__text']">
                    결제예정금액의 자세한 내역이 궁금하시다면
                  </div>
                  <div :class="$style['icon-list__title']">온라인청구서</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <div :class="[$style['icon-list'], $style['icon-list--wrap']]">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >고객센터 ARS 안내</span
                  >
                  <span :class="$style['icon-list__text']">
                    빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">고객 상담</span>
                  <span :class="$style['icon-list__text']">
                    문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">전자민원접수</span>
                  <span :class="$style['icon-list__text']">
                    불편했던 점을 말씀해주세요.<br />신속히 개선하도록
                    하겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 3</h3>

        <div
          :class="[
            $style['icon-list'],
            $style['icon-list--wrap'],
            $style['icon-list--col-3'],
          ]"
        >
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']"
                    >고객센터 ARS 안내</span
                  >
                  <span :class="$style['icon-list__text']">
                    빠른 연결을 위해 고객센터 상담 번호를<br />안내해드리겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">고객 상담</span>
                  <span :class="$style['icon-list__text']">
                    문의 주신 내용에 대해<br />빠른 시간 내 답변 드리겠습니다
                  </span>
                </span>
              </RouterLink>
            </li>
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconCustomer /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__title']">전자민원접수</span>
                  <span :class="$style['icon-list__text']">
                    불편했던 점을 말씀해주세요.<br />신속히 개선하도록
                    하겠습니다.
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">PaginationNav</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <!-- Case : 첫번째 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavNumber>6</PaginationNavNumber>
          <PaginationNavNumber>7</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>999</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Case : 첫번째 페이지일 때 -->

        <!-- Case : 중간 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" />
          <PaginationNavNumber>1</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>13</PaginationNavNumber>
          <PaginationNavNumber>14</PaginationNavNumber>
          <PaginationNavNumber :active="true">15</PaginationNavNumber>
          <PaginationNavNumber>16</PaginationNavNumber>
          <PaginationNavNumber>17</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>99</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Case : 중간 페이지일 때 -->

        <!-- Case : 마지막 페이지일 때 -->
        <PaginationNav>
          <PaginationNavArrow type="prev" />
          <PaginationNavNumber>1</PaginationNavNumber>
          <PaginationNavEllipsis />
          <PaginationNavNumber>93</PaginationNavNumber>
          <PaginationNavNumber>94</PaginationNavNumber>
          <PaginationNavNumber>95</PaginationNavNumber>
          <PaginationNavNumber>96</PaginationNavNumber>
          <PaginationNavNumber>97</PaginationNavNumber>
          <PaginationNavNumber>98</PaginationNavNumber>
          <PaginationNavNumber :active="true">99</PaginationNavNumber>
          <PaginationNavArrow type="next" :disabled="true" />
        </PaginationNav>
        <!-- // Case : 마지막 페이지일 때 -->
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>

        <!-- Pagination -->
        <PaginationNav>
          <PaginationNavArrow type="prev" :disabled="true" />
          <PaginationNavNumber :active="true">1</PaginationNavNumber>
          <PaginationNavNumber>2</PaginationNavNumber>
          <PaginationNavNumber>3</PaginationNavNumber>
          <PaginationNavNumber>4</PaginationNavNumber>
          <PaginationNavNumber>5</PaginationNavNumber>
          <PaginationNavArrow type="next" />
        </PaginationNav>
        <!-- // Pagination -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">UnitText</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UnitText leftUnit="$">333,389</UnitText>
        <UnitText rightUnit="원">333,389</UnitText>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align right</h3>

        <UnitText leftUnit="$" align="right">333,389</UnitText>
        <UnitText rightUnit="원" align="right">333,389</UnitText>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">vertical align center</h3>

        <UnitText verticalAlign="center" leftUnit="$">333,389</UnitText>
        <UnitText verticalAlign="center" rightUnit="원">333,389</UnitText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular</h3>

        <UnitText size="regular" leftUnit="$">333,389</UnitText>
        <UnitText size="regular" rightUnit="원">333,389</UnitText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Large</h3>

        <!-- <UnitText size="large" verticalAlign="center" leftUnit="$"
          >333,389</UnitText
        > -->
        <UnitText size="large" rightUnit="원">333,389</UnitText>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Table</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <!-- table -->
        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 120px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>월</th>
                <th>방문자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>합계</td>
                <td>1</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- // table -->
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">SelectTable</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <SelectTable>
          <template v-slot:colgroup>
            <col style="width: 140px" />
            <col style="width: 800px" />
            <col style="width: 160px" />
          </template>

          <template v-slot:head>
            <tr>
              <th>제조사</th>
              <th>모델명</th>
              <th>차량 금액</th>
            </tr>
          </template>

          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow :initialActive="true">
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
            <td>5,300 만원</td>
          </SelectTableRow>
          <SelectTableRow>
            <td>기아</td>
            <td>2.2 디젤 11인승 노블레스</td>
            <td>5,500 만원</td>
          </SelectTableRow>
        </SelectTable>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">image view</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['image-view']">
          <img src="@/assets_agent/images/_dummy/box-detail.png" alt="샘플 이미지" />
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Logo</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BankLogo code="002" />
        <BankLogo code="003" />
        <BankLogo code="004" />
        <BankLogo code="007" />
        <BankLogo code="011" />
        <BankLogo code="020" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size : small</h3>
        <BankLogo size="small" code="002" />
        <BankLogo size="small" code="003" />
        <BankLogo size="small" code="004" />
        <BankLogo size="small" code="007" />
        <BankLogo size="small" code="011" />
        <BankLogo size="small" code="020" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Background</h3>
        <BankLogo background="true" code="002" />
        <BankLogo background="true" code="003" />
        <BankLogo background="true" code="004" />
        <BankLogo background="true" code="007" />
        <BankLogo background="true" code="011" />
        <BankLogo background="true" code="020" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Logo List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <KeyValue align="left" margin="regular">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Wrap - col 2</h3>

        <KeyValue align="left" :wrap="true">
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="004" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">국민</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="011" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">농협</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="020" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">우리</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="081" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">하나</div>
              </div>
            </KeyValueTitle>
            <KeyValueText> 123-456-78901234 </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo size="small" code="088" />
                </div>
                <div class="flex-box__cell flex-box__cell--mini">신한</div>
              </div>
            </KeyValueTitle>
            <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Bank Radio Select</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <BoxCheckList :wrap="true">
          <BoxCheckListItem v-for="i in 2" :key="i">
            <BoxCheck
              :contents="true"
              type="checkbox"
              name="testBankRadioSelect"
              :id="`testBankRadioSelect${i}`"
            >
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BankLogo code="081" background="true" />
                </div>

                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <div
                    class="text-body-3 color-gray font-weight-light row-margin-mini"
                  >
                    하나증권
                  </div>
                  <BoxCheckLabel :classNames="{ label: 'ellipsis' }"
                    >하나 & 스탁론 Ⅰ</BoxCheckLabel
                  >
                  <div
                    class="text-body-2 color-gray-secondary row-margin-mini ellipsis"
                  >
                    토마토파트너
                  </div>
                </div>
              </div>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Upload Button</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload001"
            :class="$style['upload-button__input']"
          />
          <div :class="$style['upload-button__block']">
            <label for="testUpload001" :class="$style['upload-button__label']"
              >파일첨부</label
            >
          </div>
        </div>

        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload002"
            :class="$style['upload-button__input']"
          />
          <div :class="$style['upload-button__block']">
            <span :class="$style['upload-button__img']">
              <IconImg />
            </span>
            <label for="testUpload002" :class="$style['upload-button__label']"
              >이미지 첨부</label
            >
          </div>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">disabled</h3>
        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload003"
            :class="$style['upload-button__input']"
            :disabled="true"
          />
          <div :class="$style['upload-button__block']">
            <label for="testUpload003" :class="$style['upload-button__label']"
              >파일첨부</label
            >
          </div>
        </div>

        <div :class="$style['upload-button']">
          <input
            type="file"
            id="testUpload004"
            :class="$style['upload-button__input']"
            :disabled="true"
          />
          <div :class="$style['upload-button__block']">
            <span :class="$style['upload-button__img']">
              <IconImg />
            </span>
            <label for="testUpload004" :class="$style['upload-button__label']"
              >이미지 첨부</label
            >
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Upload File List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['upload-file']">
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
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
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
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Inside (padding: 0 24px)</h3>
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
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
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
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
            <li :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
                <div :class="$style['upload-file__date']">
                  2023-05-08 18:15:44
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Thumb</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CarThumb src="/images/_dummy/car-thumb.png" />
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Size : Regular</h3>
        <CarThumb size="regular" src="/images/_dummy/car-thumb.png" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Car Emblem</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CarEmblem code="1001" name="현대" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Color Chip</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ColorChip />
        <ColorChip :colors="['244, 238, 238']" />
        <ColorChip :colors="['244, 238, 238', '225, 213, 213', '66, 83, 82']" />
        <ColorChip
          :colors="[
            '244, 238, 238',
            '225, 213, 213',
            '66, 83, 82',
            '155, 171, 170',
          ]"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">툴팁(tooltip)</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div class="inline-wrap align-center">
          <div class="inline-block">
            <BasicTooltip>
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">자동로그인</h3>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--small-margin'],
                    ]"
                  >
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증,
                        지문인증(Face ID)가 필요합니다.
                      </div>
                    </li>
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만
                        설정이 가능합니다.
                      </div>
                    </li>
                  </ul>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Bottom</h3>
        <div class="inline-wrap align-center">
          <div class="inline-block">
            <BasicTooltip placement="bottom">
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">정보성 알림</h3>
                  <p :class="$style['tooltip-section__text']">
                    상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                    수신합니다.
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Popup</h3>
        <div class="inline-wrap align-center">
          <div class="inline-block">
            <BasicTooltip type="popup">
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">정보성 알림</h3>
                  <p :class="$style['tooltip-section__text']">
                    상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                    수신합니다.
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Inline Alert</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['inline-alert']">
          <p :class="$style['inline-alert__text']">인증이 완료되었습니다.</p>
        </div>

        <div :class="[$style['inline-alert'], $style['inline-alert--error']]">
          <p :class="$style['inline-alert__text']">인증이 실패하였습니다.</p>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board Search Bar</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div :class="$style['board-search-bar']">
          <InputBlock>
            <InputBlockCell>
              <BasicSelect
                :options="[
                  {
                    value: '1',
                    label: '전체',
                  },
                  {
                    value: '2',
                    label: '제목',
                  },
                  {
                    value: '3',
                    label: '내용',
                  },
                ]"
                title="검색 조건 선택"
                defaultValue="1"
                :classNames="{
                  wrap: 'input-width-category',
                }"
              />
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicInput
                type="search"
                title="게시물 검색어"
                placeholder="검색어 입력"
              />
            </InputBlockCell>
            <InputBlockCell type="search">
              <SearchButton />
            </InputBlockCell>
          </InputBlock>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board list</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['board']">
          <table>
            <colgroup>
              <col style="width: 67px" />
              <col />
              <col style="width: 103px" />
              <col style="width: 120px" />
              <col style="width: 80px" />
            </colgroup>
            <tbody>
              <tr v-for="i in 5" :key="i">
                <td>
                  <span :class="$style['board__num']">
                    {{ 101 - i }}
                  </span>
                </td>
                <td>
                  <RouterLink to="" :class="$style['board__link']">
                    <span :class="$style['board__title']">
                      게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물
                      제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
                      게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물
                      제목 게시물 제목
                    </span>
                  </RouterLink>
                </td>
                <td>
                  <div :class="$style['board__status']">
                    <RoundStatus size="large">마감</RoundStatus>
                  </div>
                </td>
                <td>2022.08.30</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Board Detail</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
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
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
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
                      <IconDownloadSmall
                        :class="$style['download-list__icon']"
                      />
                    </template>
                  </TextButton>
                </li>
              </ul>
            </div>
          </div>
          <!-- // Case : 첨부 파일 없을시 비노출 -->
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">UiScroller</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiScroller :style="{ height: '200px' }">
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
          내용 내용 내용 내용<br />
        </UiScroller>
      </div>
    </section>

    <!--
    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        내용
      </div>
    </section>
    -->
  </div>
</template>

<style lang="scss">
@import '@/assets_agent/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets_agent/scss/views/uiGuide/GuideComponentModule.scss';
</style>
