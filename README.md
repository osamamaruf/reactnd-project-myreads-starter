# MyReads Project

This project has been made by using the starter template provided by Udacity for the React Fundamentals course. The project is a virtual library in which the user can save books in the following categories :
1) Currently Reading
2) Want to Read
3) Read

Additionaly the user can search an online repository to add books to the library under the above mentioned categories.


## TL;DR
* Virtual Library with books under 3 heads
* More can be imported via search repository
* Use `npm install` and `npm start` to view
* Project has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)


##Installation

* project dependencies can be installed with `npm install`
* to start the development server run `npm start`


## Backend Server

The backend server has been provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the exposed endpoints. They are:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
