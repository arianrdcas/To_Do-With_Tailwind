const getState = ({getStore, getActions, setStore}) => {
    return{
        store:{
            nombre:"",
            apellido:"",
            email:"",
            telefono:"",
            tarea:""

        },
        actions:{
            /* handleChange: (e) =>{
                setStore({
                    [e.target.name]: e.target.value,
                })
            } */

        }
    };
};
export default getState;