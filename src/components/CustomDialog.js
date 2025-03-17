import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useEpisodeName from "@/hooks/useEpisodeName";
import CustomDialogInput from "./CustomDialogInput";

export function CustomDialog({ openDialog, setOpenDialog, data }) {
  const episodeName = useEpisodeName(data);
  const values = [
    { label: "Name", value: data.name },
    { label: "Status", value: data.status },
    { label: "Species", value: data.species },
    { label: "Gender", value: data.gender },
    { label: "Last Loc", value: data.location.name },
    { label: "First seen in", value: episodeName },
  ];
  return (
    <Dialog open={openDialog} onOpenChange={(open) => setOpenDialog(open)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Character</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {values.map((item) => (
            <CustomDialogInput item={item} key={item.label} />
          ))}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpenDialog(false)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
