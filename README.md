
# Vantage Point 5 Dashboard 

## Overview 
Vantage Point 5 dashboad provides an easy access to Alerts, News Feeds and other statastical data for VP software.

## Setup scripts

### To install UI Project install

Run this following command to install all the dependencies for this UI project.  You may need to setup appropriate npm proxies to install from the npm registry.     
```
npm install
```

### Local development/ debug
Run the following command to debug the application locally.  This will start a webpack local dev server to serve static content.  The dev server is currently configured on port number 9005, which can be changed in pacakge.json start script.
```
npm start
```

### production/uat builds
In order to build this application for production deployment, use the following command to build
```
npm run build
```

The bundle will be created in build directory and can be tested via 

```
npm run serve
```

## Enviornment variables

Development & Production environmnet variables are set in .env & .env.production files

## Pre requsite

npm
node
typescript

## Folder Structure

```
source/
  __tests__/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
    components/
        App.css
        App.tsx
    containers/
    reducers/
    services/
    store/
    index.css
    index.tsx
```

