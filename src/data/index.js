import { controlFlow } from './module4.js'
import { gettingStarted, programmingBasics } from './modules01.js'
import { javaFundamentals, operators } from './modules23.js'
import { classesMethods, workingWithData } from './modules56.js'

export const modules = [
  {
    title: 'Programming Basics',
    icon: '🧠',
    color: 'bg-purple-500/10',
    lessons: programmingBasics,
  },
  {
    title: 'Getting Started',
    icon: '🚀',
    color: 'bg-blue-500/10',
    lessons: gettingStarted,
  },
  {
    title: 'Java Fundamentals',
    icon: '📦',
    color: 'bg-cyan-500/10',
    lessons: javaFundamentals,
  },
  {
    title: 'Operators',
    icon: '➕',
    color: 'bg-amber-500/10',
    lessons: operators,
  },
  {
    title: 'Control Flow',
    icon: '🔀',
    color: 'bg-green-500/10',
    lessons: controlFlow,
  },
  {
    title: 'Classes & Methods',
    icon: '🏗️',
    color: 'bg-rose-500/10',
    lessons: classesMethods,
  },
  {
    title: 'Working with Data',
    icon: '📊',
    color: 'bg-indigo-500/10',
    lessons: workingWithData,
  },
]

export const allLessons = modules.flatMap((m) => m.lessons)

export function getLessonById(id) {
  return allLessons.find((l) => l.id === id)
}

export function getAdjacentLessons(id) {
  const index = allLessons.findIndex((l) => l.id === id)
  return {
    prev: index > 0 ? allLessons[index - 1] : null,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : null,
  }
}
