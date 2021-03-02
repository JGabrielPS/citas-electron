import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import clienteAxios from "./config/axios";

import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";

function App() {
  const [citas, guardarCitas] = useState([]);

  useEffect(() => {
    const consultarAPI = () => {
      clienteAxios
        .get("/pacientes")
        .then((resp) => guardarCitas(resp.data))
        .catch((error) => console.log(error));
    };
    consultarAPI();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Pacientes citas={citas} />} />
        <Route exact path="/nueva" component={NuevaCita} />
        <Route exact path="/cita/:id" component={Cita} />
      </Switch>
    </Router>
  );
}

export default App;
