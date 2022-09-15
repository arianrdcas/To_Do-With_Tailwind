import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Register = () => {
  /* const { actions, store } = useContext(Context);
  const{nombre, apellido, email, telefono}=store;
  const {handleChange}=actions; */

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <>
      <div className="min-h-screen flex  items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full border-2 border-solid rounded-md shadow-xl shadow-indigo-600 space-y-8">
          <div>
            <img
              className="mx-auto mt-5 h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Registro de usuario
            </h2>
          </div>

          <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
            <Formik
              initialValues={{
                nombre:'',
                apellido:'',
                email:'',
                telefono:''  
              }}
              validate={(valores)=>{
                let errores = {};

                //Validacion Nombre
                if(!valores.nombre){
                  errores.nombre='Por favor ingresa un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                  errores.nombre = 'El nombre solo puede contener letras y espacios'
                }

                //Validacion Apellido
                if(!valores.apellido){
                  errores.apellido='Por favor ingresa un apellido'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
                  errores.apellido = 'El apellido solo puede contener letras y espacios'
                }

                //Validacion Email
                if(!valores.email){
                  errores.email='Por favor ingresa un email'
                } else if (!/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                  errores.email = 'El email solo puede contener letras, puntos, numeros, y guion bajo'
                }

                //Validacion Telefono
                if(!valores.telefono){
                  errores.telefono='Por favor ingresa un email'
                } else if (!/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(valores.telefono)){
                  errores.telefono = 'Solo número telefónico móvil, comenzar con +56 9 '
                }

                return errores;
              }}

              onSubmit={(valores, {resetForm})=>{
                resetForm();
                console.log("Formulario enviado");
                setFormularioEnviado(true);
                setTimeout(() => {
                  setFormularioEnviado(false)
                }, 5000);
                //Aqui Fetch(Post)
              }}
            >
              {({values, errors, touched, handleChange, handleBlur}) => (
                <Form
                  className="space-y-4"
                  autoComplete="off"
                  action="#"
                >
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div className="grid gap-6">
                      <div className="col-span-12">
                        <label
                          className="block text-sm font-medium text-black"
                          htmlFor="nombre"
                        >
                          Nombre
                        </label>
                        <Field
                          type="text"
                          className="mt-1 border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"
                          name="nombre"
                        />
                        <ErrorMessage name="nombre" component={()=>(
                          <div className="error" style={{ color: "red" }}>{errors.nombre}</div>
                        )}/>
                        {/* {touched.nombre && errors.nombre && <div className="error" style={{ color: "red" }}>{errors.nombre}</div>} */}
                      </div>

                      <div className="col-span-12">
                        <label
                          className="block text-sm font-medium text-black"
                          htmlFor="apellido"
                        >
                          Apellido
                        </label>
                        <Field
                          type="text"
                          className="mt-1  border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"
                          name="apellido"
                        />
                        <ErrorMessage name="apellido" component={()=>(
                          <div className="error" style={{ color: "red" }}>{errors.apellido}</div>
                        )}/>
                        {/* {touched.apellido && errors.apellido && <div className="error" style={{ color: "red" }}>{errors.apellido}</div>} */}
                      </div>
                      <div className="col-span-12">
                        <label
                          className="block text-sm font-medium text-black"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <Field
                          type="text"
                          className="mt-1  border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"
                          name="email"
                        />
                        <ErrorMessage name="email" component={() => (
                          <div className="error" style={{ color: "red" }}>{errors.email}</div>
                        )}/>
                        {/* {touched.email && errors.email && <div className="error" style={{ color: "red" }}>{errors.email}</div>} */}
                      </div>
                      <div className="col-span-12">
                        <label
                          className="block text-sm font-medium text-black"
                          htmlFor="telefono"
                        >
                          Teléfono
                        </label>
                        <Field
                          type="number"
                          className="mt-1 mb-8 border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded"
                          name="telefono"
                        />
                        <ErrorMessage name="telefono" component={()=>(
                          <div className="error" style={{ color: "red" }}>{errors.telefono}</div>
                        )}/>
                        {/* {touched.telefono && errors.telefono && <div className="error" style={{ color: "red" }}>{errors.telefono}</div>} */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border-2 border-solid border-indigo-600 text-sm rounded-md text-black font-bold bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Registrarse
                    </button>
                    {formularioEnviado && <p style={{ color: "green" }}>Formulario enviado con éxito!!!</p>}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
