<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
	class: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div
		:class="
			cn(
				'rounded-lg border bg-card text-card-foreground animation border-transparent transition-colors hover:border-[#919191]',
				props.class
			)
		"
	>
		<slot />
	</div>
</template>

<style scoped>
@keyframes show {
	from {
		@apply border-[#919191];
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	90% {
		@apply border-[#919191];
	}

	to {
		@apply border-transparent;
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}
.animation {
	animation: show 0.3s ease-in-out;
}
</style>
