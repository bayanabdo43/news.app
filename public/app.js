// const request = require ('request')

// const forecast =(year,month,day,callback) =>{
//     const url ="https://newsapi.org/v2/everything?q=tesla&from=" + year +'-'+ month + '-' + day +" &sortBy=publishedAt&apiKey=d0c8ce9ae51e4ab097d2700e53bd2c0c"
        
//         request({url,json:true},(error,response)=>{
//             if (error){
//                 callback('Erroe has occurred',undefined)
//             }
//             else if(response.body.message){
//                 callback(response.body.message,undefined)
//             }
//             else {
//                 callback(undefined,response.body.articles.length==0)
//             }
//         })
//     }




// const request = require ('request')

// const forecast =(callback) =>{
//     const url ="https://newsapi.org/v2/everything?q=tesla&from=2022-02-19&sortBy=publishedAt&apiKey=d0c8ce9ae51e4ab097d2700e53bd2c0c"
        
//         request({url,json:true},(error,response)=>{
//             if (error){
//                 callback('Erroe has occurred',undefined)
//             }
//             else if(response.body.message){
//                 callback(response.body.message,undefined)
//             }
//             else {
//                 callback(undefined,response.body.articles.length==0)
//             }
//         })
//     }



//     module.exports = forecast