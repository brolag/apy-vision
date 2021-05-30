import TokenPair from "@components/TokenPair"
import { capitalize } from "@utils/formatStringUtils"

type PoolNameProps = {
  name: string
  poolProviderKey: string
}

export default function PoolName({ name, poolProviderKey }: PoolNameProps) {
  return (
    <div className="flex flex-row">
      <div className="w-12 block">
        <TokenPair tokenA="token" tokenB="token" />
      </div>

      <div className="ml-2">
        <div className="text-purple-700 font-bold break-all w-24">{name}</div>
        <div className="font-gray-500 text-sm">
          {capitalize(poolProviderKey)}
        </div>
      </div>
    </div>
  )
}
