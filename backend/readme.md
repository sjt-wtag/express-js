
# Express

## what is express?
- package, routing

## why express js?
- http is difficult to use, express makes this easier

## Routing
- the process of creating route

## app.use()
- routes of app.use() will be executed first. if next() is called then next route will be executed

## route parameters
- to make any route dynamic you can use : at the place where you want to make it dynamic, and to access there value use req.params



## ejs setup
        1. install ejs using `npm i ejs`
        2. configure ejs `app.set("view engine", "ejs")`
        3. create a `views` folder
        4. create a `ejs` file inside that 
        5. convert `send` to `render` => make sure that while rendering that the
         file is from views folder and don't mention .ejs in the render function


## template engines 
        - pug
        - ejs (very very similar to html)
        - handlebars
        - jade


## For settng up static files

        1. create a folder called public
        2. create three folders inside it, images, stylesheets, javascript
        3. configure the express static
        4. understand the path


