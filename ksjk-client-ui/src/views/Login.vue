<template>
  <dv-full-screen-container class="container">
    <div class="circle-box">
      <!-- <div class="outside-box"></div> -->
      <div class="middle-box"></div>
      <!-- <div class="line-box"></div> -->
      <dv-decoration-9 :color="['rgba(26,121,245,0.25)', 'rgba(26,121,245,0.25)']">
        <img class="car-img" src="../assets/222.png" />
      </dv-decoration-9>
    </div>
    <div class="login-box">
      <div class="header">智慧矿山系统登录</div>
      <div class="login-from">
        <div class="title">请 登 录</div>
        <div class="form-box">
          <el-form ref="formRef" :model="form" label-width="0px">
            <el-form-item>
              <el-input class="m-input" v-model="form.username" placeholder="请输入账号">
                <template #prefix>
                  <img class="input-icon" src="../assets/svg/login/login-username-icon.svg" alt="" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input class="m-input" v-model="form.password" type="password" placeholder="请输入密码">
                <template #prefix>
                  <img class="input-icon" src="../assets/svg/login/login-password-icon.svg" alt="" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input class="m-input" v-model="form.code" placeholder="请输入验证码">
                <template #prefix>
                  <img class="input-icon" src="../assets/svg/login/login-code-icon.svg" alt="" />
                </template>
                <template #suffix>
                  <img class="input-code" src="../assets/login/login-bg.png" alt="" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-top: 60px">
              <el-button class="m-button" @click="onSubmit">登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
	setup() {
		const router = useRouter();
		let formRef = ref(null);
		let form = reactive({
			username: '',
			password: '',
			code: '',
		});
		const onSubmit = () => {
			router.push('/');
		};
		return { form, onSubmit, formRef };
	},
});
</script>
<style scoped>
.m-input :deep(.el-input__inner) {
	border: 1px solid #1ce0ff;
	background-color: transparent;
	color: #fff;
	caret-color: #1ce0ff;
	padding-left: 40px;
	font-size: 16px;
	height: 48px;
	line-height: 48px;
}
.m-input :deep(.el-input__prefix-inner) {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
}
</style>
<style lang="scss" scoped>
@keyframes demo1 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes demo2 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-360deg);
	}
}
.container {
	background: url('@/assets/svg/login/login-bg.png') no-repeat;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.circle-box {
		position: relative;
		width: 60vw;
		height: 60vw;
		left: -130px;
		display: flex;
		justify-content: center;
		align-items: center;
		.outside-box {
			position: absolute;
			background: url('@/assets/svg/login/outside.svg') no-repeat;
			background-size: 100%;
			background-position: center center;
			animation: demo1 3s linear 0s infinite;
			width: 100%;
			height: 100%;
		}
		.middle-box {
			position: absolute;
			width: 90%;
			height: 90%;
			background: url('@/assets/svg/login/middle.svg') no-repeat;
			background-size: 100% 100%;
			animation: demo2 3s linear 0s infinite;
		}
		.line-box {
			position: absolute;
			width: 83%;
			height: 83%;
			background: url('@/assets/svg/login/line.svg') no-repeat;
			background-size: 100% 100%;
			animation: demo1 3s linear 0s infinite;
		}
		.within-box {
			position: absolute;
			width: 60%;
			height: 60%;
			background: url('@/assets/svg/login/within.svg') no-repeat;
			background-size: 100% 100%;
			margin-left: 1%;
			margin-top: 1%;
			animation: demo1 3s linear 0s infinite;
		}
		.car-img {
			width: 70%;
			height: 70%;
			object-fit: contain;
			margin-left: 1.5%;
		}
	}
	.login-box {
		width: 40%;
		.header {
			height: 88px;
			font-size: 48px;
			font-family: Source Han Sans CN;
			font-weight: 500;
			line-height: 88px;
			color: #1ce0ff;
			letter-spacing: 20px;
		}
		.login-from {
			width: 401px;
			height: 352px;
			background: url('../assets/svg/login/login-boder.svg') no-repeat;
			padding: 30px 68px;
			.title {
				font-size: 23px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #1ce0ff;
				padding-left: 15px;
				&::before {
					position: relative;
					left: -15px;
					content: '.';
					width: 1px !important;
					background: #1ce0ff;
					border-radius: 2px;
				}
			}
			.form-box {
				width: 80%;
				padding: 20px 0 0;
				.m-input {
					.input-icon {
						width: 30px;
						height: 30px;
					}
					.input-code {
						width: 100px;
						height: calc(100% - 1px);
						margin-top: 1px;
					}
				}
				.m-button {
					width: 100%;
					background: #1ce0ff;
					border: none;
					color: #fff;
				}
			}
		}
	}
}
</style>
