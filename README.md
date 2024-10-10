Week 9 Assignment: Build a Social Network
Overview
We’ve explored the many benefits of using Next.js for building database-driven, blog-style applications, including its simplified data handling and the ease of creating dynamic routes with the params object. You’ve developed apps that allow post submission, display posts and accept comments.

This week, we've focused on authentication and its role in creating user profiles and associating content with specific users. By combining database-driven functionality with user authentication, you lay the foundation for building a social media application.

Topics
Next.js- 
User authentication using Clerk
Next.js: routing, error handling
Radix UI

Resources

Next.js: Introduction
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Introduction

Next.js: Data Fetching, Caching, and Revalidating
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Data%20Fetching%2C%20Caching%2C%20and%20Revalidating

Clerk: Docs
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Caching%2C%20and%20Revalidating-,Clerk%3A%20Docs,-Clerk%3A%20Next.js

Clerk: Next.js Quick Start
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Clerk%3A%20Next.js%20Quick%20Start

Clerk: Next.js Custom Signup and Sign in Pages
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Clerk%3A%20Next.js%20Custom%20Signup%20and%20Sign%20in%20Pages

Clerk: Next.js Server Actions
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Clerk%3A%20Next.js%20Server%20Actions

Next.js: Route Handlers
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Route%20Handlers

Next.js: Routing Fundamentals
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Routing%20Fundamentals

Next.js: not-found.js
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20not%2Dfound.js

Next.js: error.js
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=not%2Dfound.js-,Next.js%3A%20error.js,-Radix%20UI%3A%20Docs

Radix UI: Docs
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=js%3A%20error.js-,Radix%20UI%3A%20Docs,-Radix%20UI%3A%20Getting

Radix UI: Getting Started
https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Radix%20UI%3A%20Getting%20Started


Instructions

User Stories
🐿️ As a user, I want to sign up and log in securely using Clerk so that I can interact with the app as a user on the site and edit my user profile.
🐿️ As a user, I want to see an error page if I try to visit a user profile that doesn’t exist so that I’m informed about the invalid page.
🐿️ As a user, I want an enhanced user experience with modern UI components, such as using a Radix UI Primitive or a similar library, so that the interface is more intuitive and visually appealing.
🐿️ As a user, I want to create and manage my profile, including adding information like a biography, so that I can personalise my account.
🐿️ As a user, I want to create my posts to be displayed on my profile page so that I can share and manage my content easily.
Requirements
🎯 Set up user sign-up and user login using Clerk.
🎯 Create and display an error page if the user visits a user profile that doesn’t exist.
🎯 Use 1 or more Radix UI Primitive or something similar (e.g. use of another library to enhance UX).
🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).
🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.
How to Deploy
Next.js was developed by Vercel, which is where we’re going to deploy our app, so some of the difficulties faced when deploying are reduced.

Ensure that any data displayed using .map() has a key.
Push everything to GitHub.
Click ‘Add New…’ and then select ‘Project’.
In the ‘Environment Variables’ drop-down menu, add anything from your .env.local file here.
Wait a minute or so, and your website is deployed!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a user, I want to visit other users' profiles after seeing their posts on a global timeline so that I can learn more about them and view their other content.
🐿️ As a user, I want to follow other users so that I can stay updated on their posts and activities.
🐿️ As a user, I want to like other users' posts so that I can show appreciation for content I enjoy.
🐿️ As a user, I want to be prompted to complete my biography if it’s left blank after logging in, ensuring that my profile is complete and informative.
Stretch Requirements
🏹 Allow users to view other profiles directly from posts they see on the global timeline.
🏹 Let users follow each other by establishing a follower and followee relationship between profiles.
🏹 Enable users to like posts by linking their user_id to the liked_post in a junction table.
🏹 Ensure that a user’s biography cannot be left blank. If a user logs in without one, prompt them to add this information.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g YouTube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?


Login/sigup
Profile edit
Protected Routes /posts /profile

