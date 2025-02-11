import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-center md:p-1 p-1 md:text-2xl bg-slate-800 text-white">
        <a className="px-3 py-1 md:px-6 hover:border rounded-md" href='/'>Home</a>
        <a className="px-3 py-1 md:px-6 hover:border rounded-md" href='/about'>About</a>
        <a className="px-3 py-1 md:px-6 hover:border rounded-md" href='/contact'>Contact</a>
        <a className="px-3 py-1 md:px-6 hover:border rounded-md" href='/dashbord'>Dashborad</a>
    </div>
  )
}

export default Navbar