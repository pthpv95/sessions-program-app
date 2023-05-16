import React from "react";
import Dropdown from "../common/select";
import { useRouter } from "next/router";
import { shortTitleOptions, statusOptions } from "@/common";

type Props = {
  onChange: (field: string, value: string) => void;
};

function FilterSection({ onChange }: Props) {
  const router = useRouter();
  const { status, short_title } = router.query;

  return (
    <div className="mb-10 flex w-fit gap-10">
      <Dropdown
        label="Short title"
        options={shortTitleOptions}
        placeholder="All"
        selected={short_title as string}
        onChange={(e) => {
          onChange("short_title", e.target.value);
        }}
      />
      <Dropdown
        label="Status:"
        options={statusOptions}
        placeholder="All"
        selected={status as string}
        onChange={(e) => {
          onChange("status", e.target.value);
        }}
      />
    </div>
  );
}

export default FilterSection;
