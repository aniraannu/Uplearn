import decode from 'jwt-decode';

class AuthService {
    getUser() {
        return decode(this.getToken());
    }

// Checks if user is currently logged in
loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
}

//Sees if token is expired
isTokenExpired(token) {
    const decode = decode(token);
    if (decode.exp < Date.now() / 1000)  {
        localStorage.removeItem('id_token');
        return true;
    }
    return false;
}

//Gets token from localStorage
getToken() {
    return localStorage.getItem('id_token');
}

// Logs in the user by saving the token to localStorage
login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/')
}

// Logs out the user by removing the token from localStorage and reloading the page
logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
}
}

export default new AuthService();