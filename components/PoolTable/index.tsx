import PoolTableHeader from "@components/PoolTableHeader"
import PoolTableRow from "@components/PoolTableRow"

export default function PoolTable({ userPools }) {
  return (
    <div>
      <h3 className="text-gray-800 font-bold text-gl xl:text-xl mb-4">
        Your current pools
      </h3>
      <PoolTableHeader />
      {userPools.map((userPool) => (
        <PoolTableRow key={userPool.poolProviderKey} userPool={userPool} />
      ))}
    </div>
  )
}
