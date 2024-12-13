
<h1>Week 9 Assignment: Build a Social Network</h1>
<h2>Overview</h2>
<p>We’ve explored the many benefits of using Next.js for building database-driven, blog-style applications, including its simplified data handling and the ease of creating dynamic routes with the params object. You’ve developed apps that allow post submission, display posts and accept comments.</p>

<p>This week, we've focused on authentication and its role in creating user profiles and associating content with specific users. By combining database-driven functionality with user authentication, you lay the foundation for building a social media application.</p>

<h2>Topics</h2>
<p>Next.js- </p>
<p>User authentication using Clerk</p>
<p>Next.js: routing, error handling</p>
<p>Radix UI</p>

<h2>Resources</h2>

<p>Next.js: Introduction</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Introduction</p>
<br />
<p>Next.js: Data Fetching, Caching, and Revalidating</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Data%20Fetching%2C%20Caching%2C%20and%20Revalidating</p>
<br />
<p>Clerk: Docs</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Caching%2C%20and%20Revalidating-,Clerk%3A%20Docs,-Clerk%3A%20Next.js</p>
<br />
<p>Clerk: Next.js Quick Start</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Clerk%3A%20Next.js%20Quick%20Start</p>
<br />
<p>Clerk: Next.js Custom Signup and Sign in Pages</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Clerk%3A%20Next.js%20Custom%20Signup%20and%20Sign%20in%20Pages</p>
<br />
<p>Clerk: Next.js Server Actions</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Clerk%3A%20Next.js%20Server%20Actions</p>
<br />
<p>Next.js: Route Handlers</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Route%20Handlers</p>
<br />
<p>Next.js: Routing Fundamentals</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20Routing%20Fundamentals</p>
<br />
<p>Next.js: not-found.js</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Next.js%3A%20not%2Dfound.js</p>
<br />
<p>Next.js: error.js</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=not%2Dfound.js-,Next.js%3A%20error.js,-Radix%20UI%3A%20Docs</p>
<br />
<p>Radix UI: Docs</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=js%3A%20error.js-,Radix%20UI%3A%20Docs,-Radix%20UI%3A%20Getting</p>
<br />
<p>Radix UI: Getting Started</p>
<p>https://techeducators.moodlecloud.com/mod/assign/view.php?id=3021#:~:text=Radix%20UI%3A%20Getting%20Started</p>
<br />

<h2>Instructions</h2>

<h3>User Stories</h3>
<p>🐿️ As a user, I want to sign up and log in securely using Clerk so that I can interact with the app as a user on the site and edit my user profile.</p>
<p>🐿️ As a user, I want to see an error page if I try to visit a user profile that doesn’t exist so that I’m informed about the invalid page.</p>
<p>🐿️ As a user, I want an enhanced user experience with modern UI components, such as using a Radix UI Primitive or a similar library, so that the interface is more intuitive and visually appealing.</p>
<p>🐿️ As a user, I want to create and manage my profile, including adding information like a biography, so that I can personalise my account.</p>
<p>🐿️ As a user, I want to create my posts to be displayed on my profile page so that I can share and manage my content easily.</p>

<h3>Requirements</h3>
<p>🎯 Set up user sign-up and user login using Clerk.</p>
<p>🎯 Create and display an error page if the user visits a user profile that doesn’t exist.</p>
<p>🎯 Use 1 or more Radix UI Primitive or something similar (e.g. use of another library to enhance UX).</p>
<p>🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]).</p>
<p>🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.</p>

<h3>How to Deploy</h3>
<p>Next.js was developed by Vercel, which is where we’re going to deploy our app, so some of the difficulties faced when deploying are reduced.</p>

<p>Ensure that any data displayed using .map() has a key.</p>
<p>Push everything to GitHub.</p>
<p>Click ‘Add New…’ and then select ‘Project’.</p>
<p>In the ‘Environment Variables’ drop-down menu, add anything from your .env.local file here.</p>
<p>Wait a minute or so, and your website is deployed!</p>
<br/>
<h3>Stretch Goals</h3>
<p>To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.</p>

<p>Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.</p>

<h3>Stretch User Stories</h3>
<p>🐿️ As a user, I want to visit other users' profiles after seeing their posts on a global timeline so that I can learn more about them and view their other content.</p>
<p>🐿️ As a user, I want to follow other users so that I can stay updated on their posts and activities.</p>
<p>🐿️ As a user, I want to like other users' posts so that I can show appreciation for content I enjoy.</p>
<p>🐿️ As a user, I want to be prompted to complete my biography if it’s left blank after logging in, ensuring that my profile is complete and informative.</p>

<h3>Stretch Requirements</h3>

<p>🏹 Allow users to view other profiles directly from posts they see on the global timeline.</p>
<p>🏹 Let users follow each other by establishing a follower and followee relationship between profiles.</p>
<p>🏹 Enable users to like posts by linking their user_id to the liked_post in a junction table.</p>
<p>🏹 Ensure that a user’s biography cannot be left blank. If a user logs in without one, prompt them to add this information.</p>

<h3>Reflection</h3>

<p><bold>Required</bold></p>
<p>🎯 What requirements did you achieve?</p>
<p>🎯 Were there any requirements or goals that you were unable to achieve?</p>
<p>🎯 If so, what was it that you found difficult about these tasks?</p>

<p><bold>Optional</bold></p>
<p>🏹 Feel free to add any other reflections you would like to share about your submission, for example:</p>

<p>Requesting feedback about a specific part of your submission.</p>
<p>What useful external sources helped you complete the assignment (e.g YouTube tutorials)?</p>
<p>What errors or bugs did you encounter while completing your assignment? How did you solve them?</p>
<p>What went really well and what could have gone better?</p>

<br/>
<p><bold>Things to consider</bold></p>
<p>* Login/sigup</p>
<p>* Profile edit</p>
<p>* Protected Routes /posts /profile</p>
<p>* user avatars</p>
<p>* not found page</p>
<p>* when user logs in reroute to change bio</p>

