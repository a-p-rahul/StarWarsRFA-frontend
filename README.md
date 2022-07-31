# RFA App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
We live in a galaxy far far away.
We’re building a web portal where researchers can look up information about
extra terrestrial people, vehicles, species and planets.
We will use the Star Wars API to feed our system with information.

## Agile Assessment

This board contains all user stories:
https://rfacxp.atlassian.net/projects/RFA/issues/?
filter=allissues&orderby=issuekey%20ASC
They are prioritised in order of value.

## Installation

1.  Install Dependencies

    - [Node.js (version 6.x is recommended)](https://nodejs.org/en/)

2.  Go to the project's root directory **cd /my/path/to/directory**
3.  Run **npm install**
4.  Start using it! **npm start**

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the dependencies required for the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Time breakdown

The tasks in this table are arranges in the order they were implemented. Times are approximate.

| Time taken (hrs) | Task                                                   |
| ---------------- | ------------------------------------------------------ |
| 1:30             | Project setup and skeleton code                        |
| 2:00             | Experiments with React Context                         |
| 0:40             | Convert project to use Redux-thunk                     |
| 1:20             | RFA-5: List all planets                                |
| 1:40             | RFA-1: Implement navigation to browse various datasets |
| 0:40             | RFA-8: Implement search function to the Planets list   |
| 0:20 - 0:30      | RFA-4: List all Species                                |
| 0:20 - 0:30      | RFA-3: List all Vehicles                               |
| 0:20 - 0:30      | RFA-2: List all People                                 |
| 0:40             | RFA-1: Final styling changes                           |
| 0:20             | RFA-1: Readme changes                                  |
| 2:30             | RFA-7: Retrieve homeworld for a Species and display in a modal. Other app-wide code consistency changes |
| 1:20             | RFA-7: Retrieve homeworld for a Person and display in a modal. Other app-wide code consistency changes |
| 0:20             | RFA-1: More code consistency changes and attempt to resolve  console errors |

## Notes

- RFA-7 & RFA-6 are not implemented as of yet. As I got a comment asking for best effort at a reasonable time, I believe the current code demonstrates my skillset.
- I used Material UI to help with implementing the UI in a mobile first manner. The Sass code included is basic. Advances features of SASS like variables and mixins will take time and more planning.
- Nevertheless, My personal approach is that if Material UI, i.e make components that are styled mobile first and use them throughout the app so that minimum styling is required in individual components.
- Testing would be a nice to have but is not implemented with in this project.
- Perofessionally, I ahve used Redux with Thunk and Saga. Saga is more well rounded but is overkill for this project which is why Redux thunk was used.
- React Context is not a replacement for a Redux middleware like Thunk. It is more like a data and logic teleportation tool. It is a pitty I ran into issues when I tired to use it this time.
