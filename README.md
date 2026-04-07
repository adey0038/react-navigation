# React Themed Multi-Page Application

## Description

A React web app built with Vite that demonstrates client-side routing,
global state management using the Context API, and dynamic theming.
Users can navigate between multiple pages without reloading the browser
and switch between different visual themes.

## Features

- Client-side routing using BrowserRouter and declarative routes
- Four pages: Home, List, Contact, and 404 Not Found
- Three themes: Forest, Ocean, and Desert
- Theme persistence using sessionStorage
- Global theme management using React Context and a custom hook (useTheme)
- API data fetching from JSONPlaceholder with a loading Spinner
- Reusable components: Nav, Header, and Spinner
- Styled contact form with labels and a submit button
- CSS variables for theming with CSS modules for component styles

## Technologies Used

- React 19
- Vite
- React Router
- JavaScript ES6+
- CSS Modules
- CSS Variables

## How to Run

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL in your browser

## API

Data on the List page is fetched from:
https://jsonplaceholder.typicode.com/posts
