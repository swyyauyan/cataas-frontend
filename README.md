# catass-frontend

A simple Vue project to get the cat from [CATAAS](https://cataas.com/#/).

### Configuration
Please create the `.env` file and add the following variables:
```sh
VUE_APP_BACKEND_HOST = <backend host>
```

### Start the server
    $ npm install
    $ npm start

### Run tests - Unit test with mocha and chai
    $ npm run test:unit

### Run tests - E2E test with cypress
Test it in terminal:
```sh
$ npm run cypress
```

Test it in GUI:
```sh
$ npm run cypress-gui
```