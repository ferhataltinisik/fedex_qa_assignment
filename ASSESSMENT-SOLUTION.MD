# Cypress Test Framework for Star Wars Search Web Application

This framework is an assessment for a QA role sent by FedEx. It is designed based on the Page Object Model pattern and uses the Cypress test framework to test a single web page application - Star Wars Search. The web application is for Star Wars enthusiasts who want to find information about their favorite characters and planets.

## Overview of the Cypress Test Framework
The Cypress test framework is a JavaScript end-to-end testing tool that is used for testing web applications. It supports various types of tests such as unit, integration, and end-to-end tests. Cypress provides a simple and powerful API that allows developers to write tests in JavaScript. Cypress also comes with a built-in test runner, which allows developers to run tests, debug, and see the results.

## Prerequisites
Before running the tests, make sure that you have Node.js installed on your machine. You also need to install Cypress version over 10, and for report generation, the cypress-mochawesome-reporter is required.

## Installation
To install the framework, clone the code from the Git repository. Then, use `npm install` to install the necessary node modules. After that, start the Star Wars app by using the ng serve command.

## Configuration
Test data is kept under the fixtures folder in JSON files. The config file contains environment information, such as the base URL, environment, time-outs, etc.

## Running the tests
To run the framework and create a test report, use the cypress run command. To run the framework in a specific environment, pass the environment as an argument. For example, to run the tests in development environment, use `"cy:run:dev": "cypress run --env configFile=development" `script defined under package.json -> scripts.

## Test Structure
The framework is based on the Page Object Model design pattern. This design pattern allows the separation of page objects and test cases, making tests more maintainable and less brittle.

## Test Results
The test report is generated under the reports folder. To generate test report you can use `npx cypress run`. In case of any test failures, the report shows the details of the failure, along with a screenshot. The cypress-mochawesome-reporter generates a beautiful and interactive HTML report, which makes it easy to understand the test results.

## Conclusion
This Cypress test framework is designed for testing the Star Wars Search web application, using the Page Object Model pattern. The framework provides a simple, powerful, and maintainable way to write end-to-end tests. With its built-in test runner and the cypress-mochawesome-reporter, the framework generates beautiful HTML reports that make it easy to understand the test results.

![Test Report Screenshot](https://drive.google.com/file/d/1154a0FnLQ_xpZ46xV_u-bb_RGdrVHEjj/view?usp=sharing)