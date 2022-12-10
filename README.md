# Introduction Summary: 
The product we have built is an app called iLost. iLost is an app that allows users to post items that have been lost and connect with others to relocate their lost items. It provides users with a reliable place to turn to. Our search bar feature that filters posts for an easy look-up and the ability to upload pictures of the item helps users find their lost items fast. Our app is a better alternative to existing technical and non-technical solutions because it is much more accessible and specifically focuses on lost items for UIUC students.

# Technical Architecture: 
The frontend of iLost deals with all user interactions and what the user sees on the website page. Using React for the frontend, we included features for displaying existing posts, a working search bar, and the function to upload a new post detailing a lost item found. The frontend is coded in JavaScript for React, the website structure is built partly with HTML, and the styling is coded in CSS. We used the ReactJS library to implement most frontend features. All of these features are supported by our Flask backend written in Python, which handles and stores the data.

The frontend and backend interact through REST API requests, and we used GET and POST requests to fetch and store data between the frontend and the backend mock database.

# Reproducible Installation Instructions: 
Install Python: https://www.python.org/downloads/

Install Node.JS from website: https://nodejs.org/en/download/ 

Install yarn package manager: Run ‘npm install --global yarn’

Use git clone with the https link in the project directory

## To run program:

Git pull project from Github

In a terminal, navigate to the directory lostandfound and run ‘yarn start-api’

Open a new terminal in the same directory and run ‘yarn start’

Access website at localhost:3000

# Group Members & Roles: 
Full Stack Developers: Natalie Zhou, Aditi Shah, Apoorva Sannasi, Jay Wagh

