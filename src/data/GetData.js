import axios from "axios";


const GetData=async(url)=>{

    // const url="https://rickandmortyapi.com/api/character";
    let response;
   

   try {
    response= await axios.get(url);
    
    return response.data;
   } catch (error) {
    console.log(error.message);
    return null;
    
   }



}
export default GetData;