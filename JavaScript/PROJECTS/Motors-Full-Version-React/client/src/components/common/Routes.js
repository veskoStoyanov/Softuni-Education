import React from 'react';
import { Route, Switch } from 'react-router-dom'

import {
    Home, About, Login, Register, Logout, Catalog, VideoPost, VideoPlay, MotoDetails, VideoCreate, MotoCreate,
    CommentPost, MotoEdit, Profile, PostContact, ListContacts, ContactDetails, MapContainer, GetWeather, NotFound, Box,
    Reservation, Games, Panel, DetailsBox, Main, Game
} from '../';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/about' exact component={About} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/video' exact component={VideoPost} />
        <Route path='/play/:id' exact component={VideoPlay} />
        <Route path='/details/:id' exact component={MotoDetails} />
        <Route path='/create/video' exact component={VideoCreate} />
        <Route path='/create/moto' exact component={MotoCreate} />
        <Route path='/comments/:id' exact component={CommentPost} />
        <Route path='/moto/edit/:id' exact component={MotoEdit} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/contact/:name' exact component={PostContact} />
        <Route path='/list/contacts' exact component={ListContacts} />
        <Route path='/contact/details/:id' exact component={ContactDetails} />
        <Route path='/maps/:city' exact component={MapContainer} />
        <Route path='/details/getWeather/:location' exact component={GetWeather} />
        <Route path='/mail' exact component={Box} />
        <Route path='/contact/details/user/:id' exact component={DetailsBox} />
        <Route path='/hotels' exact component={Main} />
        <Route path='/reservation' exact component={Reservation} />
        <Route path='/hotel/create' exact component={Panel} />
        <Route path='/games' exact component={Games} />
        <Route path='/games/miner' exact component={Game} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes;