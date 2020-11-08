# workout-tracker

## Description 

This project was my first experience with MongoDB. As a developer, I worked on the backend, primarily the routes and the modules. The app tracks your exercises and puts them in an accessible format so that you can add activities to your workout and see your progression over time. The way this is done is by dynamically saving your training in the database through restful routes; whenever you submit a workout, it will keep it and so that you can add additional exercises that you have accomplished to the activity. On the dashboard page, all your workout data will be displayed in graphs and charts in order to track your progress.


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
   
## Installation

The installation of this project is to click on the green code button in the top right corner. Then you can copy and paste the code via ssh or by downloading a zip file. Once you have downloaded the file there are a couple of things that must be downloaded in order for this application to run properly. The first is node.js once this is downloaded open up the terminal and navigate to the file that this project is saved in. Then run the code:
npm i 
This should download express, morgan and mongoose. Then all that is left to do is run the command:
node server.js 
in the termnal and then go to the browser and type in http://localhost:3000. or see the deployed heroku link [heroku link](https://blooming-reef-17110.herokuapp.com)


## Usage 

The usage of this application is to keep track of what exercises you do in a given workout. The database has a mongoose schema that takes in the day you worked out, the total time, the number of sets, reps, and the cumulative total time and distance covered during the workout. The deployed link is viewable on Heroku in the link below.

[heroku link](https://blooming-reef-17110.herokuapp.com)


                            Demo

![demo](readme-img/giphy.gif)

                            Model

![Model](readme-img/model.png)

                            Routes

![Rotes](readme-img/routes.png)

   
## Credits

Third party applications and instruction was provided by the University of California Berkeley' full stack Coding Bootcamp program as well as the utilization of node.js, express, mongoose, morgan and heroku.  

[UCB Coding Bootcamp](https://bootcamp.berkeley.edu/coding/)   

[Node.js](https://https://nodejs.org/en/)   

[Express](https://expressjs.com/) 

[Morgan](https://handlebarsjs.com/)

[Mongoose](https://www.mysql.com/)  

[heroku](https://www.heroku.com/free)   

## License

 MIT

## Badges

![badmath](https://img.shields.io/github/issues/hondahelix/workout-tracker)
![badmath](https://img.shields.io/github/forks/hondahelix/workout-tracker)
![badmath](https://img.shields.io/github/stars/hondahelix/workout-tracker)
![badmath](https://img.shields.io/github/license/hondahelix/workout-tracker)

## Contact

[My Github](https://github.com/hondahelix) 

[My portfolio](https://nameless-castle-45341.herokuapp.com)