pJson = document.getElementById("jsonfile")
fetch('http://localhost:5000/json')
.then((res) => res.text())
.then((textjson) => {
    pJson.innerHTML = textjson
    console.log(textjson)
})

pXml = document.getElementById("xmlfile")
fetch('http://localhost:5000/xml')
.then(res => res.text())
.then((textxml) => {
    pXml.innerHTML = textxml 
    console.log(textxml)
})