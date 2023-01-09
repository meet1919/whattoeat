function MobileCheck(x) {
    let elem_type = ''
    if (x.matches) { // If media query matches
        elem_type = 'mobile-device'
    } else {
        elem_type = 'desktop-device'
    }
    return elem_type
}


// To populate the details page
$(document).ready(function () {


    var x = window.matchMedia("(max-width: 576px)")
    let section_type = MobileCheck(x) // Call listener function at run time
    x.addListener(MobileCheck) // Attach listener function on state changes

    let curr_url = location.href
    if (curr_url.includes('details')) {

        let id = sessionStorage.getItem('dish-id')
        $.get(`https://amfqd61hk0.execute-api.ap-south-1.amazonaws.com/dev/v1/dish/${id}`, function (response) {
            let date = response.date.date.split(' ')[0]
            date = [response.date.date.split(' ')[0].split('-')[2], response.date.date.split(' ')[0].split('-')[1], response.date.date.split(' ')[0].split('-')[0]].join('/')

            $($('.date-display').find('.day-name')).text(response.date.day)
            $($('.date-display').find('.date')).text(date)

            // Add title name, image
            $(`.${section_type} #dish-heading`).text(response.dish.name)
            $(`.${section_type} #dish-description`).text(response.dish.detailed_description)
            $(`.${section_type} #dish-main-img img`).attr('src', response.dish.images[0].link)

            // Add Ingredients
            for (i = 0; i < response.dish.ingredients.length; i++) {
                let ingredients = response.dish.ingredients[i]
                let table_row = ''
                if (section_type == 'mobile-device') {
                    table_row = 
                        `
                        <div class="ingred">
                        <p class="ingred-name">` + ingredients.name + ` </p>
                        <p class="ingred-quant">` + ingredients.quantity + ` ` + ingredients.unit + `</p>
                        </div>
                        `
                    $(`.${section_type} #dish-ingredients #ingred-table-mob`).append(table_row)
                } else {
                    table_row = 
                        `
                        <div class="ingred">
                        <p class="ingred-name">` + ingredients.name + ` </p>
                        <p class="ingred-quant">` + ingredients.quantity + ` ` + ingredients.unit + `</p>
                        </div>
                        `
                    $(`.${section_type} #ingred-table-desk`).append(table_row)
                }

            }

            // Add video link
            let emded_video_link = response.dish.videos[0].link.replace('watch?v=', 'embed/')
            $(`.${section_type} .recipe-videos`).attr('src', emded_video_link)

        })
    }
}) 


// Hide unhide ingredients, recipe (FOR MOBILE DEVICE)
$('.mobile-device .ingredient-dropdown').click(function () {
    $('.dish-table').slideToggle(500)
    $($(this).find('.fa-chevron-up')).toggle()
    $($(this).find('.fa-chevron-down')).toggle()
})

$('.mobile-device .recipe-dropdown').click(function () {
    $('.recipe-content').slideToggle(500)
    $($(this).find('.fa-chevron-up')).toggle()
    $($(this).find('.fa-chevron-down')).toggle()
})

// Hide unhide ingredients, recipe (FOR DESKTOP DEVICE)
$('.desktop-device .details-dropdown').click(function () {
    let to_point = $(this).attr('data-point')
    let top_point_list = ['.dish-table', '.recipe-content']

    let enabled_class = $(this).attr('class').replace('col-md-12 details-dropdown ', '')
    let total_classes = []
    $('#dish-details-container').children().map(function () {
        total_classes.push($(this).attr('class').replace('col-md-12 details-dropdown ', ''))
    })

    for (i=0; i < top_point_list.length; i++) {
        if (top_point_list[i].includes(to_point)) {
            $(this).css('border-right', 'none')
            $(top_point_list[i]).prop('hidden', false)
        } else {
            for (j=0; j < total_classes.length; j++) {
                if (total_classes[j] != enabled_class) {
                    console.log(total_classes[j])
                    $(`.${total_classes[j]}`).css('border-right', '0.1em solid rgb(229, 229, 229)')
                }
                $(top_point_list[i]).prop('hidden', true)
            }
        }
    }

    
})