//use your own API here
const YOUR_APP_ID = "YOUR_APP_ID";
const YOUR_API_KEY = "YOUR_API_KEY";

const dish = document.querySelector(".dish");

const distList = [
  "Avocado",
  "Watercress Sandwich",
  "Flan",
  "Calamari",
  "Raspberry Lemon Meringue Pie",
  "Baked Potato Soup",
  "Gallo Pinto",
  "Crab Rangoon",
  "Crêpe Suzette",
  "Pico De Gallo",
  "Salmon Pasta Bake",
  "Cucumber Sandwiches",
  "Caramel Latte",
  "Lemon Chicken",
  "Saltine Crackers",
  "Peanut Butter",
  "English Breakfast",
  "Chorizo Pizza",
  "Chicken Waffle",
  "Sausage, Peppers and Onions on a Hoagie",
  "Fried Green Tomatoes",
  "Cassoulet",
  "Blueberry Cream Cheese French Toast Casserole",
  "Snickerdoodles",
  "Dutch Baby Pancake",
  "Roast Turkey and Stuffing",
  "Rueben Sandwich",
  "Lemon Cookies",
  "Strawberry Rhubarb Pie",
  "Bacon Wrapped Pineapple",
  "Marzipan Dates",
  "Pistachio Muffin",
  "Spaghetti Bolognese",
  "Sugar Cane",
  "Potato Cake",
  "Garlic Knots",
  "Gazpacho",
  "Huckleberry Ice Cream",
  "Gulab Jamun",
  "Hibiscus Tea",
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Function call random dish
dishA = distList[randomNumber(1, 10)];
dishB = distList[randomNumber(11, 20)];
dishC = distList[randomNumber(21, 30)];
dishD = distList[randomNumber(31, 40)];

dish.innerHTML = `
<p>
<button class="badge-pill btn-warning" onclick="quickTag(dishA)">${dishA}</button>
<button class="badge-pill btn-dark mr-2 ml-2" onclick="quickTag(dishB)" >${dishB}</button>
<button class="badge-pill btn-success" onclick="quickTag(dishC)">${dishC}</button>
<button class="badge-pill btn-primary ml-2" onclick="quickTag(dishD)">${dishD}</button>
</p>
`;

const searchForm = document.querySelector(".searchForm");
const inputSearchForm = document.querySelector(".inputSearchForm");

function quickTag(num) {
  inputSearchForm.value = num;
}
// Api url and key
const apiId = "&app_id=" + YOUR_APP_ID;
const apiKey = "&app_key=" + YOUR_API_KEY;
const api_base_url = "https://api.edamam.com/search?q=";

// search form event listener
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = inputSearchForm.value;
  // collecting input value from form
  fetchRecipeApiData(api_base_url, value);
});

