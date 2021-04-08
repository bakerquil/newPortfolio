$(document).ready( () => {
    $('.submit').click( (event) => {

        let email = $('.email').val()
        let subject = $('.message').val()
        let statusElm = $('.status')
        statusElm.empty()
        if (email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid </div>')
        } else {
            event.preventDefault();
            statusElm.append('<div>Email is not valid </div>')

        }
        
    })
})