<script setup lang="ts">
useHead({
	title: 'Login',
})
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-slate-700 w-1/4 p-5">
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>

			<form>
				<UiInput placeholder="Email" type="email" class="mb-3" />
			</form>
		</div>
	</div>
</template>

<style scoped></style>
