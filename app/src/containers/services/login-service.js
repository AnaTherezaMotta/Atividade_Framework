import http from './http';

const AUTH_LOGIN = '/auth/login';
const AUTH_ME = '/auth/me';
const AUTH_SIGNUP = '/auth/signup';


export const isLoggged = () => {
    return !!localStorage.getItem('token');
}

const salvaToken = (token) => {
    localStorage.setItem("token", token);
} 

export const getMe = async () => {
    const { data } = await http.get(AUTH_ME);
    return data;
}

export const doLogin = async (email, senha) => {
    const { data } = await http.post(AUTH_LOGIN, {email, senha});
    if(data.token) {
        salvaToken(data.token);
        return true;    
    }
    return false;
}

export const doSignup = async(usuario) => {
    const { data } = await http.post(AUTH_SIGNUP, usuario);
    if(data.token) {
        salvaToken(data.token);
        return true;    
    }
    return false;
}