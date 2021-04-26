## how to use it

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
## project file construction
```
--dist // build folder
  |--common
  |  |--js
  |--pageA // each page has one folder
  |  |  |--js
  |  |  |--css
  |  |  |--index.html
  |
--src // source code folder
  |
  |--components // handelbars partial
  |  |--layout
  |  |  |--frontend.hbs
  |  |  |--backend.hbs
  |
  |--pages // your web pages
  |  |--frontend
  |  |  |--js
  |  |  |--scss
  |  |  |--frontpage.hbs
  |  |--backend
  |  |  |--js
  |  |  |--scss
  |  |  |--infighters-settings.hbs
  |
--package.json
--webpack.config.js
```
