let http=require('http')

let server=http.createServer(function (req,res) {
    console.log('method',req.url)
    if(req.method=="POST"&&req.url=="/webhook"){
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify({
            ok:true
        }))
    }else{
        res.end('Not found')
    }
})
server.listen(4000,()=>{
    console.log("webhook服务已经在4000端口上启动")
})