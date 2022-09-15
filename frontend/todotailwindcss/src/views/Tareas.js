import React from 'react'
import {Link} from 'react-router-dom'

export const Tareas = () => {
  return (
      <>
        <div className="mx-auto text-4xl italic  font-mono underline text-center mt-16">Tus Tareas</div>
        <div className="mx-auto mt-5 bg-white rounded-md max-w-3xl max-h-3xl p-4 text-center shadow-xl shadow-indigo-600 ">
          <ul className="text-xl font-mono italic font-black list-decimal text-left pl-7 m-5 ">
            <li className="text-xl m-5">
              <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 mr-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
              <label for="react-checkbox" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"></label>
              Now this is a story all about how, my life got flipped-turned upside down
            </li>
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
