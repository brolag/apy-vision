import { useContext } from "react"

import { AddressDataContext } from "@lib/addressDataProvider"
import Hamburguer from "@assets/icons/Hamburguer.svg"

export default function Home() {
  const { addressData } = useContext(AddressDataContext)
  const { address } = addressData as any

  const trimAddress = (address: string) =>
    `${address.substr(0, 5)}...${address.slice(-4)}`

  return address ? (
    <div className="p-10 flex-col">
      <div className="flex">
        <div className="flex items-center text-purple-700">
          <Hamburguer />
          <div className="mr-1">Menu</div>
        </div>
        {/* <div className="bg-blue-700 round-xl">{trimAddress(address)}</div> */}
      </div>
    </div>
  ) : (
    "Loading..."
  )
}
