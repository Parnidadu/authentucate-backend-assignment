# Authenticate BE

Create a REST api to be consumed by a mobile app, which is somewhat similar to various popular apps
which tell you if a number is spam, or allow you to find a person’s name by searching for their phone
number.
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version > 20)
- npm or yarn
- PostgreSQL (or any other database supported by Prisma)

### Installation

1. Clone the repository:
   ```bash
   https://github.com/Parnidadu/authentucate-backend-assignment

   cd authentucate-backend-assignment 

2. npm install or yarn install.

### Database setup

1. Create a PostgreSQL database.

2. Update the database connection URL in the .env file:
```bash 
  DATABASE_URL=postgresql://username:password@localhost:5432/your-database.
  ```

3. Run Prisma Migration
```bash 
npx prisma migrate dev 

or

yarn prisma migrate dev 
```

4. To check for the database 

```bash 
 npx prisma studio 
 ```

### To Run

```bash 
tsc -d
node ./dist/index.js
```

### Endpoints

Document your API endpoints here.

    GET /api/users: Get all users.

    POST /api/users: Create a new user.

    GET /api/contacts: Get all contacts.

    POST /api/contacts: Create a new contact.

    GET /api/search/:query: Search for users and contacts.

collection is also added in this repo.


## Authors

- [@Pranav Mishra](https://www.github.com/parnidadu)


## Screenshots

![App Screenshot](https://github.com/Parnidadu/authentucate-backend-assignment/blob/main/Screenshot%202024-03-04%20at%203.22.38%20PM.png?raw=true)

![App Screenshot](https://github.com/Parnidadu/authentucate-backend-assignment/blob/main/Screenshot%202024-03-04%20at%203.28.27%20PM.png?raw=true)


