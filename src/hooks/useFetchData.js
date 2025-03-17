import { useState,useEffect } from "react";
import GetData from "@/data/GetData";
import { charactersUrl } from "@/app/constants";

const useFetchData=()=>{

    const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    gender: "",
    status: "",
    species: "",
  });

  useEffect(() => {
    async function getData() {
      try {
        const query = new URLSearchParams();

        if (filters.name?.trim()) query.append("name", filters.name.trim());
        if (filters.gender?.trim())
          query.append("gender", filters.gender.trim());
        if (filters.status?.trim())
          query.append("status", filters.status.trim());
        if (filters.species?.trim())
          query.append("species", filters.species.trim());

        const queryString = query.toString();

        const response = await GetData(
          queryString ? `${charactersUrl}?${queryString}` : charactersUrl
        );
        setData(response.results || []);
      } catch (error) {
        console.log(error.message);
        setData([]);
      }
    }

    getData();
  }, [filters]);

  const filterHandler = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const resetFilter = () => {
    setFilters({ name: "", gender: "", status: "", species: "" });
  };


  return {data,setData,filterHandler,resetFilter};

}
export default useFetchData;