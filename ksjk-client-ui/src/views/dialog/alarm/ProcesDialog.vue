<template>
	<teleport to="body">
		<transition name="el-zoom-in-center">
			<dv-full-screen-container v-if="props.value" class="dialog-container">
				<div style="width: 65%; min-height: 520px">
					<dv-border-box-8>
						<div class="main-content">
							<div class="header">异常报警处理</div>
							<div class="content">
								<el-form ref="procesRef" :model="procesForm" label-width="140px">
									<el-form-item label="处理人：">
										<el-input
											class="m-input"
											style="width: 30%"
											v-model="procesForm.name"></el-input>
									</el-form-item>
									<el-form-item label="情况描述：">
										<el-input
											class="m-input"
											style="width: 70%"
											v-model="procesForm.desc"
											type="textarea"></el-input>
									</el-form-item>
									<el-form-item label="图片上传：">
										<!-- :on-preview="handlePictureCardPreview" -->
										<el-upload
											action="https://jsonplaceholder.typicode.com/posts/"
											:file-list="procesForm.fileList"
											accept=".jpg,.png,jpeg"
											list-type="picture-card"
											:on-remove="handleRemove">
											<el-icon class="upload-box">
												<plus style="width: 30px; height: 30px" />
											</el-icon>
										</el-upload>
									</el-form-item>
									<el-form-item label="附件上传：">
										<el-upload
											class="upload-demo"
											action="https://jsonplaceholder.typicode.com/posts/"
											:on-preview="handlePreview"
											:on-remove="handleRemove"
											:before-remove="beforeRemove"
											multiple
											:limit="3"
											:on-exceed="handleExceed"
											:file-list="procesForm.fileList">
											<el-button size="small" type="primary" class="m-addfile" :icon="Plus">
												添加附件
											</el-button>
										</el-upload>
									</el-form-item>
								</el-form>
							</div>
							<div class="footer">
								<div>
									<el-button type="primary" class="confirm" @click="onSubmit">提交</el-button>
									<el-button class="close" @click="close">取消</el-button>
								</div>
							</div>
						</div>
					</dv-border-box-8>
				</div>
			</dv-full-screen-container>
		</transition>
	</teleport>
</template>

<script lang="ts">
import { Plus } from '@element-plus/icons';
import ImgList from '../components/ImgList.vue';
import {
	defineComponent,
	ref,
	computed,
	reactive,
	getCurrentInstance,
	ComponentInternalInstance,
} from 'vue';
import {ElMessage} from 'element-plus'
import {UploadFile} from 'element-plus/lib/components/upload/src/upload.type'
import { ElFile } from 'element-plus/es/components/upload/src/upload.type';

type MFile = UploadFile & {status?:number,size:number,uid?:number,raw?:ElFile}
export default defineComponent({
	components: { ImgList, Plus },
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		let { proxy } = getCurrentInstance() as ComponentInternalInstance;
		// console.log(proxy?.$dialog);
		let procesRef = ref(null);
		let procesForm = reactive({
			name: '',
			desc: '',
			fileList:[
				{	
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
				},
				{
					name: 'food2.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
				},
			],
		});
		const show = computed({
			get: () => props.value,
			set: () => emit('update:value', false),
		});
		const handleRemove = (file:any, fileList:any[]) => {
			console.log(file, fileList);
		};
		const handlePictureCardPreview = (file:any) => {
			// this.dialogImageUrl = file.url;
			// this.dialogVisible = true;
		};

		//-----------------------------

		const handlePreview = (file:any) => {
			console.log(file);
		};
		const handleExceed = (files:any, fileList:any) => {
			ElMessage.warning(
				`The limit is 3, you selected ${files.length} files this time, add up to ${
					files.length + fileList.length
				} totally`,
			);
		};
		const beforeRemove = (file:any, fileList:any) => {
			return ElMessage.warning(`Cancel the transfert of ${file.name} ?`);
		};
		const onSubmit = () => {
			console.log(procesForm);
		};
		const close = () => {
			show.value = !show.value;
		};
		return {
			Plus,
			props,
			close,
			procesForm,
			onSubmit,
			procesRef,
			handlePictureCardPreview,
			handleRemove,
			handlePreview,
			handleExceed,
			beforeRemove,
		};
	},
});
</script>
<style scoped>
.m-input :deep(.el-input__inner) {
	border: 1px solid #1ce0ff;
	background-color: RGBA(2, 48, 96, 0.8);
	color: #1ce0ff;
	caret-color: #1ce0ff;
	font-size: 16px;
	height: 48px;
	line-height: 48px;
}
:deep(.el-textarea__inner) {
	border: 1px solid #1ce0ff;
	background-color: RGBA(2, 48, 96, 0.8);
	color: #1ce0ff;
	font-size: 16px;
	caret-color: #1ce0ff;
}
.upload-demo :deep(.el-upload-list) {
	padding: 0 10px;
	width: 360px;
	min-height: 120px;
	border: 1px solid #1ce0ff;
	background-color: RGBA(2, 48, 96, 0.8);
	color: #fff;
	
}
.upload-demo :deep(.el-upload-list__item:hover){
	background: transparent;
	color: #fff;
}
.upload-demo :deep(.el-icon--close){
	color: #fff;
}
.upload-demo :deep(.el-upload-list__item-name){
	color: #fff;
}
:deep(.el-upload--picture-card) {
	background: transparent;
}
:deep(.el-form-item__label) {
	color: #fff;
	text-align: right;
	font-size: 16px;
}
</style>
<style lang="scss" scoped>
.dialog-container {
	position: relative;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	.main-content {
		position: relative;
		width: calc(100% - 4px);
		min-height: 520px;
		background: #0560afc9;
		border: 2px solid #1ce1ff86;
		box-shadow: 0px 3px 12px rgba(28, 224, 255, 0.4);
		padding-bottom: 20px;
		&::before {
			content: '.';
			width: 55px;
			height: 55px;
			position: absolute;
			right: 0;
			top: 0;
			background: url('@/assets/svg/dialog/proces/corner-top.svg');
		}
		&::after {
			content: '.';
			width: 55px;
			height: 55px;
			position: absolute;
			left: 0;
			bottom: 0;
			background: url('@/assets/svg/dialog/proces/corner-bottom.svg');
		}
		.header {
			margin: 20px 0 0px;
			height: 60px;
			background: url('@/assets/svg/dialog/proces/header-title.svg') no-repeat;
			font-size: 24px;
			padding-left: 50px;
			font-family: Source Han Sans CN;
			font-weight: 500;
			line-height: 60px;
			color: #fad341;
			letter-spacing: 3px;
		}
		.content {
			padding: 40px 20px 90px;
			.upload-box {
				color: #fff;
			}
			.m-addfile {
				margin-bottom: 20px;
				width: 140px;
	height: 40px;
	border: none;
	background: url('@/assets/proces-add-file.png') no-repeat;
			}
		}
		.footer {
			position: absolute;
			bottom: 0;
			display: flex;
			justify-content: center;
			padding:30px 20px 20px;
			height: 40px;
			width: calc(100% - 40px);
			.close {
				cursor: pointer;
				width: 140px;
				height: 40px;
				background: url('@/assets/proces-close-btn.png') no-repeat;
				border: none;
				color: #FF3737;
			}
			.confirm{
				cursor: pointer;
				width: 140px;
				height: 40px;
				background: url('@/assets/proces-confirm-btn.png') no-repeat;
				border: none;
				color: #29D568;
			}
		}
	}
}
</style>
