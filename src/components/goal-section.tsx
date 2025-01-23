import { ChevronDown } from "lucide-react"
import { GoalItem } from "./goal-item"

interface GoalSectionProps {
  title: string
  icon: string
}



export function GoalSection({ title, icon }: GoalSectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <ChevronDown className="w-6 h-6" />
      </div>
      {title === "Daily Goals" ? (
        <>
          <GoalItem
            title="Wake Up Early"
            streak={2}
            progress="Today, 0 / 1 time"
            backgroundColor="#FFE4A0"
            actionType="add"
          />
          <GoalItem
            title="Drink Water"
            streak={6}
            progress="Today, 6 / 8 cups"
            backgroundColor="#B8E3FF"
            actionType="add"
          />
          <GoalItem
            title="Steps"
            streak={14}
            progress="Today, 5,850 / 10,000 steps"
            backgroundColor="#98D8D8"
            actionType="refresh"
          />
          <GoalItem
            title="Read"
            streak={11}
            progress="Today, 35 / 30 min"
            backgroundColor="#FFB5B5"
            actionType="check"
            isCompleted
          />
        </>
      ) : (
        <>
          <GoalItem
            title="Exercise"
            streak={3}
            progress="This Week, 2 / 3 times"
            backgroundColor="#C5C5FF"
            actionType="add"
            isCompleted
          />
          <GoalItem
            title="Run"
            streak={4}
            progress="This Week, 10 / 10 miles"
            backgroundColor="#D8C5FF"
            actionType="check"
            isCompleted
          />
        </>
      )}
    </div>
  )
}

