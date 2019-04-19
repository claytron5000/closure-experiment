// Page rendery server code
const users = {
    jimmy: {
        secret: "I just want to be alone.",
        accessToken: "l;kj",
        pic: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    susy: {
        secret: "I eat fourteen bananas every day.",
        accessToken: "fdsa",
        pic: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    andrew: {
        secret: "I had a foot transplant at the age of 8.",
        accessToken: "wert",
        pic: "https://randomuser.me/api/portraits/men/80.jpg"
    },
    melanie: {
        secret: "I like the smell of my own farts.",
        accessToken: "trew",
        pic: "https://randomuser.me/api/portraits/women/92.jpg"
    },
    bobby: {
        secret: "I have lice.",
        accessToken: "fess",
        pic: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    ricky: {
        secret: "There are thirteen people living in my house.",
        accessToken: "xcvb",
        pic: "https://randomuser.me/api/portraits/men/3.jpg"
    }
}
const formBuilder = function (user) {
    return `<form class="retrieve-secret" data-id="${user}">
    <button>Retrieve My Secret</button>
    </form>` //style="display: none"
}

const htmlUserList = function (users) {
    return Object.keys(users).reduce((list, user) => `${list}<li><h3>${user}</h3><div class="user-container"><img src="${users[user].pic}"/>${formBuilder(user)}<span class="secret-display"></span></div></li>`, '')
}

document.querySelector("#user-list").innerHTML = htmlUserList(users);

// Ajaxy Server code
let userToken;
const fetchToken = ({ password }) => {
    return userToken = `asdfasdf${password}asdfasdf`;
}

const fetchTokens = ({ token }) => {
    return token === userToken ? Object.keys(users).reduce((list, user) => { list[user] = users[user].accessToken; return list }, {}) : '416';
}

const fetchUserSecret = ({ accessToken, userName }) => {
    // Once we have a token, we can make requests to the server with the token and get a good response.
    if (accessToken === users[userName].accessToken) {
        return users[userName].secret
    }
    else {
        return '416 or whatever'
    }
}