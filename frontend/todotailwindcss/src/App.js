import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from './store/appContext';
import Navbar from "./components/Navbar";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./views/Home";
import { Tareas } from "./views/Tareas";
import Add_Tarea from "./views/Add_Tarea";


//import imagen from './assets/imagen/imagen.jpg'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/tareas" component={Tareas}/>
        <Route exact path="/add_tarea" component={Add_Tarea}/>

      </Switch>
    </BrowserRouter>
  );
};

export default injectContext(App);
