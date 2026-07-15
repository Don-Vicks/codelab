import { controlFlow } from './module4.js'
import { gettingStarted, programmingBasics } from './modules01.js'
import { javaFundamentals, operators } from './modules23.js'
import { classesMethods, workingWithData } from './modules56.js'
import { gettersSetters } from './javaAdvanced.js'
import {
  pythonProgrammingBasics,
  pythonGettingStarted,
  pythonFundamentals,
  pythonOperators,
  pythonControlFlow,
  pythonFunctionsObjects,
} from './pythonLessons.js'

export const languages = ['java', 'python']

export const javaModules = [
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
    color: 'bg-stone-500/10',
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
    color: 'bg-orange-500/10',
    lessons: classesMethods,
  },
  {
    title: 'Getters & Setters',
    icon: '🔐',
    color: 'bg-emerald-500/10',
    lessons: gettersSetters,
  },
  {
    title: 'Working with Data',
    icon: '📊',
    color: 'bg-indigo-500/10',
    lessons: workingWithData,
  },
]

export const pythonModules = [
  {
    title: 'Programming Basics',
    icon: '🧠',
    color: 'bg-purple-500/10',
    lessons: pythonProgrammingBasics,
  },
  {
    title: 'Getting Started',
    icon: '🚀',
    color: 'bg-blue-500/10',
    lessons: pythonGettingStarted,
  },
  {
    title: 'Python Fundamentals',
    icon: '📦',
    color: 'bg-cyan-500/10',
    lessons: pythonFundamentals,
  },
  {
    title: 'Operators',
    icon: '➕',
    color: 'bg-stone-500/10',
    lessons: pythonOperators,
  },
  {
    title: 'Control Flow',
    icon: '🔀',
    color: 'bg-green-500/10',
    lessons: pythonControlFlow,
  },
  {
    title: 'Functions & Objects',
    icon: '🏗️',
    color: 'bg-orange-500/10',
    lessons: pythonFunctionsObjects,
  },
]

export function getModulesForLanguage(language) {
  return language === 'python' ? pythonModules : javaModules
}

export function getAllLessonsForLanguage(language) {
  return getModulesForLanguage(language).flatMap((m) => m.lessons)
}

// Default export for backward compatibility
export const modules = javaModules

export const allLessons = modules.flatMap((m) => m.lessons)

export function getLessonById(id) {
  // Search across all languages
  const javaLesson = allLessons.find((l) => l.id === id)
  if (javaLesson) return javaLesson

  const pythonLesson = pythonModules
    .flatMap((m) => m.lessons)
    .find((l) => l.id === id)
  return pythonLesson || null
}

export function getAdjacentLessons(id, language = 'java') {
  const lessons = getAllLessonsForLanguage(language)
  const index = lessons.findIndex((l) => l.id === id)
  return {
    prev: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  }
}
