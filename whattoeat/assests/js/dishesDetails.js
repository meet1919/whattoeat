// To populate the details page
$(document).ready(function () {
    let curr_url = location.href
    if (curr_url.includes('details')) {

        let id = sessionStorage.getItem('dish-id')
        $.get(`https://amfqd61hk0.execute-api.ap-south-1.amazonaws.com/dev/v1/dish/${id}`, function (response) {
            
            let date = response.date.date.split(' ')[0]
            date = [response.date.date.split(' ')[0].split('-')[2], response.date.date.split(' ')[0].split('-')[1], response.date.date.split(' ')[0].split('-')[0]].join('/')

            $($('.date-display').find('.day-name')).text(response.date.day)
            $($('.date-display').find('.date')).text(date)

            // Add title name, image
            $('#dish-heading h1').text(response.dish.name)
            $('#dish-main-img img').attr('src', response.dish.images[0].link)

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
            let emded_video_link = response.dish.videos[0].link.replace('watch?v=', 'embed/')
            $('.recipe-videos').attr('src', emded_video_link)

        })
    }
}) 