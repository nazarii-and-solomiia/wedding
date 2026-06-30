const http=require('http'),fs=require('fs'),path=require('path');
const ROOT='/Users/nazariinazar/Desktop/Weeding Landing';
const T={'.html':'text/html','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.css':'text/css','.js':'text/javascript','.mp3':'audio/mpeg'};
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p==='/')p='/index.html';fs.readFile(path.join(ROOT,p),(e,d)=>{if(e){r.writeHead(404);r.end('404');return;}r.writeHead(200,{'Content-Type':T[path.extname(path.join(ROOT,p))]||'application/octet-stream'});r.end(d);});}).listen(3911,()=>console.log('up'));
