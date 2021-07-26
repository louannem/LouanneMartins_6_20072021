//Fichier pour récupérer les données JSON
export default function fetchData() {
    fetch('data.json')
    .then((response) => {
        return response.json();
    })
    .then((response)=> {
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
    })
}