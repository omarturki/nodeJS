const express = require('express');
const comics_router = require('./routers/comics');
const morgan = require('morgan');
const port = process.env.PORT || 3000 
const app = express();
app.use(morgan('dev'));
app.use('/api/comics',comics_router);

app.listen(port, ()=>console.log(`Server on ${port}`))  //' Server on '+port