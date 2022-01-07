# jwt-and-passport-auth

### Installation Requirements ###

1. [Node.js](https://nodejs.org/en/download/) Installed locally
2. [MongoDb](https://www.mongodb.com/)  installed and running locally
3. Downloading and installing a tool like [Postman](https://www.getpostman.com/) will be required for testing API endpoints.

### Step 1 — Setting up the Project ###
**1.** Clone the repo.
```
git clone https://github.com/oyugirachel/jwt-and-passport-auth
.git
```

**2.**  ```cd``` into repo. Use the same directory name(below) if you do not change it.
```
cd jwt-and-passport-auth
```

**3.**  Setup the application by installing its dependencies with
```
npm install
```

**4.**  The app gets up and running on port 3000 with 
```
npm start
```
*** You will need bcrypt for hashing user passwords, jsonwebtoken for signing tokens, passport-local for implementing local strategy, and passport-jwt for retrieving and verifying JWTs. ***


### Step 2 — Testing with Postman ###
You can use Postman to test your API authentication.

First, you will have to register a new user in your application with an email and password.

In Postman, set up the request to the <strong>signup<strong> endpoint you created in <strong>routes.js<strong>:

```
POST localhost:3000/signup
Body
x-www-form-urlencoded
```
And send over these details through the <strong>Body<strong> of your request:
[![Screenshot-from-2022-01-07-11-30-14.png](https://i.postimg.cc/TwwRzQqx/Screenshot-from-2022-01-07-11-30-14.png)](https://postimg.cc/yJM49mbp)

When that’s done, click the Send button to initiate the <strong>POST<strong> request:
```
Output{
    "message": "Signup successful",
    "user": {
        "_id": "[a long string of characters representing a unique id]",
        "email": "example@example.com",
        "password": "[a long string of characters representing an encrypted password]",
        "__v": 0
    }
}
```