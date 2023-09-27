const formatMoney = (amount: string | number, currency: string) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency
  })
}

export {
  formatMoney
}
