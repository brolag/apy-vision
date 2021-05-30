import Card from "@components/Card"

type DashboardOverviewProps = {
  // TODO: Define this type.
  addressData: any
}

export default function DashboardOverview({
  addressData,
}: DashboardOverviewProps) {
  const totalPoolGains = addressData.userPools
    .map((userPool) => userPool.netGainUsd)
    .reduce((total, poolGain) => total + poolGain)

  return (
    <div className="flex flex-row items-center justify-between mb-8">
      <Card
        title="Current Market Value (USD)"
        value={addressData.totalValueUsd}
      />
      <Card
        title="Gas Fees + Exit Transactions"
        value={addressData.totalFeeUsd}
      />
      <Card title="Liquidity Pool Gains" value={totalPoolGains} />
      <Card title="Net Market Gains" value={addressData.netGainUsd} />
    </div>
  )
}
