import React from 'react'

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex  items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		    <div className="max-w-md w-full border-2 border-solid rounded-md shadow-xl shadow-indigo-600 space-y-8">
          <div>
            <img className="mx-auto mt-5 h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Registro de usuario
            </h2>
          </div>

          <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
            <form className="space-y-4" autoComplete="off" action="#" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label for="first_name" className="block text-sm font-medium text-black">Nombre</label>
                    <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"/>
                  </div>

                  <div className="col-span-12">
                    <label for="email_address" className="block text-sm font-medium text-black">Apellido</label>
                    <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1  border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"/>
                  </div>
                  <div className="col-span-12">
                    <label for="email_address" className="block text-sm font-medium text-black">Email</label>
                    <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1  border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"/>
                  </div>
                  <div className="col-span-12">
                    <label for="email_address" className="block text-sm font-medium text-black">Teléfono</label>
                    <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 mb-8 border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"/>
                  </div>
                </div>
              </div>

              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border-2 border-solid border-indigo-600 text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    
    </>
  )
}

export default Register