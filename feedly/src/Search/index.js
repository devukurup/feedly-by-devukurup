import React from "react";
import ReactDOM from "react-dom";
import { Input, Typography } from "@bigbinary/neetoui/v2";
import { Search, Down } from "@bigbinary/neeto-icons";

function SearchModal() {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-1/3 mx-auto p-5 w-1/3">
        <Input className="focus:outline-none focus:ring focus:border-green-300" prefix={<Search size={15} color="#1e1e20" />} placeholder="Search for an article" suffix={<Down size={15} color="#1e1e20"  />} />
      </div>
    </div>,
    document.getElementById("search-portal-root")
  );
}

export default SearchModal;
