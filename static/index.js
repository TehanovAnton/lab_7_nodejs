pJson = document.getElementById("jsonfile")
fetch('http://localhost:3000/json')
.then(res => res.json())
.then(json =>
{    
    pJson.innerHTML = JSON.stringify(json)
})


pXml = document.getElementById("xmlfile")
fetch('http://localhost:3000/xml')
.then(res => res.text())
.then(textxml => 
{
    pXml.innerHTML = textxml
})