import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default class Social extends Component {
    state = {
        auth: false,
        email: '',
        password: ''
    };

    responseFacebook = async response => {
        console.log(response);
        if (response.status !== 'unknown') {


            let email = response.email;
            let password = response.id

            this.setState({
                auth: true,
                email,
                password
            });
            
            console.log(email, password);
            
          let res = await this.props.submitLogin(email, password, 'social');
          console.log(res);

          if(res.success) {
            this.props.changeTitle(true, res.token);
           }
        }

    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    responseGoogle = async response => {
        console.log('Facebook btn clicked');
        console.log(response.profileObj.googleId);
        if (response.status !== 'unknown') {
           let email = response.profileObj.email;
           let password = response.profileObj.googleId;
           console.log(email, password);

           let res = await this.props.submitLogin(email, password, 'social');
           console.log(res); 
           if(res.success) {
            this.props.changeTitle(true, res.token);
           }
           
        }
    }

    render() {
        return (
            <>
                {this.props.isLoggedIn ? null : <><FacebookLogin
                appId="858683987956194"
                autoLoad={true}
                fields="name, email"
                onClick={this.componentClicked}
                callback={this.responseFacebook} /> <GoogleLogin
                    clientId="412901333934-t233rg296s57oto3k1fp6nfv3hdoigig.apps.googleusercontent.com"
                    buttonText="Login"
                    fields="name, email"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /></>}
            </>
        );
    }
}