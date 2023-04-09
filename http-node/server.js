import http from 'http';
import https from 'https';

const app = http.createServer((req, res)=>{
    if(req.method == 'POST' && req.url == '/'){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk.toString();
            console.log(chunk);
            
        });

        req.on('end', ()=>{
            body = JSON.parse(body);
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(body));
            res.end();
        });
    }
    else if(req.method == 'GET' && req.url == '/'){
        

        let options = {
            hostname: 'api.github.com',
            path: '/users/YulianSan',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
            }
        }


        https.get(options, (resposta)=>{
            let response = '';

            resposta.on('data', (chunk)=>{
                response += chunk.toString();
            });

            resposta.on('end', ()=>{
                res.end(response);
            })
            
        })
    }
    else if(req.method == 'GET' && req.url == '/isso'){
        res.writeHead(200, 'Content-Type', 'application/json')
        res.write(JSON.stringify({isso: 'foi isso'}))
        res.end();
    }else{
        res.end('foi não')
    }
});

app.listen( process.env.PORT || 3333, ()=>{
    console.log('server run')
})