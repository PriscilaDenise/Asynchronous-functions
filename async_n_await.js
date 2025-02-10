export const fetch_async_await = async(url) => {

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error (`There is an error. Status code: ${response.status}`);
        }
        const info = await response.json();
        return info.slice(0,8);
    }
    catch(error){
        throw new Error (error);
    }
}