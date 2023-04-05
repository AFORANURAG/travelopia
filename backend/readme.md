<h1>Here is the api documentation.</h1>



<h5>This is an API responsible for storing different travel bookings and retreiving those bookings.</h5>
<h1>Technologies</h1>

This API is built using the following technologies:

Node.js

Express.js

mongodb

mongoose



<h2>API Endpoints</h2>

app.use("/booking",router);

Create a new booking. --->POST /booking/
url-->https://travelopiaserver.onrender.com/booking (POST)
modal schema = {

  name:String,
  email:String,
  destination:{ type: String,
    enum: ['India', 'Africa',"Europe"],
    default: 'India'},
    travellers:{type:Number,min:1,max:1000},
    budget:{type:Number,min:1,max:1000000}
},

{timestamps:"true"} 
}



body = {

   
            "_id": "642ddb5e26e274aa16bb8e47",
            "name": "farhan",
            "email": "farhan12312@gmail.com",
            "destination": "India",
            "travellers": 999,
            "budget": 10,
}


Get  all bookings with pagination enabled  ----->    GET /booking/:page/:perpage
URL-->https://travelopiaserver.onrender.com/booking/:page/:perpage;


Search for booking with a particular email -->"booking/email/:email/:page
URL--> GET https://travelopiaserver.onrender.com/booking/email/:email/:page;

Search for booking with a particular name -->"booking/name/:name/:page
URL-->GET https://travelopiaserver.onrender.com/booking/name/:name/:page;



Sort the data with name. -->"booking/sort/:sortingindex/name/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/name/:page;


Sort the data with email. -->"booking/sort/:sortingindex/email/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/email/:page;


Sort the data with number of travellers. -->"booking/sort/:sortingindex/travellers/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/travellers/:page;



Sort the data with amount of different of every booking -->"booking/sort/:sortingindex/budget/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/budget/:page;














