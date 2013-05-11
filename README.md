# Developer's guide

## Unit testing

The simplest is to use [karma](http://karma-runner.github.io/‎).
Install it first by npm.

`npm install -g karma`

Then simply run it from command line using script `scripts/test.bat` or `scripts/test.sh`.

## Deployment

Deployment is done via [yeoman](http://yeoman.io) or [grunt](http://gruntjs.com/).
You have to install following things to make it working.

`npm install -g yeoman`
`npm install -g phantomjs`

When you have all required dependencies you can just run:

`yeoman build --force`

and website with minimized css and js will appeear in `dist` directory.

