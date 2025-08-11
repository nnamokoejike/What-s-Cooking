What's Cooking: A Recipe Keeper

This is a simple, single-page web application for creating, managing, and viewing your favorite recipes. It's a hands-on project designed to reinforce fundamental web development skills using vanilla JavaScript, HTML, and CSS.

💡 Features
Add Recipes: Users can input a recipe's name, ingredients, steps, and an optional image URL through a clean, intuitive form.

View Recipes: Added recipes are displayed dynamically on the page as styled cards, providing an organized and visually appealing list.

Delete Recipes: Each recipe card includes a "Delete" button, allowing users to easily remove recipes they no longer want.

Persistent Storage: Recipes are saved to the browser's Local Storage, ensuring that all data persists even after the user closes and reopens the browser.

🚀 How It's Built
The application is built with core web technologies, without any external libraries or frameworks.

HTML: Provides the foundational structure of the application, including the main title, the input form, and a container for displaying recipes.

CSS: Styles the application to be visually appealing and user-friendly. It uses Flexbox and CSS Grid for layout, ensuring a responsive design.

JavaScript: Handles all the interactivity, including:

Manipulating the DOM to dynamically create and display recipe cards.

Handling user events such as form submissions and button clicks.

Managing data in a JavaScript array.

Interacting with the Local Storage API to save and load recipes.

📂 Project Structure
The project is organized into three main files:

recipes.html: The main HTML file for the application.

styles.css: The CSS file for styling the app's layout and components.

script.js: The JavaScript file containing all the application logic.