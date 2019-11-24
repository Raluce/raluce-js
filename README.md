# Raluce JS library

Javascript API (Node & browser) to easily interact with Raluce services.

Raluce JS library primary purpose right now is to let developers obtain information about a specific franchise (e.g catalog, schedule) and to create shopping carts without needing to use the Raluce ordering website.

In future releases, this package will contain a more complete JS API to intereact with all the other Raluce resources.

### Installing

Install the package with npm:

```
npm install @raluce/raluce --save
```

### Usage

Start by importing the package and creating an instance. You will then have access to functions to interact with Raluce.

#### Getting a franchise by id

```Javascript
// Node
var Raluce = require('raluce').default;
var raluce = new Raluce();

var brand = await raluce.getBrandById("brand id");
```

```Typescript
// Typescript
import Raluce from 'raluce';
let raluce = new Raluce();

let brand = await raluce.getBrandById("brand id");
```


#### Getting a franchise by id

```Javascript
// Node
var Raluce = require('raluce').default;
var raluce = new Raluce();

var franchise = await raluce.getFranchiseById("franchise id");
```

```Typescript
// Typescript
import Raluce from 'raluce';
let raluce = new Raluce();

let franchise = await raluce.getFranchiseById("franchise id");
```

#### Creating a shopping cart

```Javascript
// Node
var Raluce = require('raluce').default;
var raluce = new Raluce();

// See docs for shoppingCart schema
var result = await raluce.createShoppingCart(shoppingCart);

console.log(result); // { id: 'shopping cart id', url: 'url to pay for this shopping cart' }
```

```Typescript
// Typescript
import Raluce from 'raluce';
let raluce = new Raluce();

// See docs for shoppingCart schema
let result = await raluce.getFranchiseById(shoppingCart);

console.log(result); // { id: 'shopping cart id', url: 'url to pay for this shopping cart' }
```

## Running unit tests

To run the tests, simply run the following command:


```
npm test
```

## Contributing

If you would like to help, feel free to fork `dev` branch and submit a pull request with your changes. We will review the changes and work with you to get it published.


## Reporting a bug

If you encounter a bug, please submit an issue and we will follow up on it.

> **Note:** If you want to report a security vulnerability, please **do not report it in an issue**, instead email us the details to security@raluce.com. We will work with you in getting the issues solved ASAP.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
