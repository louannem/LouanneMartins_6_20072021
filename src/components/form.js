export default function formFunction() {
    //Open the form
    let openForm = () => { 
        document.getElementById('form__background').style.display="flex";  
        document.getElementById('form__background').setAttribute('aria-hidden', 'false');
        document.getElementById('main__wrapper').setAttribute('aria-hidden', 'true')  ;
    }

    if( document.getElementById('contact-btn') || document.getElementById('contact-btn-mobile')) {
        document.getElementById('contact-btn').addEventListener('click', openForm);
        document.getElementById('contact-btn-mobile').addEventListener('click', openForm);
    }

    //Close the form
    let closeForm = () => { 
        document.getElementById('form__background').style.display = "none"; 
        document.getElementById('form__background').setAttribute('aria-hidden', 'true') ;
        document.getElementById('main__wrapper').setAttribute('aria-hidden', 'false')
    }

    if(document.getElementById('close-form')) { document.getElementById('close-form').addEventListener('click', closeForm)}

    //Send the form
    let sendForm = (e) => {
        let lastName =  document.getElementById('nom').value;
        let firstName =  document.getElementById('prenom').value;
        let email =  document.getElementById('email').value;
        let message  =  document.getElementById('message').value;
        e.preventDefault();
        document.getElementById('form__background').style.display = "none";
        console.log("Nom:",lastName,"Prénom: ",firstName,"Email: ", email, "Message: ", message)
    }

    if(document.getElementById('submit-btn')) {document.getElementById('submit-btn').addEventListener('click', sendForm)}

    window.addEventListener('keydown', function(e) {
        switch (e.key) {
            case "Escape":
                closeForm();
            break;
        }
    })

}
