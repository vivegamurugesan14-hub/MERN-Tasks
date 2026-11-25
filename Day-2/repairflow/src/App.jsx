import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="p-6">
          <h1 className="text-2xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2">
            Welcome to RepairFlow
          </p>
        </main>

      </div>

    </div>
  )
}

export default App