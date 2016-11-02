## Pre requisites 🗃
1. nodejs >= v6 available at [nodejs.org](https://nodejs.org/en)
1. npm >= v3 (comes bundled with nodejs)

## Let's set everything up! 🔥
1. Clone this repository and run `npm install` to install necessary dependencies
2. Run `npm start` to start local dev server available at [http://localhost:3000/](http://localhost:3000/)

## Spotify Web API info (credentials are not needed, but let's keep them here just in case) 🎷
Client ID: `3e90524132bf46db9db8dc7333a49430`
Client Secret: `e89a0eeee62b42f0803553d7002452b6` (Such secret committed to README, much wow 👀)
Documentation: [https://developer.spotify.com/web-api/](https://developer.spotify.com/web-api/)

## Tasks 🚨
There are 3 TODO comments left within `/src` folder. TASK 1 is essential
for our app to work, as it fetches track data from Spotify that is used throughout
the app. TASK #2 is less crucial, yet without it we will have very poor UX if user
decides to play one song after another. This task ensures that we pause any playing
audio elements on the page before starting a new one. Finally TASK 3 just asks you
to work your magic and make the app responsive, because we live in the world of 📱
