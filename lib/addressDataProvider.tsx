import { createContext } from "react"
import useAddress from "@utils/useAddress"

export const AddressDataContext = createContext({ addressData: {} })

function AddressDataProvider({ children }) {
  // TODO: This should come from wallet connection somehow.
  const address = "0x006CC1b89E9B68E08eEC14a514d17b47b363ACce"
  const addressData = useAddress(address)

  return (
    <AddressDataContext.Provider value={{ addressData }}>
      {children}
    </AddressDataContext.Provider>
  )
}
export { AddressDataProvider }
