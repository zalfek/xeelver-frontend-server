const express = require('express')
const config = require('config')
const app = express()
const PORT =  config.get('port') || 5000
const path = require('path')


app.use('/', require('./routes/routes'))
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client','build')));

    app.get("*", (request, response) => {
        response.sendFile(path.resolve(__dirname,"client", "build", "index.html"));
    });
}
app.listen(PORT ,() => console.log(`Server has been started on port: ${PORT}...`))