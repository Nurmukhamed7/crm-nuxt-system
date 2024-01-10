import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite'
import { KANBAN_DATA } from './kanban.data'
import type { IDeal } from '~/types/deals.types'

export function useKanbanQuery() {
	//TODO: Kanban query
	return useQuery({
		queryKey: ['deals'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			const newBoard = [...KANBAN_DATA]
			const deals = data.documents as unknown as IDeal[]
			console.log(newBoard)

			for (const deal of deals) {
				console.log(deal)
				const column = newBoard.find(col => col.id === deal.status)
				console.log(column)

				if (column) {
					column.items.push({
						$createdAt: deal.$createdAt,
						id: deal.$id,
						name: deal.name,
						price: deal.price,
						companyName: deal.customer.name,
						status: deal.status,
					})
				}
			}

			return newBoard
		},
	})
}
