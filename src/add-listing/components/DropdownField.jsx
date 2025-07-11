import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function DropdownField({ item, handleInputChange, value }) {
  return (
    <Select
      onValueChange={(val) => handleInputChange(item.name, val)}
      value={value || ""}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`Select ${item.label}`} />
      </SelectTrigger>
      <SelectContent>
        {item.options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default DropdownField;
