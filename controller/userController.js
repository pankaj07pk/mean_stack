const User = require('../model/user')


exports.getUsers = async function(req,res){
    try{
        if(req.params.for == 'student'){
            res.json([{name:'piyush',class:10, email:'piyush@gmail.com'},{name:'anjali',class:10, email:'anjali@gmail.com'}])

        }else if(req.params.for == 'book'){
            res.json([{name:'english',author:'adam quil', publicer:'alice group'},{name:'science',author:'hena cane', publicer:'peran co.'}])
            
        }else{
            res.json([{language:'java',release:1991, publicer:'sun microsystem'},{language:'typescript',relese:2008, publicer:'microsoft'}])
        }

    }catch(e){
        console.log(e);
        res.json({error:'Something wrong!'})
    }
}




exports.addUser = async function(req,res){
    try{

        // let userAdd = await User(req.body).save();

        let userAdd = await User({
            fullName:req.body.full_name,
            phone:req.body.phone_number,
            email:req.body.email_address
        }).save();

        if(userAdd){
            res.json({sucess:'User added successfully!'})
        }else{
            res.json({error:'Something wrong, Please try again!'})
        }

    }catch(e){
        console.log(e);
        res.json({error:'Something wrong!'})
    }
}