![Red-X](/client/public/apple-touch-icon.png)

---

## **Table of Contents:**
1. [Introduction](#introduction)
2. [Description](#description)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Contributing](#contributing)
---
## Introduction
![Homepage](/client/public/Homepage.png)
Red-X is a program inspired to bring U.S. Air Force and Space Force personnel together to bolster intelligence on all on-going digital projects and programming requests. We are dedicated to creating a one-stop shop flow of information on project development in the force. 

## Description
Red-X offers a forum for members to create project requests when they have identified the need for a digital solution. This workspace also provides a space for developers to collaborate on solutions to these real-world problems. 

## Requirements

[Node.js](https://nodejs.org/en/)

[Docker](https://www.docker.com/get-started/)

## Installation
Clone the repository or download the zip file:

``` sh
git clone git@github.com:sjmcclure2/Red-X.git
```

Navigate to the server directory to set up the database and run the server:

``` sh
cd Red-X/server
npm install

# Set server environment
export NODE_ENV='development'

# Start database server Docker container
npm run start-db

# Enter Docker container Bash
npm run view-db
```

``` bash
# Start PostgreSQL CLI; create needed database; exit PostgreSQL
psql -U postgres
```

``` postgresql
CREATE DATABASE red_x;
\q
```

``` bash
# Exit Docker container
exit
```

``` sh
# Create tables and seed database
npx knex migrate:latest
npx knex seed:run

# Start server
npm start
```

In another terminal, navigate to the client directory to start the client:

``` sh
cd Red-X/client
npm install
npm start
```

## Contributing
[Platform One](https://repo1.dso.mil/explore)
