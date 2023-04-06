import { Box, Heading, Text,Button,Input,FormLabel,Select} from "@chakra-ui/react";
import axios from "axios"
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Link from 'next/link';
const { v4: uuidv4 } = require('uuid');
export default function Destination({ initialData }) {
    const [data,setData] = useState(initialData);
  const router = useRouter();
  const [page,setPage] = useState(1);
  const [perpage,setPerPage]  = useState(4)
  const [email,setEmail] = useState();
  const [travellers,setTravellers] = useState();
//   console.log(router)

function fetchMoreData(){
    console.log(perpage)
    axios.get(`https://travelopiaserver.onrender.com/booking/${page}/${perpage}`).then((res)=>{
        // console.log(res)
    setData(res.data.allBookings);
    }).catch((err)=>{console.log(err)})
}

useEffect(()=>{
fetchMoreData()
},[page,perpage])


useEffect(()=>{
    let debounce  = debouncing(cb1,2000);
    debounce(email);
},[email])


console.log(initialData)
function increamentPageNumber(){
    if(page<5){
        setPage(page+1)
    }
}
function decreamentPageNumber(){
    if(page>1){
        setPage(page-1)
    }
}

function cb1(...args){
    // https://travelopiaserver.onrender.com/booking/email/farhan12312@gmail.com/1
    let email = args
console.log(args)
    axios.get(`https://travelopiaserver.onrender.com/booking/email/${email[0]}/1`).then((res)=>{
        // console.log(res)
    setData(res.data.allBookings);
    }).catch(err=>console.log(err))
    
}

function debouncing(cb1,delay=1000){
let timeoutid;
return (...args)=>{
    clearTimeout(timeoutid);
    timeoutid = setTimeout(()=>{cb1(...args)},delay)
}
}

function searchWithEmail(e){
    setEmail(e.target.value)
}


function sortByTravellers(e,cb){
    setTravellers(e.target.value)
    cb()
}
function cb(){
   let sortingIndex  = +travellers
   axios.get(`https://travelopiaserver.onrender.com/booking/sort/${sortingIndex}/travellers/1`).then((res)=>{
    // console.log(res)
setData(res.data.allBookings);
}).catch((err)=>{console.log(err)}) 
}
//   const { destination } = router.query;
  return (
    <> 
    <FormLabel htmlFor="Numberofpages" fontFamily={"cursive"}>
   Number of pages  per page
    </FormLabel>
    <Input  type="number" onChange={(e)=>{setPerPage(e.target.value)}} placeholder="Number of pages per page" id="Numberofpages" value={perpage}/>
    
    <Select  mt ={5} defaultValue={"0"} value={travellers} onChange={(e)=>{
        
        sortByTravellers(e,cb) 
    }
   
    }>
    <option value="">Sort by number of travellers</option>
    <option value="1">Ascending</option>
    <option value="-1">Descending</option>
    </Select>

<Input type="email  " onChange={searchWithEmail} mt={5} placeholder="Search with email" />

    <div style={{textAlign:"center",marginTop:"50px"}}>
    <span>Page Number is {page}</span>
    <Button variant={"outline"} _hover={{backgroundColor:"blackAlpha.500",color:"whiteAlpha.700"}} ml={10} onClick = {increamentPageNumber}>Next Page</Button>
<Button _hover={{backgroundColor:"blackAlpha.500",color:"whiteAlpha.700"}} variant={"outline"} ml={10} onClick={decreamentPageNumber}>Prev Page</Button>
    </div>
    <div id="bookingscontainer">
    {data?.map((el)=>{
        return (  <div key = {uuidv4()}>
           
        <BookingCard  {...el}/>
          </div>)
       })} 
    </div>
  
  </>
   
  );
}

export async function getServerSideProps(context) {
    console.log(context)
    const { page, perpage } = context.query;
    // Fetch the initialData for the current page
    const res = await fetch(`https://travelopiaserver.onrender.com/booking/1/4`);
    const data = await res.json();
    // Calculate the total number of pages
let initialData = data.allBookings;
// let initialData = allBooking
  console.log("yeah hai initial data",initialData)
    // Pass the fetched initialData and pagination info as initialData to the page component
    return { props: {initialData} };
  }




  const BookingCard = ( booking ) => {
    return (


      <Box
     
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bgGradient="linear-gradient(to bottom, #1A1A1A, #16213E)"
        p={4}
        mb={4}
      >
        <Heading as="h3" size="md" mb={2}>
          {booking.destination}
        </Heading>
        <Text mb={2}>
          Name: {booking.name} 
        </Text>
        <Text mb={2}>
        Email: ({booking.email})
      </Text>
        <Text mb={2}>Total Travellers: {booking.travellers}</Text>
        <Text mb={2}>
          Budget per Person: ${booking.budget.toFixed(2)}
        </Text>
      </Box>
    );
  };
  