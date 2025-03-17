
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function CustomRadioGroup({ filterHandler, data, field, value }) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(val) => filterHandler(field, val)}
      className="col-span-2 h-8"
    >
      <div className="flex items-center space-x-4">
        {data.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem value={item} id={`${field}-${item}`} />
            <Label htmlFor={`${field}-${item}`}>{item}</Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
