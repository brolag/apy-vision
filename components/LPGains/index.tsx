import {
  applyCurrencyFormat,
  applyGainsFormat,
  applyGainsPctFormat,
} from "@utils/formatStringUtils"
import { getNumberColorClass } from "@utils/getNumberColor"

export default function LPGains({ userPool }) {
  const numberColorClass = getNumberColorClass(userPool.netGainUsd)
  const numberClasses = `${numberColorClass} font-bold text-sm`

  return (
    <div>
      <div className="font-bold">
        {applyCurrencyFormat(userPool.netGainUsd)}
      </div>
      <div className={numberClasses}>
        {applyGainsPctFormat(userPool.netGainPct)} (
        {applyGainsFormat(userPool.netGainUsd)})
      </div>
    </div>
  )
}
