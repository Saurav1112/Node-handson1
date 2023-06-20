const http = require ("http");
const dotenv = require("dotenv")
dotenv.config()

function site (request,response){
   const url = request.url
   if (url === "/") {
    response.write("<html>")
        response.write("<head><title> Node Handson 1</title></head>")
        response.write("<body>")
        response.write("<h1>Create an application to send an HTML file using Node.js</h1>")
        response.write("<p><b>Functionality:</b> A simple Node.js Web App that sends an HTML file for the home page containing an h1 tag with the message Home in response to the client.</p>")
        response.write("<p><b>Approach:</b> We use the “sendFile” method of the response object to send an HTML file to the client when the request for the home(/) route.</p>")
        response.write("<p><b>Implementation:</b> Let's see the step-by-step implementation to create the final application.</p>")
        response.write("</body>")
        response.write("</html>")
       return response.end();
   }
   if(url === "/json"){
    response.write(JSON.stringify([ 
        {node: "The node key represents the concept of a node."},
    {description: "The description key provides a definition or explanation of what a node is. It states that a node is a fundamental unit or element within data structures."}
    ,{ properties : "The properties key contains an array that lists some common properties or characteristics of nodes. These include the ability to hold data or additional properties, the presence of relationships with other nodes, and the organization within various data structures."}   
]))
    return response.end()   
}



response.write("Page not found")
return response.end()

}
    

const port = process.env.port
const server = http.createServer(site)
server.listen(port,()=>{
    console.log("server is running inside the port number 4000");
})
