import React from 'react';
import { Route, Switch } from 'react-router-dom'

import {
    Home, About, Login, Catalog, VideoPlay, MotoDetails, MotoCreate, NotFound
} from '../';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/about' exact component={About} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/video' exact component={VideoPlay} />
        <Route path='/details/:id' exact component={MotoDetails} />
        <Route path='/create/moto' exact component={MotoCreate} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes;