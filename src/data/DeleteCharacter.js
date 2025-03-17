


import { charactersUrl } from "@/app/constants";
import axios from "axios";

const DeleteCharacter = async (id) => {
    try {
        const response = await axios.delete(`https://rickandmortyapi.com/api/character/${id}`);
        console.log("Deleted:", response.data);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
};

export default DeleteCharacter;