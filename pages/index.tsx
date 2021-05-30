import { useContext } from "react"
import { AddressDataContext } from "@lib/addressDataProvider"
import Header from "@components/Header"
import Spinner from "@components/Spinner"
import TopBanner from "@components/TopBanner"
import Sidebar from "@components/Sidebar"
import Dashboard from "@components/Dashboard"

export default function Home() {
  const { addressData } = useContext(AddressDataContext)
  const { address } = addressData as any

  return address ? (
    <main className="max-w-full m-auto text-gray-800">
      <TopBanner />
      <Header address={address} />
      <div className="p-10 flex flex-row">
        <Sidebar />
        <Dashboard addressData={addressData} />
      </div>
    </main>
  ) : (
    <Spinner />
  )
}
