// To populate the details page
$(document).ready(function () {
    let curr_url = location.href
    if (curr_url.includes('details')) {

        // FOR API
        $.get('https://amfqd61hk0.execute-api.ap-south-1.amazonaws.com/dev/v1/dish/1', function (response) {
            console.log(response)
        })

        var response = {
            "date": {
                "date": "12/10/2022",
                "day": "Wednesday",
                "timezone": ""
            },
            "dish": {
                "ID": "5",
                "Name": "Mexican Rice",
                "Description": "Fresh Paneer and other things. Highly orgasmic for your taste buds",
                "DetailedDescription": "",
                "Image": "https://www.tasteofhome.com/wp-content/uploads/2018/03/Mexican-Rice-with-Chicken_exps26371_5Ing2856595D03_13_2bC_RMS.jpg",
                "Ingredients": [
                    {
                        "item": "Rice",
                        "quantity": "5",
                        "unit": "cup"
                    },
                    {
                        "item": "Paneer",
                        "quantity": "50",
                        "unit": "gm"
                    },
                    {
                        "item": "Veggies",
                        "quantity": "10",
                        "unit": "exotic"
                    }
                ],
                "video": {
                    "name": "https://www.youtube.com/embed/B-VivdiyL9c"
                }
            }
        }

        // Add title name, image
        $('#dish-heading h1').text(response.dish.Name)
        $('#dish-main-img img').attr('src', response.dish.Image)
        
        // Add Ingredients
        for (i = 0; i < response.dish.Ingredients.length; i++) {
            let ingredients = response.dish.Ingredients[i]
            let table_row = 
                `<tr>
                    <td>` + ingredients.item + `</td>
                    <td>` + ingredients.quantity + ` ` + ingredients.unit + `</td>
                </tr>`

            $('#dish-ingredients tbody').append(table_row)
        }

        // Add video link
        $('.recipe-videos').attr('src', response.dish.video.name)

    }
}) 