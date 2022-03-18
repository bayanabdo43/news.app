const request = require ('request')

const express = require ('express')
const app = express()
const port = process.env.PORT || 3000

const path = require ('path')
const publicdirectory = path.join(__dirname,'../public')
app.use(express.static(publicdirectory))

app.set('view engine','hbs');
app.get('/',(req,res)=>{res.render('index')})


/////////////////////////////////////////////////
// const forecast = require('../public/app')
// forecast(2022,02,19,(error,data)=>{
//     console.log('error',error)
//     console.log('data',data)
// })
////////////////////////////////////////////////
// app.get('/',(req,res)=>{
//     if(error){
//         return res.send({
//             error:'Erroe has occurred'
//         })
//     }
//     forecast(req.response.body.articles.length==0,(error,data)=>{
//         if (error){
//             return res.send({error})
//         }
//         res.send(data.response.body.articles.length==0)
//     })
// })

////////////////////////////////////////////////

const url ="https://newsapi.org/v2/everything?q=tesla&from=2022-02-19&sortBy=publishedAt&apiKey=d0c8ce9ae51e4ab097d2700e53bd2c0c"

request ({url,json:true},(error,responce)=>{

    app.set('view engine','hbs');
    app.get('/',(req,res)=>{res.render('index')})

    app.get('/',(req,res)=>{
        if(error){
                    res.send({error:'Erroe has occurred'})
                }
    })

    app.get('/',(req,res)=>{
        if(req.response.body.message){
            return res.send({message:responce.body.message})
        }
        res.send({message:response.body.articles.length==0
            // "articles":responce.body.articles,
            // "description":responce.body.articles.description,
        })
    
    })


})


app.get('*',(req,res)=>{
    res.send('404 page')
})

app.listen(port,()=>{
    console.log('Example app listening on port')
})