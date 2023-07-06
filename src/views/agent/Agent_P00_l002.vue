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
		<ModalPopup>
			<template v-slot:head>
				<ModalPopupHead>
					<template v-slot:right>
						<PopupButton @click="layerSlotProps.close()" />
					</template>
					<PopupTitle>서류등록</PopupTitle>
				</ModalPopupHead>
			</template>
			<section>
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
			</section>
		</ModalPopup>
	</UiLayer>
</template>
