// Load the suggestion for Breakfast, Lunch & Dinner
// Below code is loading 2 suggestion for each meal
$(document).ready(function () {
    var curr_url = location.href
    if (curr_url.includes('home')) {

        // FOR API
        $.get('https://amfqd61hk0.execute-api.ap-south-1.amazonaws.com/dev/v1/suggestion', function (response) {
            
            console.log(response)
            // Set Day & Date in the Navbar
            $($('.date-display').find('.day-name')).text(response.date.day)
            $($('.date-display').find('.date')).text(response.date.date)
    
            // Adding suggestion to the home page
            for (i = 0; i < response.suggestions.length; i++) {
    
                let meal = response.suggestions[i]
                let meal_suggestion_element =
                    `<div class="col-sm-12 col-md-6 col-lg-4 col-xxl-4 mt-3 mb-4">
                        <div class="per-meal">
                            <button class="meals-category">` + meal.meal + `</button>
                            <div class="row gy-2 mt-2 justify-content-center">
                                <div class="col-md-12 suggested-cards" data-id="` + meal.dishes[0].id + `">
                                    <div class="row">   
                                        <div class="dishes-thumb">
                                            <img src="` + meal.dishes[0].image + `" alt="">
                                        </div>
                                        <div class="dishes-des">
                                            <div class="row">
                                                <div class="col-xxl-12">
                                                    <p class="dish-title">` + meal.dishes[0].name + `</p>
                                                </div>
                                                <div class="col-xxl-12">
                                                    <p class="dish-brief">` + meal.dishes[0].description + `</p>
                                                </div>
                                                <div class="col-xxl-12">
                                                    <div class="dish-tags">
    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 suggested-cards" data-id="` + meal.dishes[1].id + `">
                                    <div class="row">   
                                        <div class="dishes-thumb">
                                            <img src="` + meal.dishes[1].image + `" alt="">
                                        </div>
                                        <div class="dishes-des">
                                            <div class="row">
                                                <div class="col-xxl-12">
                                                    <p class="dish-title">` + meal.dishes[1].name + `</p>
                                                </div>
                                                <div class="col-xxl-12">
                                                    <p class="dish-brief">` + meal.dishes[1].description + `</p>
                                                </div>
                                                <div class="col-xxl-12">
                                                    <div class="dish-tags">
    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    
                $('#meals-per-day').append(meal_suggestion_element)
            }
        })

    }
})

// Comment

/* <div class="row pt-3">
    <p class="dish-title">` + meal.dishes[1].Name + `</p>
    <p class="dish-brief">` + meal.dishes[1].Description + `</p>
    <div>
        <i class="fa-solid fa-pepper-hot"></i>
        <i class="fa-solid fa-ice-cream"></i>
    </div>
</div> */



// Animating the suggested card element when opening dishes details page
$('#meals-per-day').on('click', '.suggested-cards', function () {
    let id = $(this).attr('data-id')
    sessionStorage.setItem('dish-id', id)
    location.href = './dish-details.html'
})