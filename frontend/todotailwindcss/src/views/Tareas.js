import React from 'react'
import {Link} from 'react-router-dom'

export const Tareas = () => {
  return (
      <>
        <div className="mx-auto text-4xl italic  font-mono underline text-center mt-5">Tus Tareas</div>
        <div className="mx-auto mt-5  border-black bg-slate-200 rounded-md max-w-3xl max-h-3xl p-4 border-4 text-center shadow-xl shadow-black ">
            <ul className="text-xl font-mono italic font-black list-decimal text-left pl-7 m-5 ">
                <li className="text-xl m-5">Now this is a story all about how, my life got flipped-turned upside down</li>
                <li className="text-xl m-5">Now this is a story all about how, my life got flipped-turned upside down</li>
                <li className="text-xl m-5">Now this is a story all about how, my life got flipped-turned upside down</li>
            </ul>
        </div>
        <div className="mx-auto mt-14 max-w-3xl max-h-3xl flex justify-between">
            <Link to="/add_tarea" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-2">Añadir Tarea</Link>
            <Link className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-2">Editar Tarea</Link>
            <Link className="transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-2">Eliminar Tarea</Link>
        </div>
    </>
  )
}
