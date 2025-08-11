// script.js

// Reference the essential HTML elements
const recipeForm = document.getElementById('recipe-form');
const recipeNameInput = document.getElementById('recipe-name');
const ingredientsInput = document.getElementById('recipe-ingredients');
const stepsInput = document.getElementById('recipe-steps');
const imageUrlInput = document.getElementById('image-url');
const recipesContainer = document.getElementById('recipes-container');

// Create an array to store recipes
let recipes = [];


// Function to load recipes from local storage and display them
function loadRecipes() {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
        recipes = JSON.parse(storedRecipes);
        recipes.forEach((recipe, index) => {
            displayRecipe(recipe, index);
        });
    }
}

// Call the function to load recipes when the page loads
loadRecipes();


// Function to save the recipes array to local storage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}


// Add a submit event listener to the form
recipeForm.addEventListener('submit', function(event) {
    // 1️⃣ Prevent the default form submission behavior (page refresh)
    event.preventDefault();

    // 2️⃣ Capture the input values
    const enteredRecipeName = recipeNameInput.value;
    const enteredIngredients = ingredientsInput.value;
    const enteredSteps = stepsInput.value;
    const enteredImageUrl = imageUrlInput.value;

    // Check if the recipe name is not empty
    if (enteredRecipeName.trim() === '') {
        alert('Please enter a recipe name!');
        return; // Stop the function if the name is empty
    }

    // 3️⃣ Create a new recipe object and add it to the recipes array
    const newRecipe = {
        name: enteredRecipeName,
        ingredients: enteredIngredients,
        steps: enteredSteps,
        imageUrl: enteredImageUrl,
    };

    recipes.push(newRecipe);

     saveRecipes(); // Save the updated array to local storage

    // Call the display function to show the new recipe on the page
    // We pass the new recipe and its index (which is the last element's index)
    displayRecipe(newRecipe, recipes.length - 1);

    // Optional: Log the recipes array to the console to confirm it's working
    console.log(recipes);

    // 4️⃣ Clear the input fields
    recipeNameInput.value = '';
    ingredientsInput.value = '';
    stepsInput.value = '';
    imageUrlInput.value = '';
});


// Function to display a single recipe on the page
function displayRecipe(recipe, index) {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-card');

    recipeDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <img src="${recipe.imageUrl || 'https://via.placeholder.com/250x150?text=No+Image'}" alt="${recipe.name}" class="recipe-image">
        <h4>Ingredients</h4>
        <p>${recipe.ingredients}</p>
        <h4>Steps</h4>
        <p>${recipe.steps}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
    `;

    // Append the newly created recipe card to the recipes container
    recipesContainer.appendChild(recipeDiv);
}

// Function to remove a recipe from the array and refresh the display
function deleteRecipe(index) {
    // Remove the recipe from the recipes array using the index
    recipes.splice(index, 1);

    saveRecipes(); // Save the updated array to local storage

    // Clear the entire recipes container
    recipesContainer.innerHTML = '';

    // Re-render all recipes from the updated array
    recipes.forEach((recipe, i) => {
        displayRecipe(recipe, i);
    });
}

// Add a click event listener to the recipes container
recipesContainer.addEventListener('click', function(event) {
    // Check if the clicked element has the 'delete-btn' class
    if (event.target.classList.contains('delete-btn')) {
        // Get the index from the data-index attribute
        const index = event.target.dataset.index;
        // Call the deleteRecipe function with the correct index
        deleteRecipe(index);
    }
});