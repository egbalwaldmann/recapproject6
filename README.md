# Lean-Coffee-Board

Welcome almost backend experts. Today you will work with an app with a fully functioning frontend. You will extend it by building a backend. This might include the refactoring of current frontend logic.

The task is separated in 4 smaller parts and one bonus exercise

---

## Task 1: Getting started

- start by using this [template](https://github.com/neuefische/lean-coffee-board-nextjs-template)
- click on `Use this template`, create a new repo and install this repo locally by using `git clone`
  > don't forget to run `npm install` afterwards
- invite your peers as collaborators, if you work in a team

## Task 2: Setting up connection to your database and getting first data (READ)

- create a new database called `lean-coffee-board` and a collection called `cards` on your local MongoDB (MongoDB Compass for instance)
- create a file called `.env.local`. Store an environment variable called `MONGODB_URL` with the connection string provided by MongoDB.

  > ```
  > MONGODB_URL='mongodb://127.0.0.1:27017/><name-of-db>'
  > ```

  Make sure to add the name of your database to the url!

- create a function called `dbConnect`
- write a schema describing the data and create a model
  > Look in the hard coded cards in the project for the data structure
- open the page `pages/index.js`. Insert code into the function `getServerSideProps` to load all cards from the database.

  You might create a service function for data retrieval first.

  Pass all cards as a prop to the index page.

  > you might want to add some hard coded dummy content to your database to check whether the connection works

- set the cards as the initial state for the cardList useState in `pages/index.js`

## Task 3: Adding new cards (CREATE)

- our `Form` currently works in the frontend and our data is not sent to the backend
- create an api-route (something like `/api/card/create`) to be able to create new cards in your backend
- in that route write a handler function that connects to your database and only accepts the method `POST` to create a new card
- if this succeeds, we get a response with `status 201`
- in the `form.js` rewrite the `handleSubmit` function to fetch the API route, with the method `POST`, a header object with `"Content-Type": "application/json"` and the `newCard` as stringified JSON in the body
  [supplying request options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)
  > You need method, headers and body

## Task 4: Delete existing cards (DELETE)

- create a dynamic api-route (something like `/api/card/[id]`) to be able to find a question by it's id and delete it
- in that route write a handler function that connects to your database. It should only accept the method `DELETE` and delete the card with the matching `id`
- if this succeeds, we get a response with `status 200`
- in `pages/index.js` update the `removeCard` function to instead fetch the dynamic api-route with the `id` as a variable parameter, with the method `DELETE`
  [supplying request options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)
  > You only need the http method

## Bonus: Re-render pages after any change

- we want a re-render to happen whenever a change happens in our backend and not have to reload the page manually
- write an api-route (something like `/api/card/index`) to be able to get all cards
- in that route write a handler function that connects to your database and only accepts the method `GET`
- get all cards (you could use the service function you created in Exercise 2) in that api route and return the result as a response with a `status 200` and as JSON
- in your `pages/index.js` write an async function that fetches the newly created api-route
  > You only need the http method
- save the result of this fetch in a variable and set your state variable to the newly fetched data
- call this function in your functions `removeCard` and `handleSubmit`

  
  
-------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# recapproject6
