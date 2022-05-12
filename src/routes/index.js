const express=require('express');
const { brotliDecompress } = require('zlib');
const router=express.Router();
const model=require('../model/task')();

router.get('/', (req, res) => {
    model.find({},(err,task)=>{
        if(err) throw err;
        res.render('index',{
            title: 'CRUD',
            task:task
        });
    })
  
});

router.post('/add',(req,res)=>{
    let body=req.body;
    console.log(body)
    body.status=false;

    model.create(body,(err,task)=>{
        if (err) throw err;
        res.redirect('/');
    });

});

router.get('/turn/:id',(req,res)=>{
    let id=req.params.id;
    model.findById(id,(err,task)=>{
        if (err) throw err;
        task.status=!task.status;
        task.save()
            .then(()=>res.redirect('/'));
    });
    
})
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id;
    model.findById(id,(err,task)=>{
        if (err) throw err;
        task.delete()
            .then(()=>res.redirect('/'));
    });
    
})


module.exports=router;