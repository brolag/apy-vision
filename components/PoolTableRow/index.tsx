import PoolName from "@components/PoolName"
import LPGains from "@components/LPGains"
import TokensInfo from "@components/TokensInfo"

export default function PoolTableRow({ userPool }) {
  return (
    <div className="grid grid-cols-12 pl-8 py-8">
      <div className="col-span-2">
        <PoolName
          name={userPool.name}
          poolProviderKey={userPool.poolProviderKey}
        />
      </div>

      <div className="col-span-4">
        <TokensInfo tokens={userPool.tokens} />
      </div>

      <div className="col-span-2">
        <div>
          <div>2.98 SUSHI</div>
          <div className="text-green-500 font-bold text-sm">+(+$48.78)</div>
        </div>
      </div>

      <div className="col-span-2">
        <LPGains userPool={userPool} />
      </div>

      <div className="col-span-2">
        <div className="flex flex-row">
          <button className="border-2 border-purple-700 rounded-3xl px-3 py-1 text-purple-700 font-bold mr-4">
            Pool stats
          </button>
          <button className="border-2 border-purple-700  bg-purple-700 rounded-3xl px-3 py-1 text-white font-bold">
            View details
          </button>
        </div>
      </div>
    </div>
  )
}
