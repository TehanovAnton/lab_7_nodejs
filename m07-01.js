
const fs = require('fs')
const url = require('url')
let throw_error_405 = (res, homepath) => {
    error_html = fs.readFileSync(homepath + '/error.html')
    res.writeHead(405, { 'Content-type':'text/html' })
    res.write(error_html, () => res.end())    
}

let send_response = (res, status, options, viewpath) => {
    index = fs.readFileSync(viewpath)
    res.writeHead(status, options)
    res.write(index, () => res.end())
}


RequestHandler = (req, res, homepath) => {
    let parsed_url = url.parse(req.url, true)
    let pathname = parsed_url.pathname    

    // json
    if (req.method == 'GET') {
        if (pathname == '/json') {        
            json = JSON.parse(fs.readFileSync(homepath + '/index.json'))
            res.writeHead(200, { 'Content-Type':'application/json' })
            res.write(JSON.stringify(json), () => 
            {
                console.log(`json: ${JSON.stringify(json)}; ${typeof JSON.stringify(json)}`)
                res.end()
            })
        }
        // js
        if (pathname == '/js') {
            send_response(res, 200, { 'Content-Type':'application/javascript' }, homepath + '/index.js')            
        }
        // html
        else if (pathname == '/html') {
            send_response(res, 200, { 'Content-Type':'text/html; charset=utf-8' }, homepath + '/index.html')
        }
        else if (pathname == '/test') {
            send_response(res, 200, { 'Content-Type':'text/html; charset=utf-8' }, './test.html')
        }
        // css
        else if (pathname == '/css') {
            send_response(res, 200, { 'Content-Type':'text/css' }, homepath + '/index.css')
        }
        // png
        else if (pathname == '/png') {
            send_response(res, 200, { 'Content-Type':'image/png' }, homepath + '/index.png')            
        }
        // xml
        else if (pathname == '/xml') {
            send_response(res, 200, { 'Content-Type':'application/xml' }, homepath + '/index.xml')
        }
        // docx
        else if (pathname == '/docx') {
            send_response(res, 200, { 'Content-Type':'application/msword' }, homepath + '/index.xml')
        }
        else if (pathname == '/') {
            send_response(res, 200, { 'Content-Type':'text/html; charset=utf-8' }, homepath + '/07-01.html')            
        }
        else {
            throw_error_405(res, homepath)
        }
    }
    else {
        throw_error_405(res, homepath)
    }
}

module.exports = RequestHandler
