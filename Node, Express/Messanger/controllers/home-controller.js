const Thread = require('../models/Thread');

module.exports = {
    index: async (req, res) => {
        try{
            let threads = await Thread.find({}).populate('users');

            if(threads.length > 0){
                res.render('home/index', {threads,});
            }else{
                res.render('home/index');
            }
            
        }catch(e){
            console.log(e);
            
        }
      
    }
};