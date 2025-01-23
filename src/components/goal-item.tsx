import { Plus, RotateCcw, Check } from "lucide-react"

interface GoalItemProps {
  title: string
  streak: number
  progress: string
  backgroundColor: string
  actionType: "add" | "refresh" | "check"
  isCompleted?: boolean
}

export function GoalItem({ title, streak, progress, backgroundColor, actionType, isCompleted }: GoalItemProps) {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg text-black" style={{ backgroundColor }}>
              {title}
            </span>
            <span className="text-gray-600">{streak} 🔥</span>
          </div>
          <p className="text-gray-700">{progress}</p>
        </div>
        <button
          className="rounded-xl p-2 border-2 border-dashed"
          style={{
            backgroundColor: actionType === "check" && isCompleted ? backgroundColor : "transparent",
            borderColor: backgroundColor,
          }}
        >
          {actionType === "add" && <Plus className="w-5 h-5" />}
          {actionType === "refresh" && <RotateCcw className="w-5 h-5" />}
          {actionType === "check" && <Check className="w-5 h-5" />}
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 h-full opacity-10"
        style={{
          backgroundColor,
          width: progress.split("/")[0].trim() + "%",
        }}
      />
    </div>
  )
}

