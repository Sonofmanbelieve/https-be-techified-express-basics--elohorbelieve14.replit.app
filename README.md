# BeTechified — Backend Development Week 2

This project follows the Node.js and Express basics visible in the Week 2 lecture screenshots.

## Topics demonstrated

- Node.js
- NPM
- package.json
- Express.js
- dotenv
- Environment variables
- Middleware
- JSON request bodies
- Custom request logging
- Static files
- GET routes
- POST routes
- Error/404 handling
- Nodemon
- .gitignore

## How to run

### 1. Open the correct folder

In VS Code, open the folder named:

`Week2_Node_Express_BeTechified`

The `server.js` file must be directly inside this folder.

### 2. Open Terminal

In VS Code choose:

Terminal → New Terminal

The terminal should be inside the project folder.

### 3. Install dependencies

Run:

`npm install`

### 4. Start in development mode

Run:

`npm run dev`

Or normal mode:

`npm start`

### 5. Open the website

Go to:

`http://localhost:3000`

### 6. Test the API

GET:

`http://localhost:3000/api`

GET:

`http://localhost:3000/api/students`

For POST, use Postman:

URL:
`http://localhost:3000/api/students`

Method:
POST

Body → raw → JSON:

{
  "name": "Michael James",
  "course": "Backend Development"
}

## IMPORTANT FIX FOR "Cannot find module ... server.js"

If your terminal is showing an error saying it cannot find `server.js`, you are probably running the command from the wrong folder.

Use:

`cd Week2_Node_Express_BeTechified`

Then:

`npm install`

Then:

`npm run dev`

Alternatively, in VS Code use File → Open Folder and select the project folder containing `server.js`.

Do not type `node server.js` while the terminal is still in the parent folder.

## GitHub

Before uploading to GitHub, make sure `node_modules` and `.env` are not uploaded. The `.gitignore` file is already included.
