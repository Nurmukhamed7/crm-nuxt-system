<script setup lang="ts">
import { account } from '~/lib/appwrite'
import { useIsLoadingStore } from '~/store/auth.store'

useHead({
	title: 'Login | CRM System',
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
	isLoadingStore.set(true)
	await account.createEmailSession(emailRef.value, passwordRef.value)
	const response = await account.get()
	if (response) {
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status,
		})
	}

	emailRef.value = ''
	passwordRef.value = ''
	nameRef.value = ''

	await router.push('/')

	isLoadingStore.set(false)
}

const register = async () => {
	await account.create(nameRef.value, emailRef.value, passwordRef.value)
}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-slate-700 w-1/4 p-5">
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>

			<form>
				<UiInput
					placeholder="Email"
					type="email"
					class="mb-3"
					v-model="emailRef"
				/>
				<UiInput
					placeholder="Password"
					type="password"
					class="mb-3"
					v-model="passwordRef"
				/>
				<UiInput
					placeholder="Name"
					type="name"
					class="mb-3"
					v-model="nameRef"
				/>
				<div class="flex justify-center items-center gap-5">
					<UiButton type="button">Login</UiButton>
					<UiButton type="button">Register</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped></style>
