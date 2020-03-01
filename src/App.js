import React from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'
import Item from './components/Item';



export default function App() {
  return (
    <div className="App">
      <h1 style={{ background: 'pink' }}>React-Redux Notes app</h1>
      <div className="Trillo">
        <div style={{ color: '#7f807f', fontWeight: 'bold' }}>
          Add a card ...
        </div>
      </div>
      <NoteForm />
      <hr />
      <NotesList />
    </div>
  )
}


