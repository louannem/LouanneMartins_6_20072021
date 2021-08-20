export default async function fetchData() {
    const response = await fetch('./data/data.json');
    return response.json();
}