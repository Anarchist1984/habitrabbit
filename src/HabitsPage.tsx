import {Header} from "./components/header"
import { DateSelector } from "./components/date-selector"
import { GoalSection } from "./components/goal-section"

export default function HabitsPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <Header />
      <DateSelector />
      <GoalSection title="Daily Goals" icon="📋" />
      <GoalSection title="Weekly Goals" icon="📅" />
    </div>
  )
}