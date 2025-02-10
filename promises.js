export const fetch_promises = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then (response => {
            if (!response.ok){
                throw new Error (`There is an error. Status code: ${response.status}`);
            }
            return response.json();
        })
        .then (info => {
            resolve(info.slice(0,13));
        })
        .catch (error => {
            reject(error);
        })
    })
}