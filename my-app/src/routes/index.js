import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';

const Routes = () => 
    //switch para gerenciar e n enviar todas rotas junto
    <Switch> 
        <Route path="/" component={ ()=> <>asda </>} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tarefas" component={Tarefas} />
    </Switch>

export default Routes