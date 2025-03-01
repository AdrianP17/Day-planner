import { ChecklistItem } from '@/entitites/ChecklistItem'
import { format } from 'date-fns';
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface ChecklistState {
    checklist: ChecklistItem[];
    addTask: (task: Omit<ChecklistItem, 'id' | 'isChecked' | 'date'>) => void;
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
}

export const useChecklistStore = create<ChecklistState>()
(persist((set) => ({
    checklist: [
        { id: 1, isChecked: false, title: "Ejercicio", hours: 0, minutes: 30, date: '29/02/2025' },
        { id: 3, isChecked: false, title: "Estudiar", hours: 2, minutes: 0, date: '29/02/2025' },
        { id: 4, isChecked: true, title: "Estudiar2", hours: 2, minutes: 0, date: '28/02/2025' },
        { id: 6, isChecked: false, title: "Disfrutar", hours: 2, minutes: 30, date: '29/02/2025' },
      ],
      addTask: (newTask) => set(state => ({
        checklist: [
          ...state.checklist,
          {
            ...newTask,
            id: Date.now(),
            isChecked: false,
            date: format(new Date(), 'dd/MM/yyyy')
          }
        ]
      })),
      toggleTask: (id) => set(state => ({
        checklist: state.checklist.map(task =>
          task.id === id ? { ...task, isChecked: !task.isChecked } : task
        )
      })),
      removeTask: (id) => set(state => ({
        checklist: state.checklist.filter(task => task.id !== id)
      }))
}), {name: 'checklist-storage'}))