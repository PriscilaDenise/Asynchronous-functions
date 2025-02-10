const express = require ('express');

const application = express();

const port = 2000;

application.listen(port, () => {
    console.log("Server is running through port 2000")
})