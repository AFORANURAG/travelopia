# Travelopia
<h1>
Travelopia is the world's largest collection of EXPERIENTIAL travel brands. Their award-winning travel brands create unique experiences for their guests around the world.
</h1>

# Note: 
<h3>
This is an app built with nextjs and it is SSR bydefault.So when you start the application , it might take some time to start but once it is started,the experience will be very smooth . To see the live demonstration of this project , just navigate to the project presentation section below.
</h2>


Prerequisites
Before you start, please make sure that you have the following installed on your machine:

- Node.js (version 14 or higher)
- NPM (Node Package Manager)
- Git
- Your favorite code editor (e.g., Visual Studio Code, Sublime Text, Atom,neovim or vim etc)

## Project Presentation

To see the full project presentation, please visit my GitHub repository at:

[https://github.com/AFORANURAG/travelopia](https://github.com/AFORANURAG/travelopia)

There you will find the full codebase and an explanation of the entire project, as well as:

- A link to the deployed frontend: [https://travelopia-seven.vercel.app/](https://travelopia-seven.vercel.app/)
- A link to the deployed backend: [https://travelopiaserver.onrender.com](https://travelopiaserver.onrender.com)
- A video presentation of the project: [https://drive.google.com/file/d/17nIEihKBxoA1PSBCEKBrdAc7SdzD-Yah/view?usp=sharing](https://drive.google.com/file/d/17nIEihKBxoA1PSBCEKBrdAc7SdzD-Yah/view?usp=sharing)


## Tech Stack

<div align="center" display="flex">
  
   <img src="https://cdn.svgporn.com/logos/nextjs.svg" height="30" style="margin-left: 20" />
   <img src="https://cdn.svgporn.com/logos/mongodb.svg" height="40" style="margin-left: 20px"/>
   <img src="https://cdn.svgporn.com/logos/express.svg" height="40" style="margin-left: 100"/>
   <img src="https://cdn.svgporn.com/logos/nodejs.svg" height="50" />

</div>


# Step wise instruction

# Table of Contents
- Demo
- Features
- Usage
- Demo

Check out the live demo of Travelopia at https://drive.google.com/file/d/17nIEihKBxoA1PSBCEKBrdAc7SdzD-Yah/view?usp=sharing

Features
Travelopia provides the following features:
- You can book a destination.
- You can see yours and others booked destinations.
- you can sort the bookings in ascending and descending order of total number of travellers.
- you can search the bookings based on the email, the searching functionality is implemented in serverside, to lower the load on client side and it searching functionality uses  <b> debouncing</b> to make itself more optimised.
- Number of bookings per page is customizable.So you can have 4 bookings perpage ,or 8 booking perpage but at max 16 and minimum 1.

Usage
- First Open the deployed/live link (https://travelopia-seven.vercel.app/).
![Screenshot from 2023-04-08 02-14-04](https://user-images.githubusercontent.com/108891203/230676484-4a2a968e-e04b-4abe-8715-0a7aaed69a52.png)

- Click on Travel, And after clicking on it , you will be able to see this page.
- 
![Screenshot from 2023-04-08 02-13-00](https://user-images.githubusercontent.com/108891203/230676505-7d0cbe4d-998f-464a-8b36-8786a05e1a19.png)
- Start Filling that form.While filling that form , keep the below things in mind.
<ul>
  
  <li>Number of traveller cannot be less than 1 and cannot be more than 1000</li>
  <li>Budget per person has to be more than 10 dollars and less than 1 million dollars.</li>
  <li>All these limits are set to avoid the exploitation of the system.</li>
  <li>Enter the correct and valid email and your name  should have atleast one character and should have a least length of 4.</li>
  <li><Validations are performed in frontend and backend.In The backend, I am using regex,and middlewares for validation of the form data.
</ul>
- If you fill wrong/invalid information, A warning model would be generated.
![Screenshot from 2023-04-08 02-23-26](https://user-images.githubusercontent.com/108891203/230677467-7f2e9b5b-7ca3-4502-987f-f397e2d55ded.png)

- On Filling your information correctly, This modal will show up. 
![Screenshot from 2023-04-08 02-34-57](https://user-images.githubusercontent.com/108891203/230678902-12b5eedb-da1f-49bc-8299-be5aec13e53f.png)



# Run in you local machine

1. git clone https://github.com/AFORANURAG/travelopia.git

2. Navigate to the root folder of the app:
   cd frontend or cd backend

3. Install the required dependencies for the backend and frontend 
   npm install

4. for starting backend in your local machine, type (npm start) in the backend directory

5. Open your web browser and navigate to http://localhost:8080 to see the backend app running.

6. for starting frontend, type (npm run dev) in the frontendend directory.

7. Open your web browser and navigate to http://localhost:3000 to see the frontend app running.
 


