const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');

app.use(session({secret: "MySecretKey", resave: true, saveUninitialized: true}));

app.get('/set_cookie', (req,res) => {
    res.cookie('username','trent', {maxAge: 10000});
    res.send('A cookie with your name has been set');
});

app.get('/use_cookie', (req,res) => {
    let username = req.cookies.username;
    res.send(`Welcome to the used coookie page, ${username}`);
});

app.get('/use_session', (req,res) => {
    res.send(`Welcome, your session ID is ${req.session.id}.`);
});



app.get("/login", function (request, response) {
    // Give a simple login form
    let user_return = request.query.username || "";
    let errorMessage = request.query.error || "";

    let login_form = `
    <script>
            function getCookieValue(cookieName) {
                let cookies = document.cookie.split(';'); //Split the entire cookie string by ';'
                for (let i = 0; i < cookies.length; i++) {
                    let cookiePair = cookies[i].trim().split('='); //Split each individual cookie into key and value
                    if (cookiePair[0] === cookieName) {
                        return cookiePair[1]; //Return the value if name matches
                    }
                }
                return null; //Return null if cookie is not found
            }
            let params = (new URL(document.location)).searchParams;
            window.onload = function() {
                if (params.has('error')) {
                    login_form['username'].value = params.get('username');
                    document.getElementById("errMsg").innerHTML = params.get("error");
                }
                let cookie_username = getCookieValue("username");
                if (cookie_username) {
                    document.getElementById("welcomeUser").innerHTML = 'Welcome back '+cookie_username+'!';
                } 
            }
        </script>

        <body>
        <div id="errMsg"></div>
        <div id="welcomeUser"></div>
        <form action="" method="POST" name="login_form">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
    `;
    response.send(login_form);
});



app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

    //Retrieve the user's entered information
    let username_entered = request.body['username'];
    let password_entered = request.body['password'];

    let response_msg = "";
    let errors = false;

    //Check if the username exists in user_reg_data
    if (typeof user_reg_data[username_entered] != 'undefined') {
        //Check if the password matches with the username
        if (password_entered == user_reg_data[username_entered].password) {

            response.cookie('username', `${username_entered}`);
            console.log('Login cookie has been sent.');

            const userSession = request.session;
            if (!userSession.lastLogin) {
                userSession.lastLogin = "First Visit!"
            } else {
                userSession.lastLogin = new Date().toLocaleString();
            }
            
            response_msg = `${username_entered} is logged in. Last Login: ${userSession.lastLogin}`;
        } else {
            response_msg = `Incorrect password.`
            errors = true;
        }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    };
    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`./login?error=${response_msg}&username=${username_entered}`);
    };


});

const fs = require('fs');
let filename = __dirname+'/user_data.json';
let user_reg_data;

if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf-8');
    user_reg_data = JSON.parse(data);
    let user_stats = fs.statSync(filename);
    let stats_size = user_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters.`);
} else {
    console.log(`The file name ${filename} does not exist.`);
};

//Lab12 Part4
let username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/register", function (request, response) {
    // process a simple register form
    let new_user = request.body.username;

    let errors = false;
    let resp_msg = "";

    if (typeof user_reg_data[new_user] != 'undefined') {
        resp_msg = 'Username unavailable. Please enter a different username.';
        errors = true;
    } else if (request.body.password == request.body.repeat_password) {
        user_reg_data[new_user] = {};
        user_reg_data[new_user].name = request.body.name;
        user_reg_data[new_user].password = request.body.password;
        user_reg_data[new_user].email = request.body.email;

        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect('./login');
        
    } else {
        resp_msg = 'Repeat password does not match previous password.'
        errors = true;
    };

    if (errors) {
        response.send(resp_msg);
    };

});

app.listen(8080, () => console.log(`listening on port 8080`));