const express = require('express');
const app = express();
const port = 3000;
app.listen(port ,() => {
    console.log(`app listening on port ${port}`);
});
app.use((req ,res) => {
    // console.log('Request received' ,req ,let {q} = req.query); 
    // text/plain ,json ,html ... etc {q:'apple' ,color: 'green'}
    res.send({
        "name" : "Harry",
        "age" : 22,
        "isCoder" : true
    });
});
function routing(rout){
    app.get(rout ,(req, res) => {
        let {username ,id} = req.params;
        res.send(`Your contacted path: ${rout}`);
    });
}
routing('/');
routing('/Contact');
routing('/:username/:id');
routing('*');
