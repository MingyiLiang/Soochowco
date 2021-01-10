# soochow
soochow.co eCommerce website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Startup

The UI depends on a lot of other things being available for it to run correctly.

0. `npm install`
1. `npm run start` to start the UI.


## Available Scripts

In the project directory, you can run:

### `npm run build:dll`

This builds the dll of rarely-changing vendor libraries, which are all bundled into one
file to reduce load on the webpack-dev-server. If you get errors like `TypeError: Cannot set property 'getCurrentStack' of undefined` or 404s on library.dll.js, you need to run this.


### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run unsafe-start`
Runs the app without dependency checks.<br>
Only use this when you are configured to using Storybook.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!



## Styles

The styling for this app is in a package in the `src/styles` directory. If you make changes to the styles, you need
to run `npm run build:css` to rebuild the styles. If you're iterating on the styles, you
can run `npm run start:css` to start a watcher which will recompile when you make changes.

## Storybook

Run `npm install` for first time and then `npm run storybook` if it crashes refer to the README in `.storybook`.
