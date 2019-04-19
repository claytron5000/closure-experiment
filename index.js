// The first section of this file is simulating a server. The fetch functions are mocked 
// to show what might be delivered from the server.
let token;

const fetchToken = (deadurl, {password}) => {
    // This is a pretend fetch to a server that takes a password, and sends back a token
    // I'm basing the token on the password merely to show that it's unique to this user.
    return token = `asdfasdf${password}asdfasdf`
}

const fetchRequest = (deadurl, {requesttoken}) => {
    // Once we have a token, we can make requests to the server with the token and get a good response.
    if (requesttoken === token) {
        return 'Valid request!'
    }
    else {
        return '416 or whatever'
    }
}

document.querySelector("#login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const myClient = client(e.target.login.value);
    myClient.login();
    console.log(myClient);
    document.querySelector("#request-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const response = myClient.makeRequest('pretendurl');
        console.log(myClient);
        document.querySelector("#response").innerText = response
    })
})

const client = (password) => {
    // We'll use this token to make server requests, though it's completely invisible to the client
    let myToken;
    return {
        login: function() {
            myToken = fetchToken('myurl',{ password: password });
        },
        makeRequest: function(urlstring) {
            return fetchRequest(urlstring, {requesttoken:myToken})
        }
    }
}
// Instatiate a new client with a password.
// log the client in 
// myConnection.login();
// // make a request, is it valid?
// console.log(myConnection.makeRequest('someendpoint'));
// // what is exposed in the object?
// console.log(myConnection)