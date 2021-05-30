import { applyGainsFormat } from "@utils/formatStringUtils"
import { getNumberColorClass } from "@utils/getNumberColor"

export default function TokensInfo({ tokens }) {
  return (
    <div className="grid grid-cols-2">
      {tokens.map((token, index) => {
        const gridStart = `col-start-${index % 2 === 0 ? 1 : 2}`
        const numberColorClass = getNumberColorClass(token.tokenUsdGain)
        const numberClasses = `${numberColorClass} font-bold text-sm`
        return (
          <div key={token.tokenName} className={`col-span-1 ${gridStart} mb-6`}>
            <div>
              {token.tokenStartingBalance.toFixed(2)} →{" "}
              {token.tokenCurrentBalance.toFixed(2)} {token.tokenName}
            </div>
            <div className={numberClasses}>
              {token.tokenUsdGain.toFixed(2)} {token.tokenName}{" "}
              {applyGainsFormat(token.tokenCurrentBalance)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
