pJson = document.getElementById("jsonfile")
fetch('http://localhost:3000/json')
.then(res => res.json())
.then(textjson =>
{
    console.log(textjson)
})


pXml = document.getElementById("xmlfile")
fetch('http://localhost:3000/xml')
.then(res => res.text())
.then(textxml => 
{
    console.log(textxml)
})