import { TagsInput } from "@mantine/core";
import { useState } from "react";

interface SelectInputProps {
  label: string;
  placeholder: string;
  options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  placeholder,
  options,
}) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <TagsInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      data={options}
      clearable
      variant="filled"
      radius="md"
      classNames={{
        input:
          "bg-mine-shaft-800 text-white border border-mine-shaft-700",
        dropdown:
          "bg-mine-shaft-900 border border-mine-shaft-700",
      }}
    />
  );
};

export default SelectInput;
