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
<h4>Create a new booking. --->POST /booking/ or url-->https://travelopiaserver.onrender.com/booking</h4>




booking Modal Schema = {

   
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


<h3>Before you jump to api testing and usage , please find the details of app query params used for dynamic routing and they are mentioned below.</h3>

quert params = {

   
            ":page": "Page number lying between(1 to N)",
            ":perpage": "number of documents required per page(it is configurable)",
            ":sortingIndex": "can vary and is always between (1,0 and -1) 1 for ascending,-1 descending and 0 for default order",
            ":name": "booking belongs to this name of the person or it search with :name parameter",
            ":email": "booking belongs to this email of the person or it search with :email parameter",
            
}



<h3>
Get  all bookings with pagination enabled  ----->    GET /booking/:page/:perpage or URL-->https://travelopiaserver.onrender.com/booking/:page/:perpage
</h3>
<h4>An example of it would be 
https://travelopiaserver.onrender.com/booking/1/4
this basically means to fetch 4 booking out of 1st page
</h4>


<h3>
Search for booking with a particular email -->"booking/email/:email/:page
URL--> GET https://travelopiaserver.onrender.com/booking/email/:email/:page
</h3>
<h4>An example of it would be 
 https://travelopiaserver.onrender.com/booking/email/farhan12312@gmail.com/1
this basically means to get the booking with email farhan12312@gmail.com
</h4>




<h3>
Search for booking with a particular name -->"booking/name/:name/:page
URL-->GET https://travelopiaserver.onrender.com/booking/name/:name/:page 
</h3>
<h4>An example of it would be 
 https://travelopiaserver.onrender.com/booking/email/name/faran/1 
this basically means to get the booking with name farhan
</h4>





<h3>
Sort the data with name. -->"booking/sort/:sortingindex/name/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/name/:page
</h3>
<h4>An example of it would be 
 https://travelopiaserver.onrender.com/booking/sort/1/name/1
this basically means sort the booking in ascending order of name and then getting all booking of  page 1 (by default 4 per page)
</h4>




<h3>
Sort the data with email. -->"booking/sort/:sortingindex/email/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/email/:page
</h3>
<h4>An example of it would be 
 https://travelopiaserver.onrender.com/booking/sort/-1/email/1
this basically means sort the booking in descending order of email and then getting all booking of  page 1 (by default 4 per page)
</h4>



<h3>
Sort the data with number of travellers. -->"booking/sort/:sortingindex/travellers/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/travellers/:page
</h3>
<h4>An example of it would be 
 https://travelopiaserver.onrender.com/booking/sort/1/travellers/1
this basically means sort the booking in ascending order of number of travellers per booking and then getting all booking of  page 1 (by default 4 per page)
</h4>


<h3>
Sort the data with amount of different of every booking -->"booking/sort/:sortingindex/budget/:page
URL--> GET https://travelopiaserver.onrender.com/booking/sort/:sortingindex/budget/:page
</h3>
<h4>An example of it would be 
 https://travelopiaserver.onrender.com/booking/sort/1/budget/1
this basically means sort the booking in ascending order of budget in each booking and then getting all booking of  page 1 (by default 4 per page)
</h4>














