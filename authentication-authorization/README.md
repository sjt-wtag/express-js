## why cookies are used in website

Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you.

## JWT (JSON Web Token):
- JWT is used for transmitting information securely and enabling stateless authentication. After a user logs in, a server generates a JWT token and sends it to the client. The client then includes this token in subsequent requests to the server, where it can be validated to verify the user's identity.

- Structure: JWT consists of three parts:
    1. Header: Contains metadata about the token, like the signing algorithm.
    2. Payload: Contains the claims or the data (like user info or permissions).
    3. Signature: Ensures the integrity of the token and verifies it was issued by a trusted source.

- Security: The payload is not encrypted, but it's signed (with algorithms like HMAC SHA256 or RSA) to ensure it hasn't been tampered with. You would use JWT to pass information that needs to be verified but not necessarily kept secret.

## Cookies vs Authorization header

- Cookies are automatically sent with every HTTP request to the domain (if not restricted by settings like SameSite).
- Authorization header must be explicitly included in the HTTP request, typically through JavaScript or a client-side library.

## bcrypt
bcrypt is used for securely hashing and storing passwords.

## install jwt & bcrypt

```
npm i jsonwebtoken 
npm i bcrypt 
```
## cookie-parser

In Node.js, a popular cookie parser middleware is the cookie-parser package, which helps you easily extract cookie data from incoming HTTP requests.

```
npm install cookie-parser 
```


## set cookie
```
import express from 'express';
const app = express();

app.get("/", function(req, res) {
  let token = jwt.sign({ email: "sumaya@gmail.com" }, secretKey);
  res.cookie("token", token); // set cookie
  res.send("done");
});
```

## get cookie
```
import express from 'express';
const app = express();

app.get("/read", function(req, res) {
  const token = req.cookies.token;
  res.send(`cookie: ${token}`);
})
```