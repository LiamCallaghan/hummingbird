# hummingbird

A website to start or join a band, made with React and Django. Developed over 7 days.

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

Planning for what kind of website I wanted to make didnt take long as I knew what I wanted to showcase; User relationships, a messaging system and multiple genre/instrument selections on the models. A website where people could post or look for bands to start filled all of this criteria and also would be fun to fill the seed data into. I chose the name Hummingbird because I thought it would be good for the logo and also related to the musical tone of the website. I started with planning for the different relationships between the models I was going to use. I used QuickDBD to draw an example of which relationships would be one to many and which would be many to many. I created the wireframes for how the frontend site would look at this point as well.

![QuickDB](https://i.imgur.com/T36yYgK.jpg)

I started with the part of the backend I had built multiple times before, the users and authentification. I had planned to have two types of users, people starting a band and people joining one, but in the end it made more sense to have people be able do both. I had the instrument and skill levels as enum fields at first but I decided that react-select would make that redundant. Using the django admin page to view and add data to my models helped me a lot with developing the forms I would use on the frontend site, its a really good way to view the data in databases made with it also. The band model worked out to be pretty straight forward.

Figuring out the relationship between messages and the chat in which they are stored took a while, with a lot of reading and testing different ways. I ended up going with two one to many relationships, bands can have many chats and chats can have many messages. Adding in the serializers was a continuous process as I figured out which models needed to be populated from others. I accidentaly created a recursive model a few times, although there arent any in this final version. Genre and instrument are models that populate onto bands and users respectively. Creating the seed data for these was done again with the django admin page, converting the lists I had made into JSON manually would have been pointless.

Most of the authentification was going to work the same way it had in my other projects, although none of the other projects had django or python in the backend so a lot had to be tweaked. At this point I started working on the frontend, getting the basic site set up. The home page, navbar and register/login pages were borrowed from previous work as well with minimal styling for now. This lead me to add extra functionality in to the user model, default profile pictures and fields that could be left blank to name a few. This was so users could register easily, and then flesh out their profile later on.

Creating the main pages for the app took a bit more consideration as this was going to be where people spent most of their time interacting with the site. I started with the band search page as different cards with the bands info on them, but elongating them and forming a list made more sense for people trying to search through them. This looked messy with the genres added, especially with the bands where I added lots of genres, so I changed those to conditionaly show on hover. For the profile page, I added an edit profile button which leads to an altered registration form. The profile page also lists bands youve made and chats youve started with bands. The form to create bands was inspired by the form on the django admin app, this made it very easy to decide which inputs to use for what fields.

I changed the text on the home page to show different text depending on if the user was signed in or not, that works fine. I used the exact same idea on the bands and chat/message page, to try to show only the chats avaliable (to the owner of the band) or the singular chat the user is involved in/a button to start one (to everybody else). I couldnt figure out why this didnt work in the end, and I had to move on to finish the MVP.

For the colour theme I went with the simple combo of purple, black and white. I made the Hummingbird logo in paint 3D and used a royalty free band image for the homepage. In addition to styling, I spent the last day testing the site, looking for bugs and fixing them.

## Challenges and Extra Features

Styling, populating the right serializers and the chat owner/ band owner function.

A lot of the time I had set aside to do styling for the site, I ended up using adding extra functionality in instead.

Adding bands or albums that influenced you, error handling, delete/edit bands, filtering bands, location services (practice rooms near you, filter by location). Slideshow on the homepage with different types of stock bands.

## Wins and Key Learnings

Understanding the message to chat to band relationships, having the users edit info, conditional hover genres and the self made logo.