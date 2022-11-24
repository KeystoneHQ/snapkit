export function formatDate(date: Date): string {
  const txDate = new Date(date)
  const addLeadingZero = (str: number | string) =>
    str.toString().length === 2 ? str : `0${str}`
  return `${addLeadingZero(txDate.getMonth() + 1)}-${addLeadingZero(
    txDate.getDate()
  )} ${addLeadingZero(txDate.getHours())}:${addLeadingZero(txDate.getMinutes())}`
}
export function formatAddressDisplay(address: string): string {
  return `${address.substring(0, 6)}...${address.substring(address.length - 6)}`
}
