# Phase 3 Project

![gameinvaderdemo](https://user-images.githubusercontent.com/96760206/207422666-523da54f-fac0-47db-b12b-4e3caa125fea.gif)

## Introduction

This is our phase 3 React Project by Joshua Campos, Ismael Aceves, and Sam Ito

The focus of this project is **building a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which will be used
by a separate **React frontend** that interacts with the database via the API.

For our project, we made a Game review site, where users can login, look at games from our server, and leave reviews for games.

For this project, we are able to do the following CRUD actions.
- **Create** a new user review, as well as new user
- **Read** a list of all games, individual games, and reviews for each game by a user.
- **Update** an individual user password
- **Delete** a review or user account.

- Use Active Record to interact with a database.
- Have at least three models with a one-to-many relationship.
- set up the following API routes in Sinatra:
  - create and read actions.
  - full CRUD capability for multiple models
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Implement proper front end state management, updating state using a
  setState function after receiving a response from a POST, PATCH, or DELETE 
  request.
- have separate classes for each of models, and create instance and class methods as necessary. 
- Routes in application (both client side and back end) follow RESTful
  conventions.
