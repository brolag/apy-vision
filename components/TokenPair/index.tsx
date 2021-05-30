import TokenIcon from "@components/TokenIcon"

type TokenPairProps = {
  tokenA: string
  tokenB: string
}

export default function TokenPair({ tokenA, tokenB }: TokenPairProps) {
  return (
    <div className="flex flex-row relative">
      <div className="w-8 relative left-2">
        <TokenIcon tokenName="token" width={40} />
      </div>
      <div className="w-6 absolute top-1">
        <TokenIcon tokenName="token" width={40} />
      </div>
    </div>
  )
}
