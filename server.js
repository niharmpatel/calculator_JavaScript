const express = require('express')
const app = express()
const port = 3000
const methods = ['add', 'subtract', 'multiply', 'divide'];
app.get('/', (req, res) => {
    const method = req.query.method;
    const isValid = methods.includes(method);

    if (!isValid){
        res.send('please enter: ' + methods.toString())
}

const x = parseInt(req.query.x);
const y = parseInt(req.query.y);

if (isNaN(x) || isNaN(y)) {
    return res.send('please enter number for values of x and y')
}
if (method == 'add') {
    return res.send(`${x} + ${y} = ${x + y}`);
}
if (method == 'subtract') {
    return res.send(`${x} - ${y} = ${x - y}`);
}
if (method == 'multiply') {
    return res.send(`${x} X ${y} = ${x * y}`);
}
if (method == 'divide') {
    return res.send(`${x} ÷ ${y} = ${x/y}`);
}
return res.send(isValid);
});
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))