import useEpisodeName from "@/hooks/useEpisodeName";

const CustomCardContent = (props) => {
 
  
  const episodeName=useEpisodeName(props.data);
  
  return (
    <div className="p-0">
      <h1 className="text-2xl font-bold text-white py-1">{props.data.name}</h1>
      <p className="text-white p-1">
        {props.data.status} - {props.data.species} - {props.data.gender}
      </p>
      <p className="text-gray-400 p-1">Last Known Location : <span className="text-white ">{props.data.location.name}</span></p>
      <p className="text-gray-400 p-1">First seen in : <br/><span className="text-white ">{episodeName}</span></p>
    </div>
  );
};
export default CustomCardContent;
