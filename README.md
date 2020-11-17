# hummingbird

A website to start or join a band, made with React and Django.

## Deployed Link

**coming soon**

## Technologies used

- React.js
- JavaScript
- Django
- Python
- Pip
- JSON Webtoken
- Insomnia
- QuickDBD
- NPM
- proxy-middleware
- react-router-dom
- react-select
- SASS
- Bulma
- Git
- Paint 3D

## Process

Day 1: Planning, wireframes, name.

Planning for what kind of website I wanted to make didnt take long as I knew what I wanted to showcase; User relationships, a messaging system and multiple genre/instrument selections on the models. A website where people could post or look for bands to start filled all of this criteria and also would be fun to fill the seed data into. I chose the name Hummingbird because I thought it would be good for the logo and also related to the musical tone of the website. I started with planning for the different relationships between the models I was going to use. I used QuickDBD to draw an example of which relationships would be one to many and which would be many to many. I created the wireframes for how the frontend site would look at this point as well.

Day 2: Building out backend, user models, band models, django admin page data entered.

I started with the part of the backend I had built multiple times before, the users and authentification. I had planned to have two types of users, people starting a band and people joining one, but in the end it made more sense to have people be able do both. I had the instrument and skill levels as enum fields at first but I decided that react-select would make that redundant. Using the django admin page to view and add data to my models helped me a lot with developing the forms I would use on the frontend site, its a really good way to view the data in databases made with it also.

Day 3: basic message and chat models, serializers.

Day 4: Authentification, Start of front end, home page, navbar, register and login.

this lead me to, in addition to

Day 5: profile page, band create page, band list page.

Day 6: Conditional show stuff, hover and logged in.

Day 7: Styling, bug testing and touch ups.

## Challenges and Extra Features

Styling, populating the right serializers and the chat owner/ band owner function.

Adding bands or albums that influenced you, error handling, delete/edit bands, filtering bands, location services (practice rooms near you, filter by location).

## Wins and Key Learnings

Understanding the message to chat to band relationships, having the users edit info, conditional hover genres and the self made logo.