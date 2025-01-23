import { Menu, MoreVertical, Plus } from "lucide-react"

export function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <Menu className="w-6 h-6" />
      <div className="flex items-center gap-4">
        <MoreVertical className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Habits</h1>
        <Plus className="w-6 h-6" />
      </div>
    </div>
  )
}

