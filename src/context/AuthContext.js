import React, { Component, createContext } from "react";
import axiosInstance from "../axiosConfig";

export const AuthContext = createContext();

class AuthContextProvider extends Component{
    state = {
        isAuthenticated: false,
        isLoading: true,
        loginError: null,
        registerError: null,
        userDetails: null,
        jwt: null   
    }

     login = async ({email, password}) => {
        try{
            const response = await axiosInstance.post('/auth/local/', {
                identifier: email,
                password
            });
            this.setState({
                isAuthenticated: true,
                isLoading: false,
                userDetails: response.data.user,
                jwt: response.data.jwt,
                loginError: null
            }); 

            localStorage.setItem('faculty-jwt', response.data.jwt);
        } catch(err){
            console.log(err, err.response);
            this.setState({
                isAuthenticated: false,
                isLoading: false,
                userDetails: null,
                jwt: null,
                loginError: err.response.data.message || 'Error in logging in!'
            }); 
        }
    }

    register = async ({name,email, password,department,isCoordinator}) => {
        return new Promise(async (resolve, reject) => {
            try{
                await axiosInstance.post('/auth/local/register', {
                    username: name, email, password, department, isCoordinator
                });
                resolve();
            } catch(err){
                console.log(err, err.response);
                this.setState({
                    isAuthenticated: false,
                    isLoading: false,
                    userDetails: null,
                    jwt: null,
                    registerError: err.response.data.message || 'Error in registering!'
                }); 

                reject(err.response.data.message || 'Error in registering!');
            }
        });
    }

    logout = () => {
        this.setState({
            isAuthenticated: false,
            isLoading: false,
            userDetails: null,
            jwt: null
        }); 

        localStorage.removeItem('faculty-jwt');
    }

    checkAuth = async () => {
        const jwt = localStorage.getItem('faculty-jwt');
        if(jwt){
            try{
                const response = await axiosInstance.get('/users/me', {
                    headers: {
                        "Authorization": `Bearer ${jwt}`
                    }
                });

                this.setState({
                    isAuthenticated: true,
                    isLoading: false,
                    userDetails: response.data,
                    jwt,
                }); 
            } catch(err){
                this.setState({
                    isAuthenticated: false,
                    isLoading: false,
                    userDetails: null,
                    jwt: null,
                    loginError: 'Session expired!'
                }); 

                localStorage.removeItem('faculty-jwt');
            }
        } else {
            this.setState({isLoading: false});
        }
    }

    componentDidMount(){
        this.checkAuth();
    }

    render(){
        console.log(this.state);
        return(
            <AuthContext.Provider value={{
                login: this.login,
                register: this.register,
                logout: this.logout,
                state: this.state
            }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;