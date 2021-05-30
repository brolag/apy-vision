import Image from "next/image"

export default function Sidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-64 mr-6">
      <div className="w-40 mb-8">
        <Image src="/logo.png" alt="APY.vision" width={354} height={96} />
      </div>
      <nav className="mb-8">
        <ul>
          <li className="font-bold mb-4 active">Dashboard</li>
          <li className="font-bold mb-4">Pools</li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li className="font-bold text-xs mb-4">FAQ</li>
          <li className="font-bold text-xs mb-4">Blog</li>
          <li className="font-bold text-xs mb-4">Support Us</li>
        </ul>
      </nav>
    </aside>
  )
}
