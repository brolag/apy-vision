import { BASE_URL } from "@config/api"
import { useState, useEffect } from "react"

export default function useAddress(address: string) {
  const [addressData, setAddressData] = useState({})
  const apiUrl = `${BASE_URL}/portfolio/1/core/${address}`

  useEffect(() => {
    const fetchAddressData = async () => {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setAddressData(data)
    }

    fetchAddressData()
  }, [])

  return addressData
}
