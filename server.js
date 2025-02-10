import express from "express";
import {fetch_callback} from "./callback.js";
import { fetch_promises } from "./promises.js";
import { fetch_async_await } from "./async_n_await.js";

const application = express();

const port = 2000;

const MyUrl = 'https://jsonplaceholder.typicode.com/posts'



application.listen(port, () => {
    console.log(`Server is running through port ${port}`);

//CALLBACK 
    fetch_callback(MyUrl, (error, info) =>{
        if (error) {
            console.log("The Callback error is: ", error);
        }else{
            console.log("Fetch with callback: ", info, "\n")
        }
    })
    console.log ("\n")

//PROMISES    
    fetch_promises(MyUrl)
    .then(info => {
        console.log("Fetch with promises: ", info, "\n");
    })
    .catch(error => {
        console.log("The promises error is: ", error);
    })
    console.log ("\n")

    //ASYNC/AWAIT
    fetch_async_await(MyUrl)
    .then(info => {
        console.log('Fetch with async/await: ', info, "\n");
    })
    .catch(error => {
        console.log('The async/await error is: ', error);
    })
});

