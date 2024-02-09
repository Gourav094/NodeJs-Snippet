## Now we are going to serve frontend dyanmically

Note: Recomended to check serve fron-end before reading this

- We can use template engine provide by express

Steps:-
- install hbs -> npm i hbs --save

- setting template engine -> app.set('view engine','hbs')

- set folder that want to serve
  - create "views" folder in which hbs file will present
  - app.set('views',path.join(__dirname,'views'))
  - use syntax to apply dynamic content -> {{varible_name}}

- Let's create route for dynamic content
 - app.get(route, (req,res) => {
    res.render('file_name',{
        variable_name:'content'
    })
 })
 - note: render function provide by express to use template engine 
