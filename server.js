const express = require('express');
const app = express();

const port = 3001


app.get('/', function (req, res) {
    res.send('************* WELCOME TO ADMIN SERVICE BACKEND *************');
});



app.listen(port, () => {
    console.log("****************************************************************")
    console.log(`Server is started on ${port} successfully for ADMIN_SERVICE `)

    console.log("****************************************************************")

});



