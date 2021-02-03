const express=require('express');
const app= express();
const port=5000;
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/',require('./routes'));
app.listen(port,function(err){
  if(err){
      console.log(`error in running express${err}`);
  }

  console.log(`express running at port:${port}`);
})