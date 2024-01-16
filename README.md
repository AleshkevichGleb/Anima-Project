# Anima

This project is an online store of stone products.

## Technologies used

* ReactJS
* CSS3
* HTML5
* Redux

## Libraries

* "@reduxjs/toolkit": "^1.9.5",
* "@testing-library/jest-dom": "^5.16.5",
* "@testing-library/react": "^13.4.0",
* "@testing-library/user-event": "^13.5.0",
* "axios": "^1.4.0",
* "nuka-carousel": "^6.0.3",
* "react": "^18.2.0",
* "react-dom": "^18.2.0",
* "react-redux": "^8.1.1",
* "react-router-dom": "^6.13.0",
* "react-scripts": "5.0.1",
* "redux": "^4.2.1",
* "redux-saga": "^1.2.3",
* "sass": "^1.63.6",
* "web-vitals": "^2.1.4"

## Structure of the project

In the src folder you will find the entire structure of the project, then the paths will be indicated relative to this folder. 
* The "assets" folder contains fonts and pictures.
* The "common" folder contains small components that are reused inside other components (for example, a button or a title).
* The "components" folder contains all the components of the project.
* The "data" folder contains all the data that is used in the project (some imitation of the back)
* The "hooks" folder contains custom hooks.
* The "pages" folder contains project pages, inside which components from the "components" and "common" folders are already called
* The "reducers" folder contains the store.js, which combines slices (reduxjs/toolkit) for working with data and queries

### Outside the folders are "index.js" (input point to the project) and App.js, which is called inside index.js and calls some code(components) inside itself

## About code

The project is written using ReactJS technology. 
The BrowserRouter (npm install react-router-dom) is used to navigate through the pages.
The statemanager is Redux(npm -i redux), data is entered into slices - createSlice (npm -i @reduxjs/toolkit), redux-saga (npm -i redux-saga) is used to work with queries.

## Project Launch

**1. Clone the repository to your PC:**
### git clone https://github.com/AleshkevichGleb/Anima-Project.git
&nbsp;

**2. Go into the project:**
### cd Anima
&nbsp;

**3. Сonnect all dependencies:**
### npm install
&nbsp;

**4. Run project:**
### npm start
&nbsp;

### link: https://anima-fc099.firebaseapp.com

## Pages

* Home: 
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/db5ac9e6-d82d-4ee6-a8e1-9f346b671ddb)

* Products:
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/bd1e1bbe-c6c1-418d-9c82-c49c6b0dd2cb)

* Product (Product/id-product): 
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/faf2186e-2ce3-45e9-8bca-ff5db686a840)

* Basket
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/1e8dc171-a690-4b7b-a5e4-83902e898d03)

* Order: 
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/52c452e2-6333-4993-86c7-c03abca36817)
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/d0926ea1-b83e-4897-a2db-0315893b3e90)

* FAQ
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/d84dd9b3-ddec-427f-9c8a-bfb3dc248bf8)

* Error (invalid url)
![image](https://github.com/AleshkevichGleb/Anima-Project/assets/122697274/56420b31-3d30-4aeb-9f49-043b9828e104)




