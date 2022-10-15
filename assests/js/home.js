// Load the suggestion for Breakfast, Lunch & Dinner
// Below code is loading 2 suggestion for each meal
$(document).ready(function () {
    var curr_url = location.href
    if (curr_url.includes('home')) {

        // FOR API
        // $.get('/suggestions/', function (response) {

        // })

        var response = {
            "date": {
                "date": "12/10/2022",
                "day": "Wednesday",
                "timezone": ""
            },
            "meals": [
                {
                    "meal_name": "Breakfast",
                    "dishes": [
                        {
                            "ID": "1",
                            "Name": "Upma",
                            "Description": "Tasty Upma with Arun's special recipe",
                            "image": "https://th.bing.com/th/id/OIP.YVE0jppOUq2V2K-HlbkwngHaEt?pid=ImgDet&rs=1"
                        },
                        {
                            "ID": "2",
                            "Name": "Poha",
                            "Description": "Tasty Poha with bajrang's jini sev",
                            "image": "https://th.bing.com/th/id/OIP._ph2RxU5G1A5R1r6CXrFiwHaHa?pid=ImgDet&rs=1"
                        }
                    ]
                },
                {
                    "meal_name": "Lunch",
                    "dishes": [
                        {
                            "ID": "3",
                            "Name": "Aloo Matar & Roti",
                            "Description": "Gravy sabji with shambharo, papad and chass",
                            "image": "https://2.bp.blogspot.com/-gUKvVTlDSe8/WH9guwYlE2I/AAAAAAAAS_w/c-URzleDq8EvkE7MCX_wMNIQLJeFQTatgCLcB/s1600/Aloo%2BMattar%2BSabji%2BChapati%2B2.JPG"
                        },
                        {
                            "ID": "4",
                            "Name": "Suki Bhaji, Thepla & Shrikhand",
                            "Description": "This dish amplifies your high 10x",
                            "image": "https://img-global.cpcdn.com/recipes/6641aef8c9cfeb49/680x482cq70/%E0%AA%AE%E0%AB%87%E0%AA%A5%E0%AB%80-%E0%AA%A8%E0%AA%BE-%E0%AA%A5%E0%AB%87%E0%AA%AA%E0%AA%B2%E0%AA%BE-%E0%AA%AC%E0%AA%9F%E0%AA%BE%E0%AA%95%E0%AA%BE-%E0%AA%B8%E0%AB%82%E0%AA%95%E0%AB%80-%E0%AA%AD%E0%AA%BE%E0%AA%9C%E0%AB%80-%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4%E0%AB%80-%E0%AA%B8%E0%AB%8D%E0%AA%9F%E0%AA%BE%E0%AA%87%E0%AA%B2-methi-thepla-batata-suki-bhaji-recipe-in-gujarati-%E0%AA%B0%E0%AB%87%E0%AA%B8%E0%AB%80%E0%AA%AA%E0%AB%80-%E0%AA%AE%E0%AB%81%E0%AA%96%E0%AB%8D%E0%AA%AF-%E0%AA%AB%E0%AB%8B%E0%AA%9F%E0%AB%8B.jpg"
                        }
                    ]
                },
                {
                    "meal_name": "Dinner",
                    "dishes": [
                        {
                            "ID": "5",
                            "Name": "Mexican Rice",
                            "Description": "Fresh Paneer and other things. Highly orgasmic for your taste buds",
                            "image": "https://www.tasteofhome.com/wp-content/uploads/2018/03/Mexican-Rice-with-Chicken_exps26371_5Ing2856595D03_13_2bC_RMS.jpg"
                        },
                        {
                            "ID": "6",
                            "Name": "Cheese Schezwan Frankie",
                            "Description": "No words for this tongue boggling Dish",
                            "image": "https://th.bing.com/th/id/OIP.KnZMmy75i-_lWJZM7sCzPQHaFj?pid=ImgDet&rs=1"
                        }
                    ]
                }
            ]
        }

        // Set Day & Date in the Navbar
        $($('.date-display').find('.day-name')).text(response.date.day)
        $($('.date-display').find('.date')).text(response.date.date)


        // Adding suggestion to the home page
        for (i = 0; i < response.meals.length; i++) {

            let meal = response.meals[i]
            let meal_suggestion_element =
                `<div class="col-sm-4 mt-3 mb-4">
                    <div class="per-meal">
                        <button class="meals-category">` + meal.meal_name + `</button>
                        <div class="row gy-2 mt-2 justify-content-center">
                            <div class="col-md-12 suggested-cards" data-id="` + meal.dishes[0].ID + `">
                                <div class="row">   
                                    <div class="dishes-thumb">
                                        <img src="` + meal.dishes[0].image + `" alt="">
                                    </div>
                                    <div class="dishes-des">
                                        <div class="row mt-3">
                                            <p class="dish-title">` + meal.dishes[0].Name + `</p>
                                            <p class="dish-brief">` + meal.dishes[0].Description + `</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 suggested-cards" data-id="` + meal.dishes[1].ID + `">
                                <div class="row">   
                                    <div class="dishes-thumb">
                                        <img src="` + meal.dishes[1].image + `" alt="">
                                    </div>
                                    <div class="dishes-des">
                                        <div class="row mt-3">
                                        <p class="dish-title">` + meal.dishes[1].Name + `</p>
                                        <p class="dish-brief">` + meal.dishes[1].Description + `</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            $('#meals-per-day').append(meal_suggestion_element)
        }
    }
})



// Animating the suggested card element when opening dishes details page
$('#meals-per-day').on('click', '.suggested-cards', function () {
    // $(this).empty()
    // $(this).append('<h1>Loading</h1>')
    location.href = './dish-details.html'
    // setTimeout(() => location.href = './dish-details.html', 2000)
})