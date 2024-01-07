<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<NuxtLink to="/" class="mb-10 block">
			<NuxtImg
				src="/logo.svg"
				alt="logo"
				width="120px"
				class="mx-auto"
			></NuxtImg>
		</NuxtLink>
		<button
			class="absolute text-primary top-2 right-3 transition-colors hover:text-purple-400"
		>
			<Icon name="line-md:logout" size="20"></Icon>
		</button>
		<LayoutMenu></LayoutMenu>
	</aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
