import { createContext, useState, useOptimistic } from 'react'

export const NoteContext = createContext([])

export const NoteContextProvider = ({ children }) => {
    const [ notes, setNotes ] = useState([]);
    const [optimisticNotes, addOptimisticNotes] = useOptimistic(
      notes,
      (state, newNote) => {
          return [state, newNote];
      }
    );
  return (
    <NoteContext.Provider value={{ notes, setNotes, optimisticNotes, addOptimisticNotes }}>
      {children}
    </NoteContext.Provider>
  )
}