import React from "react";
import { Form } from "./componentes/form";
import Header from "./componentes/header";
import { Resume } from "./componentes/resume";
import Global from "./styles/global";

const App = () => {
    return (
        <>
            <Header></Header>
            <Resume></Resume> 
            <Form></Form>
            <Global />
        </>
    )

};

export default App;