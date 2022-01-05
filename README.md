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

**4.**  The app gets up and running on port 8082 with 
```
npm start
```
*** You will need bcrypt for hashing user passwords, jsonwebtoken for signing tokens, passport-local for implementing local strategy, and passport-jwt for retrieving and verifying JWTs. ***

