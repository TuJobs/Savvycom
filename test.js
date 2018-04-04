var ex = require('express');
var app = ex();
app.get('/',  function (req,res)
{
	res.send('i love svy!');
});
app.listen(3000,function()
{});

console.log('savvycom\'s fans app listening on port 3000!');