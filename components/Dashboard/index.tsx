import Wallet from "@components/Wallet"
import DashboardOverview from "@components/DashboardOverview"
import PoolTable from "@components/PoolTable"

type DashboardProps = {
  // TODO: Define this type.
  addressData: any
}

export default function Dashboard({ addressData }: DashboardProps) {
  return (
    <main className="w-full ">
      <div className="flex flex-row justify-between items-center mb-8">
        <h2>Your liquidity pool positions:</h2>
        <div className="hidden xl:block">
          <Wallet address={addressData.address} />
        </div>
      </div>

      <DashboardOverview addressData={addressData} />
      <PoolTable userPools={addressData.userPools} />
    </main>
  )
}
