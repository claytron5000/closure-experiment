
// Wiring and fireing
document.querySelector("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const myClient = client(e.target.login.value);
    myClient.login();
    myClient.getUserTokens();
    document.querySelectorAll(".retrieve-secret").forEach((element) => {
        element.querySelector('button').style.display = "block";
        // element.style.display = 'none';
        element.addEventListener("submit", (e) => {
            e.preventDefault();
            element.parentNode.querySelector('.secret-display').innerText = myClient.getSecret(e.target.dataset.id)
        })
    })
})

function loggedInListener(element) {
    element.addEventListener("submit", (e) => {
        e.preventDefault();
        element.parentNode.querySelector('.secret-display').innerText = myClient.getSecret(e.target.dataset.id)
    })
}

const client = (password) => {
    let myToken;
    let userTokens;
    return {
        login: function () {
            myToken = fetchToken({ password });
        },
        getUserTokens: function () {
            userTokens = fetchTokens({ token: myToken })
        },
        getSecret: function (user) {
            return fetchUserSecret({ accessToken: userTokens[user], userName: user })
        }
    }
}
