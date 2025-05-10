const loadData = () => {

    const searchText = document.getElementById("search-box").value;

    if (searchText.length != 1) return;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
        .then((res) => res.json())
        .then((data) => displayData(data.meals))
        .catch((err) => {
            console.error('Fetch error:', err);
        });
};

const displayMealCount = (data) => {
    const mealCount = document.getElementById("total-meals");
    mealCount.innerHTML = `
    <h1 class="text-center">Total Meals: <span class="text-danger">${data.length}</span></h1>
    `;
};

const displayData = (data) => {

    displayMealCount(data);
    
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML = "";

    data.forEach((meal) => {
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
        <img class="img" src=${meal.strMealThumb} alt="">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions.slice(0, 50)}</p>
        <button onclick="displayDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Details
        </button>
        `
        mealsContainer.appendChild(card);
    });
};

const displayDetails = (id) => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {

            const details = document.getElementById("modal-body");

            if (!data.meals) {
                details.innerHTML = `
                <p><b>Erro:</b> No meal data found</p>;
                return;
                `;
            }
            details.innerHTML = `
            <p><b>Meal Name:</b> ${data.meals[0].strMeal} </p>
            <p><b>Category:</b> ${data.meals[0].strCategory} </p>
            <p><b>Area:</b> ${data.meals[0].strArea} </p>
            <p><b>Instructions:</b> ${data.meals[0].strInstructions} </p>
        `;
        })
        .catch((err) => {
            const details = document.getElementById("modal-body");
        details.innerHTML = `<p><b>Error fetching meal details:</b> ${err.message}</p>`;
        console.error('Fetch error:', err);
        });
};