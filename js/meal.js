
const meal = (search) => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = (meals) => {

   
    // console.log(meals)

    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML=``
    meals.forEach(element => {
        console.log(element.idMeal)

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="detailsMeal(${element.idMeal})"class="card h-100">
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">${element.strInstructions.slice(0 ,250)}</p>
        </div>
      </div>
        `
        mealsContainer.appendChild(div)
       
    });
}

function searchFood() {
    const searchField= document.getElementById('search-field')
    const searchItem  = searchField.value
    searchField.value=''
    

    if (searchItem==''){
        alert ('Please Enter Your Food')
    }
    else
    {
        meal(searchItem)
    }
     
}


const detailsMeal = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
     
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
    
}

const displayMealDetail = (meal) =>{
    console.log(meal)

    const divDetail = document.getElementById('details-meal')

    divDetail.innerHTML = `
    <div class="card container" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h4 class="card-text">${meal.strMeal}</h4>
                  <blockquote>${meal.strInstructions.slice(0,200)}</blockquote>
                </div>
              </div>
              `
}

const showOneDetail = () => {
    const divDetail = document.getElementById('details-meal')
    divDetail.innerHTML = ``
}

