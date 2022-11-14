# Basic CRUD with Firebase

This is just an introductory project to quickly learn the basics of Firebase.
The tutorial I am using is from this link: https://www.youtube.com/watch?v=ey4k6mW9ds4

It only runs with live server

1. Basic config

    - By creating a basic HTML form, at the end of the body tag we'll add type="module" so we can use it as a module where we export and import functions.
    - firebase.js file will have the basic config from the firebase documentation

2. Firestore config

    - At index.js we'll start by adding an eventListener that will take the values from title and description and use the function saveTask imported from our firebase.js
    - Firebase.js has the basic configuration of our database, which was imported as CDN

3. Snapshot

    - We'll use firestore onSnapshot to reload things from database when something happens