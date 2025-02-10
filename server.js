const express = require ('express');

const application = express();

const port = 3000;

application.listen(port, () => {
    console.log("Server is running through port 3000")
})