It's a REST full API to practice ajax calls at client side (using CRUD).

[![Build Status](https://travis-ci.org/FJancsi/time-reporting-server.svg?branch=master)](https://travis-ci.org/FJancsi/time-reporting-server)

[![Known Vulnerabilities](https://snyk.io//test/github/FJancsi/time-reporting-server/badge.svg?targetFile=package.json)](https://snyk.io//test/github/FJancsi/time-reporting-server?targetFile=package.json)

Prerequisites:
- nodeJS >= 10
- mongoDB (time_reporting db)

How to run:
- `cd server`
- `npm install`
- `node index.js`

Server run at:
- localhost:3000

REST API:
- localhost:3000/users (GET) -> returns all users
- localhost:3000/user/{id} (GET) -> returns a certain user with id
- lcoalhost:3000/user (POST) [payload] -> saves user
- localhost:3000/user/{id} (PUT) [payload] -> update a certain user
- localhost:3000/user/{id} (DELETE) -> delete a certain user with id
