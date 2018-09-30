# jest_POC

##https://www.npmjs.com/package/axios

##https://jestjs.io/docs/en/getting-started.html

##https://jestjs.io/docs/en/expect#expectvalue


# [1.]axios DOC

## Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](http://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

## Installing

Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using cdn:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## Example

Performing a `GET` request

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **NOTE:** `async/await` is part of ECMAScript 2017 and is not supported in Internet
> Explorer and older browsers, so use with caution.

Performing a `POST` request

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Performing multiple concurrent requests

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```

## axios API

Requests can be made by passing the relevant config to `axios`.

##### axios(config)

```js
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// GET request for remote image
axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// Send a GET request (default method)
axios('/user/12345');
```

### Request method aliases

For convenience aliases have been provided for all supported request methods.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### NOTE
When using the alias methods `url`, `method`, and `data` pro



# [2.]Jest DOC

<h1 align="center">
  <img src="http://dp.hanlon.io/313y3u2D0p38/jest.png" height="150" width="150"/>
  <p align="center">Jest</p>
  <p align="center" style="font-size: 0.5em">🃏 Delightful JavaScript Testing</p>
</h1>

**🏃🏽 Instant Feedback**: Fast interactive watch mode runs only test files related to changed files and is optimized to give signal quickly.

## Getting Started

<!-- generated_getting_started_start -->

Install Jest using [`yarn`](https://yarnpkg.com/en/package/jest):

```bash
yarn add --dev jest
```

Or via [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev jest
```

The minimum supported Node version is `v6.0.0` by default. If you need to support Node 4, refer to the [Compatibility issues](https://jestjs.io/docs/en/troubleshooting#compatibility-issues) section.

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a `sum.js` file:

```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Then, create a file named `sum.test.js`. This will contain our actual test:

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, run `yarn test` and Jest will print this message:

```bash
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

**You just successfully wrote your first test using Jest!**

This test used `expect` and `toBe` to test that two values were exactly identical. To learn about the other things that Jest can test, see [Using Matchers](https://jestjs.io/docs/using-matchers).

## Running from command line

You can run Jest directly from the CLI (if it's globally available in your `PATH`, e.g. by `yarn global add jest`) with variety of useful options.

Here's how to run Jest on files matching `my-test`, using `config.json` as a configuration file and display a native OS notification after the run:

```bash
jest my-test --notify --config=config.json
```

If you'd like to learn more about running `jest` through the command line, take a look at the [Jest CLI Options](https://jestjs.io/docs/cli) page.

## Additional Configuration

### Using Babel

[Babel](http://babeljs.io/) is automatically handled by Jest using `babel-jest`. You don't need install anything extra for using Babel.

> Note: If you are using Babel version 7 then you need to install `babel-jest`, `babel-core@^7.0.0-bridge.0` and `@babel/core` with the following command:
>
> ```bash
> yarn add --dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime
> ```

Don't forget to add a [`.babelrc`](https://babeljs.io/docs/usage/babelrc/) file in your project's root folder. For example, if you are using ES6 and [React.js](https://reactjs.org) with the [`babel-preset-env`](https://babeljs.io/docs/plugins/preset-env/) and [`babel-preset-react`](https://babeljs.io/docs/plugins/preset-react/) presets:

```json
{
  "presets": ["env", "react"]
}
```

You are now set up to use all ES6 features and React specific syntax.

> Note: If you are using a more complicated Babel configuration, using Babel's `env` option, keep in mind that Jest will automatically define `NODE_ENV` as `test`. It will not use `development` section like Babel does by default when no `NODE_ENV` is set.

> Note: If you've turned off transpilation of ES modules with the option `{ "modules": false }`, you have to make sure to turn this on in your test environment.

```json
{
  "presets": [["env", {"modules": false}], "react"],
  "env": {
    "test": {
      "presets": [["env"], "react"]
    }
  }
}
```

> Note: `babel-jest` is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the `transform` configuration option:

```json
// package.json
{
  "jest": {
    "transform": {}
  }
}
```

### Using webpack

Jest can be used in projects that use [webpack](https://webpack.js.org/) to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools. Refer to the [webpack guide](docs/Webpack.md) to get started.

### Using TypeScript

To use TypeScript in your tests you can use [ts-jest](https://github.com/kulshekhar/ts-jest).

<!-- generated_getting_started_end -->

## Documentation

Learn more about using [Jest on the official site!](https://jestjs.io)

- [Getting Started](https://jestjs.io/docs/en/getting-started)
- [Guides](https://jestjs.io/docs/en/snapshot-testing)
- [API Reference](https://jestjs.io/docs/en/api)
- [Configuring Jest](https://jestjs.io/docs/en/configuration)
