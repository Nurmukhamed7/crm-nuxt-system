import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite'
import { KANBAN_DATA } from './kanban.data'
import type { IDeal } from '~/types/deals.types'
import type { IColumn } from './kanban.types'

export function useKanbanQuery() {
	//TODO: Kanban query
	return useQuery({
		queryKey: ['deals'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			const newBoard: IColumn[] = KANBAN_DATA.map(column => ({
				...column,
				items: [],
			}))

			const deals = data.documents as unknown as IDeal[]

			for (const deal of deals) {
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
