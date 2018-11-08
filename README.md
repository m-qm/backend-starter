# PROJECT MODULE 3

## Description

This backend will provide an API to retreive a list of users, playlists and personal information.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite playlists and create a profile
-  **Login:** As a user I can login to the platform so that I can see my favorite playlists
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add music** As a user I can add a song so that I can share it with the community
-  **See playlists** As a user I can see the playlists

## Backlog

-  **List artists** As a user I want to see a list of artists so that I can get to know them and listen their tracks
-  **Search artists** As a user I want to search artists by name so that I know if it is already in the platform
-  **Filter artists** As a user I want to filter artists by style so that I can discover new talents
-  **Add to favorites** As a user I want to add a artist to favorite so that I can save the artists that I liked the most
-  **See my favorites** As a user I want to see my favorite artists so that I can see the ones I liked the most

User profile:
- see other users profile sand their favorites

# Client

## Routes
- / 
    - shows the homepage
    - renders list of favorites updates (logged)
    - redirects to / if user logged in 
    - renders the signup form (with flash msg)

- /auth/signup
    - redirects to / if user logged in / not 2 fields 
    - body:
        - username
        - password

- /auth/login
    - redirects to / if user logged in
    - renders the login form (with flash msg)

- /playlists - playlist list
- /playlist/create - create a playlist
- /playlist/favorite - favorite a playlist
- /playlist/:id - playlist detail
- /profile - my details and favorite playlists
- /profile/edit
- 404



## Pages

- Home Page 
- Sign in Page 
- Log in Page 
- Discover List Page (/playlists)
- Playlist Create 
- Playlist Detail Page 
- My Profile Page 
- 404 Page 

## Components

- Playlist Card component
  - Props: 
  - State:
- Search component
  - Props:
  - State:
- Navbar component
  - Props:
  - State:
- Filter component
  - Props:
  - State:
- Profile
  - Props:
  - State:
- Edit Playlist Form
- Edit Profile Form
- Sign up Form


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Playlist Service
  - Playlist.list()
  - Playlist.create(data)
  - Playlist.detail(id)
  - Playlist.addFavorite(id)
  - Playlist.removeFavorite(id)   

# Server
## API Endpoints/Backend Routes
### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|


### Playlist
|Method|Route|Functionality|
|---|---|---|
|GET| api/playlists | Get all playlists from logged in user (Id from session - Populate playlists id )|
|POST| api/playlists| Create new playlist (Body: title)
|PUT| api/playlists/:id| Edit playlist (Body id, title)
|DELETE| api/playlists/:id| Delete playlist and all notes (Body: id playlist)|
|GET|api/playlists/:id| Get a playlist (body: id, title, url)


### profile
|Method|Route|Functionality|
|---|---|---|
|GET | api/user/:id| Get info from currentUser in frontend| Profile
|PUT|api/user/:id|Edit current user info|


## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Playlist>]
city - String // required
styles - ENUM
```

Playlist model

```
owner: ObjectID ref user
creator - ObjectID<User> // required
title - String // required
style - ENUM
url - String
```

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Backend Link](http://heroku.com)
[Deploy Frontend Link](xxxx)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
