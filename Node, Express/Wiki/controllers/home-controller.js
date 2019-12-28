const Article = require('../models/Article');

module.exports = {
    index: async (req, res) => {

       try{
        let articles = await Article.find()
        .limit(3)
        .sort('-creationDate');

        let latest = articles[0];
        if(latest) {
            latest.content = latest.content.split(' ').slice(0, 50).join(' ');
           
        }else {
            latest = {content: 'There is no article'}
        }
        res.render('home/index', {latest, articles});
            
       }catch(e) {
           console.log(e);
           
       }
    },
    search: async (req, res) => {
        try{
            const title = req.query.title.toLowerCase();

        let articles = await Article.find();

        articles = articles.filter((a) => a.title.toLowerCase().includes(title))

        res.render('home/search', {articles, result: title})
        }catch(e) {
            console.log(e);
            
        }

    }
};