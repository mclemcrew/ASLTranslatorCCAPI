# CanonApiProject

This project was designed for the Canon CCAPI Contest 2019.  All props to shekit for the incredible utilization of TensorFlow for gesture recognition.  You can see his project [here](https://github.com/shekit/alexa-sign-language-translator).

Forking from his project, I added the ability to capture pictures and use them in the KNN dataset rather than always having to use the video stream in order to gather a training set.  You will have to make a change in the aslTS.js file and point to the server that you want to download the pictures from.  There are some CORS and CROB issues that are addressed by running Chrome in an insecure way. On Mac that boils down to running: `open -a Google\ Chrome --args --disable-web-security --user-data-dir` in the terminal.

## Running the Project

In order to start this project, run `npm install` in your terminal to download the dependencies.  After downloading the dependencies, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
