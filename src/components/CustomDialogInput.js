import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CustomDialogInput = ({item}) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={item.label} className="text-right">
        {item.label}
      </Label>
      <Input id={item.label} defaultValue={item.value} className="col-span-3" />
    </div>
  );
};

export default CustomDialogInput;
