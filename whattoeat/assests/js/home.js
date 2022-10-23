// Load the suggestion for Breakfast, Lunch & Dinner
// Below code is loading 2 suggestion for each meal
$(document).ready(function () {
    var curr_url = location.href
    if (curr_url.includes('home')) {

        // FOR API
        $.get('https://amfqd61hk0.execute-api.ap-south-1.amazonaws.com/dev/v1/suggestion', function (response) {
            
            let date = response.date.date.split(' ')[0]
            date = [response.date.date.split(' ')[0].split('-')[2], response.date.date.split(' ')[0].split('-')[1], response.date.date.split(' ')[0].split('-')[0]].join('/')  

            // Set Day & Date in the Navbar
            $($('.date-display').find('.day-name')).text(response.date.day)
            $($('.date-display').find('.date')).text(date)
    
            // Adding suggestion to the home page
            for (i = 0; i < response.suggestions.length; i++) {
    
                let meal = response.suggestions[i]
                let meal_suggestion_element =
                    `<div class="col-sm-12 col-md-6 col-lg-4 col-xxl-4 mt-3 mb-4">
                        <div class="per-meal">
                            <button class="meals-category">` + meal.meal.toLowerCase() + `</button>
                            <div class="row gy-2 justify-content-center">
                                <div class="col-md-12 suggested-cards" data-id="` + meal.dishes[0].id + `">
                                    <div class="row">   
                                        <div class="dishes-thumb">
                                            <img src="./assests/img/manchu.jpg" alt="">
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
                                            <img src="./assests/img/manchu.jpg" alt="">
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