// Async function to fetch data from food API
async function fetchRecipeApiData(url, foodItem) {
  try {
    const api = await fetch(url + foodItem + apiId + apiKey);
    const api_obj = await api.json();
    //exporting api data to following function
    const foodData = api_obj.hits;
    console.log(foodData);
    foodCards(foodData);
  } catch {
    console.log("Api error occured");
  }
}
const foodContent = document.querySelector(".foodContent");
const foodStore = document.querySelector(".foodStore");
// function to create bootstrap styling for food i cards
function foodCards(food) {
  var dynamic = document.querySelector(".row");
  i = food.length - 1;

  for (i; i >= 0; i--) {
    var fetch = document.querySelector(".row").innerHTML;

    const foodName = food[i].recipe.label;
    let foodType =
      food[i].recipe.cuisineType !== undefined
        ? food[i].recipe.cuisineType[0]
        : "unknown";

    const foodCuisine = foodType.charAt(0).toUpperCase() + foodType.slice(1);
    const foodImage = food[i].recipe.image;
    const foodcapacity = food[i].recipe.yield;
    const timeTaken =
      food[i].recipe.totalTime === 0
        ? "1"
        : (food[i].recipe.totalTime / 60).toFixed(1);

    const ingredientList = food[i].recipe.ingredientLines;
    // console.log(ingredientList, ingredientList.length);
    let ingredients = [];
    let step = 1;
    const totalSteps = ingredientList.length;
    for (list = 0; list < ingredientList.length; list++) {
      ingredients +=
        "<b>Step " + step + ":</b> " + ingredientList[list] + "<br>";
      step++;
    }

    // food nutrients

    const foodEnergy =
      food[i].recipe.totalNutrients.ENERC_KCAL.quantity !== undefined
        ? food[i].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)
        : "??";

    const foodCalcium =
      food[i].recipe.totalNutrients.CA.quantity !== undefined
        ? food[i].recipe.totalNutrients.CA.quantity.toFixed(2)
        : "??";

    const foodSugars =
      food[i].recipe.totalNutrients.SUGAR.quantity !== undefined
        ? food[i].recipe.totalNutrients.SUGAR.quantity.toFixed(2)
        : "??";

    const foodVitaminA =
      food[i].recipe.totalNutrients.VITA_RAE.quantity !== undefined
        ? food[i].recipe.totalNutrients.VITA_RAE.quantity.toFixed(2)
        : "??";

    const foodVitaminB =
      food[i].recipe.totalNutrients.VITB12.quantity !== undefined
        ? food[i].recipe.totalNutrients.VITB12.quantity.toFixed(2)
        : "??";

    const foodVitaminC =
      food[i].recipe.totalNutrients.VITC.quantity !== undefined
        ? food[i].recipe.totalNutrients.VITC.quantity.toFixed(2)
        : "??";

    const foodWater =
      food[i].recipe.totalNutrients.WATER.quantity !== undefined
        ? food[i].recipe.totalNutrients.WATER.quantity.toFixed(2)
        : "??";

    dynamic.innerHTML =
      `
    <div class="card col-lg-4 col-md-6 col-sm-12 text-center mt-3 mb-3">
          <h5 class="card-header" role="tab">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapse${i}"
              aria-expanded="true"
              aria-controls="collapse${i}"
              class="d-block"
              id="heading${i}"
            >
              <img
                src="${foodImage}"
                class="img-fluid"
              />
              <h4 class="pt-3">${foodName}</h4>
              <hr />
              <p class="foodLabel">
                <span class="badge badge-success p-1"
                  ><i class="far fa-clock mr-1"></i>${timeTaken} Min</span
                >
                <span class="badge badge-primary p-1 mr-2 ml-2"
                  ><i class="fas fa-user mr-1"></i>${foodcapacity} Unit</span
                >
                <span class="badge badge-warning p-1"
                  ><i class="fas fa-angle-double-up  mr-1"></i>${totalSteps} Step</span
                >
              </p>
            </a>
          </h5>

          <div
            id="collapse${i}"
            class="collapse"
            role="tabpanel"
            aria-labelledby="heading${i}"
          >
            <div class="card-body text-left">
            <h3>Method:</h3>
            ${ingredients}
            <hr>
            <h3>Nutrient:</h3>
            <p>
            <span class="badge badge-pill badge-warning">Energy: ${foodEnergy} kcal</span>
            <span class="badge badge-pill badge-dark mr-2 ml-2">Calcium: ${foodCalcium} mg</span>
            <span class="badge badge-pill badge-light">Sugar: ${foodSugars} g</span>
            <span class="badge badge-pill badge-primary  mr-2 ml-2">Water: ${foodWater} mg</span>
            <span class="badge badge-pill badge-info">Vitamin A: ${foodVitaminA} µg</span>
            <span class="badge badge-pill badge-success  mr-2 ml-2">Vitamin B12: ${foodVitaminB} mg</span>
            <span class="badge badge-pill badge-secondary">Vitamin C: ${foodVitaminC} mg</span>
            </p>
            <hr>
            
            <br>
             <b> Type:</b> <span class="badge badge-pill badge-info">${foodCuisine}</span>
            </div>
          </div>
        </div>` + fetch;
  }
}
