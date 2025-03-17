import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import CardImage from "./CardImage";
import CustomCardContent from "./CustomCardContent";
import { CustomDialog } from "./CustomDialog";
import { useState } from "react";
const RickAndMortyCard = ({ data, onEdit, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Card className="w-full max-w-sm bg-stone-800 shadow-lg rounded-2xl border border-gray-200 h-[280px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl group relative">
      <CardContent className="p-1 py-0 h-full">
        <div className="grid grid-cols-2 justify-evenly h-full">
          <CardImage image={data.image} />
          <CustomCardContent data={data} />
        </div>
        {/* Edit/Delete Buttons */}
        <div className="absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setOpenDialog(true)}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(data.id)}
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
          >
            <Trash size={16} />
          </button>
        </div>
        {openDialog && (
          <CustomDialog
            setOpenDialog={setOpenDialog}
            openDialog={openDialog}
            data={data}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default RickAndMortyCard;
