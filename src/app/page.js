"use client";
import RickAndMortyCard from "@/components/Card";
import DeleteCharacter from "@/data/DeleteCharacter";
import { SearchForm } from "@/components/SearchForm";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import emptyAnimation from "@/assets/empty.json";
import useFetchData from "@/hooks/useFetchData";

export default function Home() {
   const {data,setData,filterHandler,resetFilter}=useFetchData();
  const onDeleteHandler = async (id) => {
    await DeleteCharacter(id);
    setData((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-gray-900 p-5">
      <div className="flex justify-center">
        <SearchForm filterHandler={filterHandler} resetFilter={resetFilter} />
      </div>

      <div
        id="main"
        className="m-5 grid grid-cols-3 gap-2 gap-y-5 justify-evenly"
      >
        {data.length > 0 ? (
          data.map((item) => (
            <RickAndMortyCard
              key={item.id}
              data={item}
              onDelete={onDeleteHandler}
              onEdit={() => console.log("edit")}
            />
          ))
        ) : (
          <div className="col-span-3 flex flex-col items-center text-white mt-10">
            <Lottie animationData={emptyAnimation} className="w-64 h-64" />
            <p className="mt-5 text-xl font-semibold">
              No characters found! Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
