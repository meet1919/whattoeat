// To populate the details page
$(document).ready(function () {
    let curr_url = location.href
    if (curr_url.includes('details')) {

        // FOR API
        $.get('https://amfqd61hk0.execute-api.ap-south-1.amazonaws.com/dev/v1/dish/1', function (response) {

            console.log(response)

            $($('.date-display').find('.day-name')).text(response.date.day)
            $($('.date-display').find('.date')).text(response.date.date)

            // Add title name, image
            $('#dish-heading h1').text(response.dish.name)
            $('#dish-main-img img').attr('src', response.dish.Image)

            // Add Ingredients
            for (i = 0; i < response.dish.ingredients.length; i++) {
                let ingredients = response.dish.ingredients[i]
                let table_row =
                    `<tr>
                        <td>` + ingredients.name + `</td>
                        <td>` + ingredients.quantity + ` ` + ingredients.unit + `</td>
                    </tr>`

                $('#dish-ingredients tbody').append(table_row)
            }

            // Add video link
            $('.recipe-videos').attr('src', response.dish.video.name)

        })
    }
}) 