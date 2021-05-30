export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const trimAddress = (address: string) =>
  `${address.substr(0, 5)}...${address.slice(-4)}`

export const applyCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format

export const applyGainsFormat = (value: number) =>
  `${value < 0 ? "" : "+"}${applyCurrencyFormat(value)}`

export const applyGainsPctFormat = (value: number) =>
  `${value < 0 ? "" : "+"}${value.toFixed(2)}%`
