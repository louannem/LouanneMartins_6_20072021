/**
 * Fetch datas in the JSON file
 * @returns JSON datas
 */
export default async function fetchData() {
    const response = await fetch('./data/data.json');
    return response.json();
}