
import { useState,useEffect } from "react";
import GetData from "@/data/GetData";
const useEpisodeName=(data)=>{
    const [episodeName,setEpisodeName]=useState("");
  useEffect(()=>{
    async function getEpisodeName(){
      const response= await GetData(data.episode[0]);
      
      setEpisodeName(response.name);
    }
    getEpisodeName();
  },[data.episode]);

  return episodeName;
}

export default useEpisodeName;