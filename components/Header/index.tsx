import Wallet from "@components/Wallet"
import Hamburguer from "@assets/icons/Hamburguer.svg"

type HeaderProps = {
  address: string
}

export default function Header({ address }: HeaderProps) {
  return (
    <div className="flex justify-between m-4 xl:hidden">
      <div className="flex items-center text-purple-700">
        <Hamburguer />
        <div className="ml-2">Menu</div>
      </div>
      <Wallet address={address} />
    </div>
  )
}
