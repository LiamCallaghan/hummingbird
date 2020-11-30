# hummingbird

A website to start or join a band, made with React and Django. Developed over 7 days.

![LandingPage](https://i.imgur.com/XPrzCUu.jpg)

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

Planning for what kind of website I wanted to make didnt take long as I knew what I wanted to showcase; User relationships, a messaging system and multiple genre/instrument selections on the models. A website where people could post or look for bands to start filled all of this criteria and also would be fun to fill the seed data into. I chose the name Hummingbird because I thought it would be good for the logo and also related to the musical tone of the website. I started with planning for the different relationships between the models I was going to use. I used QuickDBD to draw an example of which relationships would be one to many and which would be many to many. I had planned on including comments and previous bands as models, but decided against these over the course of the project.

![QuickDB](https://i.imgur.com/T36yYgK.jpg)

I created the wireframes for how the frontend site would look at this point as well.

I started with the part of the backend I had built multiple times before, the users and authentification. I had planned to have two types of users, people starting a band and people joining one, but in the end it made more sense to have people be able do both. I had the instrument and skill levels as enum fields at first but I decided that react-select would make that redundant.

![UserModel](https://i.imgur.com/AAyYlaA.jpg)

Using the django admin page to view and add data to my models helped me a lot with developing the forms I would use on the frontend site, its a really good way to view the data in databases made with it also. The band model worked out to be pretty straight forward.

![BandModel](https://i.imgur.com/abjT6gn.jpg)

Figuring out the relationship between messages and the chat in which they are stored took a while, with a lot of reading and testing different ways. I ended up going with two one to many relationships, bands can have many chats and chats can have many messages. Adding in the serializers was a continuous process as I figured out which models needed to be populated from others. I accidentaly created a recursive model a few times, although there arent any in this final version.

![UserSerializer](https://i.imgur.com/nulo8fJ.jpg)

Genre and instrument are models that populate onto bands and users respectively. Creating the seed data for these was done again with the django admin page, converting the lists I had made into JSON manually would have been pointless.

Most of the authentification was going to work the same way it had in my other projects, although none of the other projects had django or python in the backend so a lot had to be tweaked. 

![Authentification](https://i.imgur.com/p4Ys5XK.jpg)

At this point I started working on the frontend, getting the basic site set up. The home page, navbar and register/login pages were borrowed from previous work as well with minimal styling for now. This lead me to add extra functionality in to the user model, default profile pictures and fields that could be left blank to name a few. This was so users could register easily, and then flesh out their profile later on.

Creating the main pages for the app took a bit more consideration as this was going to be where people spent most of their time interacting with the site. I started with the band search page as different cards with the bands info on them, but elongating them and forming a list made more sense for people trying to search through them. This looked messy with the genres added, especially with the bands where I added lots of genres, so I changed those to conditionaly show on hover.

![GenreHoverBandList](https://i.imgur.com/khqxHpJ.jpg?1)

For the profile page, I added an edit profile button which leads to an altered registration form. 

![ProfilePage](https://i.imgur.com/Qz6LiOH.jpg)
![ProfileEditForm](https://i.imgur.com/QZRg4PN.jpg)

The profile page also lists bands youve made and chats youve started with bands. The form to create bands was inspired by the form on the django admin app, this made it very easy to decide which inputs to use for what fields. Adding in the react-select functionality made choosing multiple genres easy.

![BandForm](https://i.imgur.com/HudhSOe.jpg)
![React-select](https://i.imgur.com/Tg0gZ5I.jpg)

Making the frontend page for the chats and the messages took a lot of trying different arrangements before I settled on the final version. I couldnt get the usernames to populate here so its just the users ID for now.

![MessagesPage](https://i.imgur.com/WQZ8BoJ.jpg)

I changed the text on the home page to show a different message depending on if the user was signed in or not, that works fine. I used the exact same idea on the bands and chat/message page, to try to show only the chats avaliable (to the owner of the band) or the singular chat the user is involved in/a button to start one (to everybody else). I couldnt figure out why this didnt work in the end, and I had to move on to finish the MVP.

![AlternateHomePage](https://i.imgur.com/9CBFzjh.jpg?1)

For the colour theme I went with the simple combo of purple, black and white. I made the Hummingbird logo in paint 3D and used a royalty free band image for the homepage. In addition to styling, I spent the last day testing the site, looking for bugs and fixing them.

## Challenges and Extra Features

One challenge I faced was getting too caught up in the potential scale of a project like this. If I had nailed my MVP earlier in the process, I think I would have gotten a lot of extra functionality onto the site but as it was, I got caught up making extra features viable and changing plans around. For example, a lot of the time I had set aside to do styling for the site, I ended up using adding extra functionality in instead. In addition to this, I had a lot of trouble figuring out nested and populated serializers. This made getting the right information from the right request tricky at times.

I had planned for lots of extra features for this site, some of which I tried to impliment but ran out of time, and some that I ran out of time to look into. These include the ability to add bands or albums that influenced you, delete or edit bands, filter bands by genre/instrument/location, and view practice rooms near you. Location services would definitely be needed in a publicly avaliable version of this website. There were a lot of styling features I also ran out of time for. One was a slideshow on the homepage with different types of stock bands, or a randomly generated one for each time you visit. After we submitted the project I became aware of some of the websocket options for live chat, I will absolutely add this functionality if I make this site again.

## Wins and Key Learnings

Im pretty proud that my message and chat functionality works considering I wasnt shown how to do this, and the closest thing I had done to it before was comments. Using QuickDB to visualise everything really helped with this. Making the user edit form work was also new to me and came out pretty well. Some of the styling that im happy with include the conditionally showing genres on hover and the logo for the navbar. 

![HoverCode](https://i.imgur.com/Bk5rBWC.jpg)

I learnt a lot from this project, learning how to use python really opened up to me how similar different coding languages are. Behind the syntax, they really are all made of the same building blocks. Learning to manage my time and plan effectively was a key part of this project, and now I feel like Im closer to being able to make those skills work for me in future endeavours. I also learned just how important styling can be for the feel of the website, functionality only counts for so much.