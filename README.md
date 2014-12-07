Babies First Angular
==============

##Objectives
For this mini-project you're going to create a basic angular Application from scratch. Getting used to structuring your Angular application is an important skill to get right. Many times as beginners the hardest part about Angular is having the question of 'what goes where?'. Hopefully this project will get you on the right path for structuring all your Angular projects in the future.

###Step 1: HTML Skeleton 
* Fork this repo, then clone your fork.
* Create a 'index.hmtl' file, a 'styles.css' file, and a 'js' folder.
* In your 'index.html file create a basic skelton of your applicaiton. Be sure to include the following
    - A Doctype
    - Opening and closing <html> tags
    - Opening and closing <head> and <body> tags
    - A link to your 'styles.css' file in your <head> section **CSS files always go in your <head> section while JavaScript files will always go before the closing </body> tag.
* To verify your additions are correct, add a paragraph tag to your html that says 'Woo' and in your styles.css file make the background of the entire page green. Then open up index.html in a browser to verify you see 'Woo' and the background is green. If correct, remove 'woo' and the green styling from your css.


###Step 2: Angular Time
Now that we have our basic HTML/CSS set up, let's make our plain website into an Angular Application.
* The first thing we always need to do when we're working with Angular is to make sure we actually include Angular in our project. Visit https://angularjs.org/ and click on download. Then, instead of actually downloading Angular - let's just use the CDN. A CDN is just usually a file someone else is hosting for us. In this example, Angular thought it would be nice to host Angular for us rather than having us download it and use our own copy. This also has some speed (caching) benefits. Copy the link that says 'CDN', then in your HTML, include that link as a script right before the closing </body> tag.
* Now that we've included Angular, we can do some Angular'ish things. First, let's go ahead and tell our HTML that we're going to have the whole thing be an Angular app. Include ng-app="myFirstApp" as an attribute on your <html> tag. This tells the browser that everything inside <html> </html> is an Angular app. *Note that if we wanted to just have part of our application be an Angular app, we can stick ng-app="nameOfModule" on anything and all child elements will be specific to that angular module.
* Now that we've told the browser that the entire HTML page is going to be Angular, let's create our first Controller. Remember, the purpose of a Controller is to 'control the view' or, in other terms, a controller allows us to access properties that are on a $scope object and stick those properties on our view (aka html pages). Go ahead and add ng-controller="mainCtrl" to your opening <body> tag. What we've done is told Angular that anything that is on our mainCtrl's $scope (which we'll build in a minute), is available to be used in our index.html page with {{}}. 
