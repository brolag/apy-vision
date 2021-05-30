import Avatar from "@assets/icons/Avatar.svg"
import ChevronDown from "@assets/icons/ChevronDown.svg"
import { trimAddress } from "@utils/formatStringUtils"

type WalletProps = {
  address: string
}

export default function Wallet({ address }: WalletProps) {
  return (
    <div>
      <div className="bg-blue-700 h-10 text-white rounded-2xl flex items-center w-40 text-lg font-bold">
        <div className="mr-1 ml-2">
          <Avatar />
        </div>
        <div className="mr-1">{trimAddress(address)}</div>
        <div>
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}
