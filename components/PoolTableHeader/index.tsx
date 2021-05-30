import Exclamation from "@assets/icons/Exclamation.svg"

export default function PoolTableHeader() {
  return (
    <div className="grid grid-cols-12 rounded-t-lg bg-gray-300 py-4 text-left pl-8 border-1 border-solitude-100 text-gray-800 font-bold">
      <div className="col-span-2">Pool Name</div>
      <div className="col-span-4">Tokens entered → current</div>
      <div className="col-span-2">Farming Rewards</div>
      <div className="col-span-2">
        <div className="flex flex-row items-center">
          <div>
            LP gains /{" "}
            <span className="text-purple-700 font-bold">Net market gains</span>
          </div>

          <span className="ml-1">
            <Exclamation />
          </span>
        </div>
      </div>
    </div>
  )
}
