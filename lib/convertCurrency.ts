export const convertCurrency = (amount: string | number) => {
	return Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(+amount)
}
