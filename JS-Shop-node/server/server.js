const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();



// app.listen(3000,()=>{
//     console.log('Connected');
// })

app.use(express.json());
app.use('/', express.static(path.join(__dirname + '/../')));


// app.get('/', function(req, res){
//     res.send(`index.html`);
// });


app.get('/api/getProducts', (req, res,) => {
    fs.readFile('api/getProducts.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    })
});

app.listen(3000, () => console.log('Listen on port 3000...'));