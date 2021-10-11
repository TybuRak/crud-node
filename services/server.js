require('database.js');

const express = require('express');

let app = express();


app.get('/',(req, res) =>{
    res.render('index', {
        pageTitle: 'Strona główna',
    });
});

app.listen(5000, () => {
    console.log("kurwa");
})