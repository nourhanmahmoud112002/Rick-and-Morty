import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CustomRadioGroup } from "./CustomRadioGroup";

// Debounce utility
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function SearchForm({ filterHandler, resetFilter }) {
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  // Debounced filterHandler for name only
  const debouncedFilterHandler = useMemo(() => {
    return debounce(filterHandler, 500);
  }, [filterHandler]);

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));

    debouncedFilterHandler(field, value);
  };

  const handleReset = () => {
    const initialFilters = { name: "", status: "", species: "", gender: "" };
    setFilters(initialFilters);
    resetFilter();
  };

  return (
    <Card className="w-150 p-4 m-5">
      <CardContent>
        <form onReset={handleReset} className="space-y-4">
          <h4 className="font-medium leading-none">Filter By :</h4>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name :</Label>
              <Input
                id="name"
                value={filters.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="status">Status :</Label>
              <CustomRadioGroup
                filterHandler={handleChange}
                data={["Alive", "Dead", "unknown"]}
                field="status"
                value={filters.status}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="species">Species :</Label>
              <Input
                id="species"
                value={filters.species}
                onChange={(e) => handleChange("species", e.target.value)}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="gender">Gender :</Label>
              <CustomRadioGroup
                filterHandler={handleChange}
                data={["Male", "Female", "Genderless", "unknown"]}
                field="gender"
                value={filters.gender}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="reset"
              className="bg-black text-white hover:bg-gray-800"
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
