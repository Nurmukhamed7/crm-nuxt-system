import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite'
import { useDealSlideStore } from '~/store/deal-slide.store'

export function useComments() {
	const dealStore = useDealSlideStore()
	const cardId = dealStore.card?.id || ''

	return useQuery({
		queryKey: ['deal', cardId],
		queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId),
	})
}
