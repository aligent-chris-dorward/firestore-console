![alt text](https://image.ibb.co/ev3DQm/icon_firestore_console_128.png "Firestore Console")

## Firestore Console

[firestore-console.com](https://firestore-console.com/). __An easy to use APP which interfaces Firebase Databases and React.__

### Instructions

Install the [Firebase CLI tools](https://firebase.google.com/docs/cli/) and log the CLI into the Firebase account which uses the email address `bntithelpdesk@gmail.com`

```bash
sudo npm install -g firebase-tools
firebase login
```

### Features
* Route protection using `redux-auth-wrapper`
* Data input/validation using `redux-form`
* Async & Sync route loading
* Real CI and Deployment settings (including `prod` and `stage` environments)
* Using different instances of Firebase based on environment

### Getting Started

1. Install dependencies: `npm install`

2. Start Development server: `npm start`

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`
|`start:simple`     |Serves your app at `localhost:3000` without Webpack
|`build`            |Builds the application to ./dist
|`lint`             |
|`lint:fix`         |

[Husky](https://github.com/typicode/husky) is used to enable `prepush` hook capability. The `prepush` script currently runs `eslint`, which will keep you from pushing if there is any lint within your code. If you would like to disable this, remove the `prepush` script from the `package.json`.

### Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications. If you wish to read more about this pattern, please check out this [awesome writeup](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) by [Justin Greenberg](https://github.com/justingreenberg).

```
.
├── build                    # All build-related configuration
│   └── create-config        # Script for building config.js in ci environments
│   └── karma.config.js      # Test configuration for Karma
│   └── webpack.config.js    # Environment-specific configuration files for webpack
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Presentational Components
│   ├── containers           # Global Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── CoreLayout       # Global application layout in which to render routes
│   ├── routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   └── Home             # Fractal route
│   │       ├── index.js     # Route definitions and async split points
│   │       ├── assets       # Assets required to render components
│   │       ├── components   # Presentational React Components
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   │       └── routes **    # Fractal sub-routes (** optional)
│   ├── static               # Static assets
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
├── project.config.js        # Project configuration settings (includes ci settings)
└── tests                    # Unit tests
```

#### Routing
We use `react-router` [route definitions](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

### Testing
To add a unit test, create a `.spec.js` file anywhere inside of `./tests`. Karma and webpack will automatically find these files, and Mocha and Chai will be available within your test without the need to import them.

### Production

Build code before deployment by running `npm run build`. There are multiple options below for types of deployment, if you are unsure, checkout the Firebase section.

#### Deployment

1. Login to [Firebase](firebase.google.com) (or Signup if you don't have an account) and create a new project
2. Install cli: `npm i -g firebase-tools`

#### CI Deploy (recommended)
**Note**: Config for this is located within `travis.yml`
`firebase-ci` has been added to simplify the CI deployment process. All that is required is providing authentication with Firebase:

1. Login: `firebase login:ci` to generate an authentication token (will be used to give Travis-CI rights to deploy on your behalf)
1. Set `FIREBASE_TOKEN` environment variable within Travis-CI environment
1. Run a build on Travis-CI

If you would like to deploy to different Firebase instances for different branches (i.e. `prod`), change `ci` settings within `.firebaserc`.

For more options on CI settings checkout the [firebase-ci docs](https://github.com/prescottprue/firebase-ci)

#### Manual deploy

1. Run `firebase:login`
1. Initialize project with `firebase init` then answer:
  * What file should be used for Database Rules?  -> `database.rules.json`
  * What do you want to use as your public directory? -> `build`
  * Configure as a single-page app (rewrite all urls to /index.html)? -> `Yes`
  * What Firebase project do you want to associate as default?  -> **your Firebase project name**
1. Build Project: `npm run build`
1. Confirm Firebase config by running locally: `firebase serve`
1. Deploy to firebase: `firebase deploy`
**NOTE:** You can use `firebase serve` to test how your application will work when deployed to Firebase, but make sure you run `npm run build` first.
