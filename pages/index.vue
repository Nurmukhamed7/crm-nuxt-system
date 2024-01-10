<script setup lang="ts">
import type { ICard, IColumn } from '~/components/kanban/kanban.types'
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery'

useHead({
	title: 'Home | CRM System',
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

useKanbanQuery()
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">CRM System by Nurmukhamed</h1>
		<div>
			<UiCard class="mb-3" draggable="true">
				<UiCardHeader role="button">asd</UiCardHeader>
				<UiCardContent>asasdasd</UiCardContent>
				<UiCardFooter>asd</UiCardFooter>
			</UiCard>
		</div>
	</div>
</template>

<style scoped></style>
