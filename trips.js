const r=require('express').Router(); r.get('/search',(q,s)=>s.json([])); module.exports=r;
