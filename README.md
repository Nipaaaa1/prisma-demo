# A simple CRUD project with TypeScript + Prisma + Express + Supabase

This is an API project that I made when I was learning **Prisma**. I'm using Supabase (postgres) as the database but you could use other databases, [click here to learn more about databases.](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch)


## Prisma Model
This is the **Prisma** Model that I use for this project:
```
model User {
  id String @id @default(uuid())
  name String
  email String @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

`id`: Is the primary key in uuid, generated automatically.<br>
`name`: Is a String.<br>
`email`: Is a String, each email must be unique.<br>
`createdAt`: Is a DateTime, generated automatically.<br>
`updatedAt`: Is a DateTime, generated automatically and updated when a record is updated.

## API Endpoints
There's several endpoint in this project.

### `GET /api/users/`
When you create a `GET` request on this endpoint. You will get all the data on user table in JSON format.

Response example:
```js
{
    data: [
    {
        "id": "e7638936-dea0-4363-8c97-085118a7a8e6",
        "name": "Devan",
        "email": "justdevan1st@gmail.com",
        "createdAt": "2024-04-22T09:34:30.774Z",
        "updatedAt": "2024-04-22T09:34:30.774Z"
    },
    {
        "id": "d438f94e-763c-4a70-b313-f59eb2abc96e",
        "name": "udin",
        "email": "mangudin321@gmail.com",
        "createdAt": "2024-04-22T09:49:56.002Z",
        "updatedAt": "2024-04-22T09:49:56.002Z"
    }
  ]
}
```

### `GET /api/users/:id`
When you create a `GET` request on this endpoint. You will get the data on user table based on `id` from params in JSON format.

Request URL example: `https://localhost:3000/api/users/e7638936-dea0-4363-8c97-085118a7a8e6`

Response example:
```js
{
    data: {
        "id": "e7638936-dea0-4363-8c97-085118a7a8e6",
        "name": "Devan",
        "email": "justdevan1st@gmail.com",
        "createdAt": "2024-04-22T09:34:30.774Z",
        "updatedAt": "2024-04-22T09:34:30.774Z"
    }
}
```

### `POST /api/users/`
When you create a `POST` request on this endpoint. You will create a new record on User table and get a Response in JSON.

Request Body example:
```js
{
    "name": "jamal",
    "email": "thejamal@gmail.com"
}
```

Response example:
```js
{
    data: {
        "id": "0aa02af2-2939-4ab8-b53b-67c5667fc881",
        "name": "jamal",
        "email": "thejamal@gmail.com",
        "createdAt": "2024-04-22T10:56:47.760Z",
        "updatedAt": "2024-04-22T10:56:47.760Z"
    }
}
```

### `PUT /api/users/:id`
When you create a `PUT` request on this endpoint. You will update a record on User table based on `id` from params and get a Response in JSON.

Request URL example: `https://localhost:3000/api/users/0aa02af2-2939-4ab8-b53b-67c5667fc881`

Request Body example:
```js
{
    "name": "jamaludin",
}
```

Response example:
```js
{
    "data": {
        "id": "0aa02af2-2939-4ab8-b53b-67c5667fc881",
        "name": "jamaludin",
        "email": "thejamal@gmail.com",
        "createdAt": "2024-04-22T10:56:47.760Z",
        "updatedAt": "2024-04-22T11:04:26.054Z"
    }
}
```

### `DELETE /api/users/:id`
When you create a `DELETE` request on this endpoint. You will delete a record on User table based on `id` from params and get a Response in JSON.

Request URL example: `https://localhost:3000/api/users/0aa02af2-2939-4ab8-b53b-67c5667fc881`

Response example:
```js
{
    "data": {
        "id": "0aa02af2-2939-4ab8-b53b-67c5667fc881",
        "name": "jamaludin",
        "email": "thejamal@gmail.com",
        "createdAt": "2024-04-22T10:56:47.760Z",
        "updatedAt": "2024-04-22T11:04:26.054Z"
    }
}
```
