import React from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  options: Option[];
  selected?: string;
  placeholder?: string;
  onChange: (e: any) => void;
};

export default function Dropdown({
  label,
  options,
  selected,
  placeholder,
  onChange,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-5">
      <p className="text-sm font-medium text-gray-900 w-10">{label}</p>
      <select
        id={label}
        value={selected}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
