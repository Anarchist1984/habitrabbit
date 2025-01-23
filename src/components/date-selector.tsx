interface DateItemProps {
    day: string
    date: number
    isSelected?: boolean
  }
  
  function DateItem({ day, date, isSelected }: DateItemProps) {
    return (
      <div
        className={`flex flex-col items-center p-2 rounded-xl ${
          isSelected ? "bg-white text-black" : "bg-gray-100 text-gray-600"
        }`}
      >
        <span className="text-sm">{day}</span>
        <span className="text-xl font-semibold">{date}</span>
      </div>
    )
  }
  
  export function DateSelector() {
    return (
      <div className="flex justify-between gap-2 mb-6">
        <DateItem day="Wed" date={15} />
        <DateItem day="Thu" date={16} />
        <DateItem day="Fri" date={17} />
        <DateItem day="Sat" date={18} />
        <DateItem day="Sun" date={19} />
        <DateItem day="Mon" date={20} />
        <DateItem day="Tue" date={21} isSelected />
      </div>
    )
  }
  
  