# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: 
  
  The name of the foreign key is called: animal_id. The foreign key would be part of the Sightings model. 

  Researched answer:

  A foreign key always belongs to the belongs_to side. An Animal has_many Sightings which means that Sightings belongs_to Animal. Therefore, Sightings would hold the foreign key: animal_id. 


2. Which routes must always be passed params and why?

  Your answer:

  Routes that will take in dynamic content from the user. 

  Researched answer:

  Params refers to the parameters being passed to the controller via a GET or POST request. In a GET request, params get passed to the controller from the URL in the user’s browser. In a POST request, params will get passed to the controller usually from a form. 

3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer:

  get '/game/:guess => 'main#game'

4. Name three rails generator commands. What is created by each?

  Your answer:

  rails generate Model- The generate Model command allows you to create a new model. This model is a table which includes column with data types. 

  rails generate Migration- Rails migrations allows you to make changes to your schema, without directly changing it on the file. It makes it possible to use a version control system since each migration is time stamped.

  rails generate Controller- This rails command creates a controller, which is able to retrieve information the Model and send it to the View. You can define what the controller name will be in the rails command.


  Researched answer:

  rails generate Model- Allows for Rails to create a model class, which can add database records, find particular data you're looking for, update that data, or remove data.

  rails generate Migration- Rails Migration allows you to use Ruby to define changes to your database schema, making it possible to use a version control system to keep things synchronized with the actual code.

  rails generate Controller- A controller's purpose is to receive specific requests for the application. Routing decides which controller receives which requests. Often, there is more than one route to each controller, and different routes can be served by different actions. Each action's purpose is to collect information to provide it to a view.


5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users          Displays a list of all users.

method="GET"    /users/1        Displays the user with the id of 1

method="GET"    /users/new      Returns an HTML form for creating a new user

method="GET"    /users/edit/1   Returns an HTML form for editing the info of user with the id of 1

method="POST"   /users/         Creates a new user

method="PUT"    /users/1        Updates the user with the id of 1

method="DELETE" /users/1        Deletes user with the id of 1
