import { Box, Heading, Text,Button } from "@chakra-ui/react";
import axios from "axios"
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Link from 'next/link';

export default function Destination({ initialData }) {
  const router = useRouter();
  const [page,setPage] = useState(1);
  const [perpage,setPerPage]  = useState(4)
//   console.log(router)

console.log(initialData)
//   const { destination } = router.query;
  return (
    <> 
    <div style={{textAlign:"center",marginTop:"50px"}}>
    <Button variant={"outline"} _hover={{backgroundColor:"blackAlpha.500",color:"whiteAlpha.700"}} >Next Page</Button>
<Button _hover={{backgroundColor:"blackAlpha.500",color:"whiteAlpha.700"}} variant={"outline"} ml={10}>Prev Page</Button>
    </div>
    <div id="bookingscontainer">
    {initialData.map((el)=>{
        return (  <div>
           
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
  