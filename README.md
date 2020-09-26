# api-testing-cucumber-supertest-chai
Testing Trello API using CucumberJS, Supertest, FakerJS, ChaiJS and Page Objects

## Run
In order to run, you need
 - setup initial Data: Board and List ids (vide //TODO section) figuring it out how to generate everything in the `BeforeAll` hook
 - setup your environment with API and Token provided by Trello

## //TODO
- Remove data dependency from
  - hooks.js
  - cardCreation.feature
  - cardUpdate.feature