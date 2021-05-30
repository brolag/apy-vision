import Image from "next/image"
import { capitalize } from "@utils/formatStringUtils"

export default function TokenIcon({ tokenName, width }) {
  const tokenImageSrc = `/${tokenName}.png`
  const alt = capitalize(tokenName)

  return (
    <div>
      <Image src={tokenImageSrc} alt={alt} width={width} height={width} />
    </div>
  )
}
