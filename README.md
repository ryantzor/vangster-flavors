# What's new!
Here are some updates:
__Functionality__: All requirements are met: searchable, filter by: tag, rating, and clear the filter.
__Bonus Features__: Adding styling to buttons with animations, and new background. 

# Todo
__Bonus Features__: I am going to continue working on this project this weekend. I am going to get the 'remove button' working as well as the 'like' button; that way you can remove and favorite your flavors. Lastly, I think it would be really cool to show actual stars for the rating instead of only numbers.

__Cleanup__: Abstract the filter list to it's own react component.
__Cleanup__: Clean up any messy code, I apologize I haven't used react recently so I'm ramping myself up on it as I go.

Thanks!
Ryan


# Full Stack Developer Assignment
Part of the interview process with Vangst requires you to complete this take home assignment.
There are two parts to this assignment, a full stack application, and an API/Data model design document. This repository is a starter for the full stack application.

## Using this project

### Frontend - React
The frontend React code can be found in the `/client` folder. The frontend was created using create-react-app and can be started by running the following command in the root folder of the project.
``` bash 
yarn run:client 
```
This will start the frontend on localhost at port 3000.

### Backend 

You may add your own backend if you would like to use a different language for the new endpoint.

You can start the backend by running the following command
``` bash
yarn run:server
```
This will start the server on port 8080.

The Backend use an in-memory database called LokiJs. Docs on how to use this library can be found here: https://rawgit.com/techfort/LokiJS/master/jsdoc/index.html

# Full Stack App
Welcome to the Flavor Rater App. This application allows you to create and store flavors of ice cream. It also allows you to keep ratings on the flavors so you can remember what flavors you like.

The Flavor rater app is great but it could use more features. Review the user story below and add the defined feature.

__Problem Statement:__ As a user of the Flavor Rater App I need to be able to search and filter my list of flavor so that I can find the flavors I'm looking for quickly.

__Requirements:__  
__When__ I am viewing my list of flavors  
__Then__ I should be able to search by flavor name  
__And__ I should be able to filter by tags  
__And__ I should be able to filter by rating  
__And__ I should be able to clear all filters

This additional functionality will be very valuable for our users, however there is still a lot that can be done. So I would like for you to come up with one other feature or functionality you thing would be beneficial for the user and implement it. This is your chance to show off your strongest skill set. So if you are great a security add additional security, if css is your thing put in some animations. This is your opportunity to show us what you have to offer that might be different from someone else.

__Deliverables:__
- Completed, runnable code
- A readme file containing the following:
  - An explanation of the added feature and why you picked it

#### How To Submit
You can submit your solution by either creating a new branch on this project or you can use this repo as a template to copy it into your personal repo. Either way once you have completed send the link to the branch or repo to the recuiter you have been working with.
