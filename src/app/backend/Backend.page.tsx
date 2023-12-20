'use client'

import { useTodos } from "@/hooks/useTodos"

export const BackendPage = () => {
  const { todos, todosNumber, setTodosNumber } = useTodos()
  return (
    <div className="flex flex-col items-center h-screen p-8">
      <div className="flex flex-col mb-12">
        <span>Write Here the number of TODOs to display</span>
        <input className="text-black h-12 p-4" value={todosNumber} type="text" onChange={(e) => setTodosNumber(+e.target.value)}/>
        {todosNumber < 1 || todosNumber > 100 && (
          <span className="text-sm text-red-500">The Number of TODOs has to be between 1~100</span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 w-screen">
        {todos.map(todo => (
          <div key={todo.id} className={`flex flex-col items-center h-40 p-4 bg-[#ECE6F0] border-2 rounded-3xl ${todo.completed? "border-green-500":"border-red-500"}`}>
            <span className="font-bold text-black text-sm">
              {todo.title}
            </span>
            <span className="font-bold text-black text-xs">
              {JSON.stringify(todo)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}