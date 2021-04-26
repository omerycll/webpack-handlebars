# Webpack-5 Handlebars

## How to use it

1. install the dependencies
```
yarn install
```
2. run dev
```
yarn dev
```
then open the browser and link to localhost:8080 to watch your web page

3. run build
```
yarn build
```

## Project file construction
```
--dist // build folder
  |--page // frontend/backend each page has one folder
  |  |  |--js
  |  |  |--css
  |  |  |--index.html
  |
--src // source code folder
  |--assets 
  |	 |--scripts
  |  |	|--backend.js
  |  |	|--frontend.js
  |  |--styles
  |  |	|--backend.scss
  |  |	|--frontend.scss
  |
  |--helpers // handelbars helpers
  |  |--ifCond.js|
  |
  |--components // handelbars partial
  |  |--layout
  |  |  |--frontend.hbs
  |  |  |--backend.hbs
  |
  |--pages // your web pages
  |  |--frontend
  |  |  |--frontpage.hbs
  |  |--backend
  |  |  |--backend.hbs
  |
--package.json
--webpack.config.js
```
