
const meal = (search) => {
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = (meals) => {
   
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML=``
    meals.forEach(element => {

        const div = document.createElement('div')
        
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
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
    console.log('asma'+searchItem+'irfan')

    if (searchItem==''){
        alert ('Please Enter Your Food')
    }
    else
    {
        meal(searchItem)
    }
     
}
