import {
  applyCurrencyFormat,
  applyGainsFormat,
  applyGainsPctFormat,
} from "@utils/formatStringUtils"

export default function LPGains({ userPool }) {
  const numberColorClass =
    userPool.netGainUsd < 0 ? "text-red-700" : "text-green-500"
  const numberClasses = `${numberColorClass} font-bold text-sm`

  return (
    <div>
      <div className="font-bold">
        {applyCurrencyFormat(userPool.netGainUsd)}
      </div>
      <div className={`${numberClasses}`}>
        {applyGainsPctFormat(userPool.netGainPct)} (
        {applyGainsFormat(userPool.netGainUsd)})
      </div>
    </div>
  )
}
