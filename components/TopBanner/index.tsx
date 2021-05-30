import Value from "@assets/icons/Value.svg"
import Medium from "@assets/icons/Medium.svg"
import Twitter from "@assets/icons/Twitter.svg"
import Discord from "@assets/icons/Discord.svg"

export default function TopBanner() {
  return (
    <div className="hidden xl:flex bg-gray-900 text-white font-bold flex-row justify-between px-4 py-2">
      <div className="flex items-center">
        <Value />
        <p className="ml-2 text-xs">VALUE pool data coming soon!</p>
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-2">
          <p className="text-xs">Subscribe to updates:</p>
        </div>
        <div className="mr-2">
          <Medium />
        </div>
        <div className="mr-2">
          <Discord />
        </div>
        <div className="mr-2">
          <Twitter />
        </div>
        <div className="mr-2">
          <span>@</span>
        </div>
      </div>
    </div>
  )
}
