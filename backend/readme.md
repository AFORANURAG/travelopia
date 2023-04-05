<h1>Medical Appointment System API</h1>



<h5>This is an API for a medical appointment system that allows patients to schedule appointments with doctors.</h5>
<h1>Technologies</h1>

This API is built using the following technologies:

Node.js

Express.js

mysql

sequelize



<h2>API Endpoints</h2>
<h3>Authentication</h3>

Register a new user.
POST /auth/register

body = {

    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "password": "password123"
}

Login
POST /auth/login

body = {

    "email": "user@example.com",
    "password": "password123"
}

<h3>Appointments</h3>
Get all appointments.
GET /appointment


Get a single appointment by ID.
GET /appointment/:id


Get appointments by doctor ID.
GET /appointment/doctor/:id


Get appointments by patient ID.
GET /appointment/patient/:id


Create a new appointment.
POST /appointment


body = {

    "dateTime": "2023-03-01 10:00:00",
    "patientName": "kumer mane",
    "doctorId": 1,
    "patientId": 2,
    "note": "Checkup"
}


Update an appointment.
PUT /appointment/:id

body = {

    "dateTime": "2023-03-01 10:00:00",
    "patientName": "kumer mane",
    "doctorId": 1,
    "patientId": 2,
    "note": "Checkup"
}


Delete an appointment.
DELETE /appointment/:id


<h3>Doctors</h3>
Get all doctors
GET /doctor

Get a single doctor by ID.
GET /doctor/:id


Create a new doctor.
POST /doctor


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

Get doctors by department ID.
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















