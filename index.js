const _ = require('lodash');
const express = require('express');
const Joi = require('joi');
const port = 3000

const app = express();
var comics = [
    {titre : "tom & jerry", auteur : "spacetoon", url:"url1"},
    {titre : "batman", auteur : "americComics", url:"url2"},
    {titre : "zoro", auteur : "lastcomics", url:"url3"}
]

// validation comics

app.use(express.json());

const validation_schema = Joi.object({
    titre : Joi.string().min(4).required(),
    auteur : Joi.string().max(20).min(4).required(),
    url : Joi.string()

})
// crud comics

// get
app.get('/api/comics', (req,res) =>{
    res.send(comics)
})
// get by auteur
app.get('/api/comics/find/auteur/:auteur', (req,res)=>{
    let comics_list = comics.filter(comic=>comic.auteur === req.params.auteur);
    if(comics_list.length==0)
        res.status(204);
    res.send(comics_list)
});
// get by titre
app.get('/api/comics/find/titre/:titre', (req,res)=>{
    let comics_list = comics.filter(comic=>comic.titre === req.params.titre);
    if(comics_list.length==0)
        res.status(204);
    res.send(comics_list)
});
// put by titre

app.put('/api/comics/:titre', async (req, res) => {
    
    var res_validation = validation_schema.validate(req.body);
    if (res_validation.error)
        return res.status(400).send('Error :' + res_validation.error.details[0].message);
    let comic = comics.find(c => c.titre === req.params.titre);
    if(!comic)
        res.status(204);
    comic.titre = req.body.titre,
    comic.auteur= req.body.auteur,
    comic.url= req.body.url
    
    res.send(comic);
});

// delete by titre
app.delete('/api/comics/:titre', async (req, res) => {
    var valid_titre = validation_schema.validate(req.body);
    if (valid_titre.error)
        return res.status(400).send(valid_titre.error.details[0].message);
    let comic = comics.filter(comic=>comic.titre === req.params.titre);
    comics = comics.filter(c => c.titre !== req.params.titre);
    res.send(comic);
});


// post add comics

app.post('/api/comics', (req,res)=>{
    let validation_result = validation_schema.validate(req.body);
    if(validation_result.error)
        return res.status(400).send(validation_result.error.details[0].message)
    let comic = _.pick(req.body, ['titre','auteur','url']);
    comics.push(comic);
    res.status(201).send(comic)
})

app.listen(port, ()=>console.log(`Server on ${port}`))  //' Server on '+port