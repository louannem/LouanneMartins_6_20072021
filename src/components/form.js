export default function formFunction() {
    //Open the form
    let openForm = () => {
        document.getElementById('form__background').style.display="flex"
    }
    document.getElementById('contact-btn').addEventListener('click', openForm)

    //Close the form
    let closeForm = () => {
        document.getElementById('form__background').style.display = "none"
    }
    document.getElementById('close-form').addEventListener('click', closeForm)

    //Send the form
    let sendForm = (e) => {
        e.preventDefault();
        document.getElementById('form__background').style.display = "none";
        console.log("Formulaire envoyé !")
    }
    document.getElementById('submit-btn').addEventListener('click', sendForm)

}
