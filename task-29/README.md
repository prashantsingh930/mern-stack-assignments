# Custom Hook Assignment - `useFetch`

## Description

This project demonstrates the implementation of a reusable custom React hook named `useFetch`. The hook abstracts the API fetching logic, making it reusable for any API endpoint by simply passing the required URL.

## API Used

The Cat API

Endpoint:

text
https://api.thecatapi.com/v1/images/search?limit=200


The API requires an API key, which is passed through the request header using an environment variable.

text
VITE_CAT_API_KEY=YOUR_API_KEY


## How to Use

Call the hook by passing the API URL:

javascript
const { data, isLoading, error } = useFetch(API_URL);


The hook returns:

* `data` – Fetched API response.
* `isLoading` – Indicates whether the request is in progress.
* `error` – Contains the error message if the request fails.

## Features

* Reusable custom hook (`useFetch`)
* Fetches data from any API URL
* Loading state management
* Error handling
* Displays fetched data in card format

## Technologies Used

* React
* JavaScript
* Fetch API
* Vite
* Tailwind CSS
