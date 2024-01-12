<script setup lang="ts">
import { useDealSlideStore } from '~/store/deal-slide.store'

const dealStore = useDealSlideStore()

const isLocalOpen = computed({
	get: () => dealStore.isOpen,
	set: newValue => (dealStore.isOpen = newValue),
})
</script>

<template>
	<div>
		<USlideover
			:ui="{
				overlay: {
					background: 'bg-slate-800/75',
				},
				background: 'bg-transparent',
			}"
			v-model="isLocalOpen"
		>
			<UCard
				class="flex flex-col flex-1 overflow-y-auto bg-slate-700"
				:ui="{
					body: { base: 'flex-1 ' },
					ring: '',
					divide: 'divide-y divide-border',
				}"
			>
				<template #header>
					<KanbanSlideoverTop />
				</template>
				<KanbanSlideoverComments />
			</UCard>
		</USlideover>
	</div>
</template>

<style scoped></style>
