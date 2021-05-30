import Exclamation from "@assets/icons/Exclamation.svg"
import { applyCurrencyFormat } from "@utils/formatStringUtils"

type CardProps = {
  title: string
  value: string
}

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-gray-100 border-1 border-solitude-100 px-6 py-4  w-72 rounded-xl">
      <div className="flex flex-row items-center mb-2 justify-between">
        <h4 className="text-gray-800 font-bold text-sm xl:text-gl">{title}</h4>
        <Exclamation />
      </div>
      <div className="text-purple-900 font-bold text-2xl">
        {applyCurrencyFormat(Number(value))}
      </div>
    </div>
  )
}
