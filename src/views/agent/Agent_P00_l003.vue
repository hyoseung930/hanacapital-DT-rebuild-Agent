<script>
import { ref } from 'vue';

import UiLayer from '@/components_agent/ui/layer/UiLayer.vue';
import PopupTitle from '@/components_agent/ui/layer/PopupTitle.vue';
import PopupButton from '@/components_agent/ui/layer/PopupButton.vue';
import ModalPopup from '@/components_agent/ui/layer/ModalPopup.vue';
import ModalPopupHead from '@/components_agent/ui/layer/ModalPopupHead.vue';
import BasicButton from '@/components_agent/ui/button/BasicButton.vue';
import PaginationNav from '@/components_agent/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components_agent/ui/pagination/PaginationNavArrow.vue';
import PaginationNavNumber from '@/components_agent/ui/pagination/PaginationNavNumber.vue';
export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    ModalPopup,
    ModalPopupHead,
    BasicButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavNumber,
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
          <PopupTitle>상담등록내역</PopupTitle>
        </ModalPopupHead>
      </template>

      <section class="row-margin-block-small">
        <section class="row-margin-block-small">
          <div class="container">
            <div class="search--container">
              <div class="search--container__box">
                <div class="search--container__list">
                  <div class="search--container__list-title">상담일자</div>
                  <div class="search--container__list-contents w30p">
                    <input type="date" v-model="startDate" />
                    <span>~</span>
                    <input type="date" v-model="endDate" />
                  </div>
                  <div class="search--container__list-title">검색조건</div>
                  <div class="search--container__list-contents w40p">
                    <div class="select-container w60p">
                      <select>
                        <option>고객명</option>
                      </select>
                    </div>
                    <input type="text" />
                  </div>
                </div>
                <div class="search--container__list">
                  <div class="search--container__list-title">판매점</div>
                  <div class="search--container__list-contents w25p">
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div class="btn-container">
                <button class="btn btn-primary btn-search-02">조회</button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <div :class="$style['basic-table']">
            <table :class="$style['none-search']">
              <tbody>
                <tr>
                  <td>조회된 내용이 없습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="container">
            <div class="search-count">
              <span>
                합계 : <span class="cGreen">85</span>건 /
                <span class="cGreen">2,700,462,280</span>원
              </span>

              <div class="btn-container">
                <button class="btn btn-s02">
                  <i class="ico ico-excel f-main-color"></i>엑셀변환
                </button>
              </div>
            </div>
          </div>
          <div :class="$style['basic-table']">
            <div :class="[$style['scroll-container'], $style['over-h']]">
              <table>
                <colgroup>
                  <col width="114px" />
                  <col width="105px" />
                  <col width="158px" />
                  <col width="130px" />
                  <col width="110px" />
                  <col width="148px" />
                  <col width="122px" />
                  <col width="110px" />
                  <col width="90px" />
                  <col width="110px" />
                  <col width="110px" />
                  <col width="110px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>상담일</th>
                    <th>구분</th>
                    <th>상담채널</th>
                    <th>신용정보동의</th>
                    <th>고객명</th>
                    <th>주민/사업자번호</th>
                    <th>신청금액</th>
                    <th>상담결과</th>
                    <th>AG손배</th>
                    <th>품목</th>
                    <th>판매점</th>
                    <th>온라인약정</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023.01.01</td>
                    <td>이용자</td>
                    <td>홈페이지(AG)</td>
                    <td>온라인(SMS)</td>
                    <td>김하나</td>
                    <td>123456-1******</td>
                    <td>999,999,999</td>
                    <td class="cGreen">승인</td>
                    <td>N</td>
                    <td>케이네트웍스케이네트웍스케이네트웍스</td>
                    <td>식기세척기</td>
                    <td>
                      <BasicButton line="true" theme="quaternary" size="small"
                        >SMS전송</BasicButton
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>2023.01.01</td>
                    <td>이용자</td>
                    <td>홈페이지(AG)</td>
                    <td>온라인(SMS)</td>
                    <td>김하나</td>
                    <td>123456-1******</td>
                    <td>999,999,999</td>
                    <td class="cGreen">승인</td>
                    <td>N</td>
                    <td>케이네트웍스</td>
                    <td>식기세척기</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2023.01.01</td>
                    <td>이용자</td>
                    <td>홈페이지(AG)</td>
                    <td>온라인(SMS)</td>
                    <td>김하나</td>
                    <td>123456-1******</td>
                    <td>999,999,999</td>
                    <td class="cGreen">승인</td>
                    <td>N</td>
                    <td>케이네트웍스</td>
                    <td>식기세척기</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2023.01.01</td>
                    <td>이용자</td>
                    <td>홈페이지(AG)</td>
                    <td>온라인(SMS)</td>
                    <td>김하나</td>
                    <td>123456-1******</td>
                    <td>999,999,999</td>
                    <td class="cGreen">승인</td>
                    <td>N</td>
                    <td>케이네트웍스</td>
                    <td>식기세척기</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2023.01.01</td>
                    <td>이용자</td>
                    <td>홈페이지(AG)</td>
                    <td>온라인(SMS)</td>
                    <td>김하나</td>
                    <td>123456-1******</td>
                    <td>999,999,999</td>
                    <td class="cGreen">승인</td>
                    <td>N</td>
                    <td>케이네트웍스</td>
                    <td>식기세척기</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Pagination -->
          <PaginationNav
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <PaginationNavArrow type="prev" :disabled="true" />
            <PaginationNavNumber :active="true">1</PaginationNavNumber>
            <PaginationNavNumber>2</PaginationNavNumber>
            <PaginationNavNumber>3</PaginationNavNumber>
            <PaginationNavNumber>4</PaginationNavNumber>
            <PaginationNavNumber>5</PaginationNavNumber>
            <PaginationNavArrow type="next" />
          </PaginationNav>
        </section>
      </section>
    </ModalPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets_agent/scss/components/import/basic-table.scss';
</style>
