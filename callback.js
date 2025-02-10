export const fetch_callback = (url, CallBack) =>{
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error (`There is an error. Status is ${response.status}`);
        }
        return response.json();
    })
    .then(info => CallBack(null, info.slice(0,8)))
    .catch(error => CallBack(error, null));
}