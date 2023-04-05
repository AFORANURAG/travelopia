<h1>Here is the api documentation.</h1>



<h5>This is an API responsible for storing different travel bookings and retreiving those bookings.</h5>
<h1>Technologies</h1>

This API is built using the following technologies:

Node.js

Express.js

mongodb

mongoose



<h2>API Endpoints</h2>

Create a new booking. --->POST /booking/
url-->https://travelopiaserver.onrender.com/booking (POST)
modal schema = {
{
  name:String,
  email:String,
  destination:{ type: String,
    enum: ['India', 'Africa',"Europe"],
    default: 'India'},
    travellers:{type:Number,min:1,max:1000},
    budget:{type:Number,min:1,max:1000000}
},{timestamps:"true"} 

body =  {
            "_id": "642ddb5e26e274aa16bb8e47",
            "name": "farhan",
            "email": "farhan12312@gmail.com",
            "destination": "India",
            "travellers": 999,
            "budget": 10,
            "__v": 0
        }



Get  all bookings with pagination enabled  ----->    GET /booking/:page/:perpage
URL-->https://travelopiaserver.onrender.com/booking/:page/:perpage;


Search for booking with a particular email -->"booking/email/:email/:page
GET /doctor/department/:id


Update a doctor.
PUT /doctor/:id

body = {

    "departmentId": 1,
    "name": "Dr. sunil kumar",
    "specialization": "Pediatrics",
    "availability": true,
    "qualifications": "MD, FAAP",
    "experience": "5+ years",
    "img": "https://example.com/doctors/jane-smith.jpg",
    "rating": 4.9
}

Delete a doctor.
DELETE /doctor/:id


<h3>Patients</h3>

Get all patients.
GET /patient


Get a single patient by ID.
GET /patient/:id



Create a new patient.
POST /patient

body = {

    "name": "John Doe",
    "email": "john.doe@example.com",
    "dob": "1990-01-01"
}

Update a patient.
PUT /patient/:id

body ={

    "name": "John Smith",
    "date_of_birth": "1988-05-20",
    "email": "john.smith@example.com",
    "phone_number": "+1 555-123-4567",
    "address": "123 Main St, Anytown, USA"
}

Delete a patient:
DELETE /patients/:id















