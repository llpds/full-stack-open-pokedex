# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

ex 11.10 - 11.12
  added two branches for deployment (the name of the branch corresponds to the service)
    fly
    render  (render.com -> settings -> branch: render)

ex 11.13-11.14
  at this moment
    pipeline on:puah:branches: render

    next time try to change main:
    next time try to change main that main and render will be different and deploy it when on site branch setting: render and on pipeline: main. and watch what happened

    провел тест
      залил конвеер 12r
      пулл реквест с главной веткой
      залил конвеер 13r
      работа с пулл реквестом, в котором оказались данные с 13r, неожиданное поведение