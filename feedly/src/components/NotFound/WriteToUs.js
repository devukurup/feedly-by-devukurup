import React, { useContext, useState } from "react";
import { Button, Typography, Input, Textarea } from "@bigbinary/neetoui/v2";
import filterContext from "contexts/filter";
import ReactDOM from "react-dom";
import mailApi from "apis/mail";

const WriteToUs = () => {
  const { setWriteToUsModal } = useContext(filterContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = () => {
    const query = new Object();
    query.name = name;
    query.email = email;
    query.message = message;
    mailApi.sendMail(query);
    setWriteToUsModal(false);
  };
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full"
      onClick={() => setWriteToUsModal(false)}
    >
      <div
        className="relative top-48 mx-auto p-5 w-6/12 bg-white space-y-9 "
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Typography style="h1">Can't find what you came for?</Typography>
          <Typography style="body2">
            Write to us about which category interests you and we will fetch
            them for for you daily, for free.
          </Typography>
        </div>
        <div className="flex space-x-5">
          <Input
            label="Name"
            placeholder="Oliver Smith"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="oliver@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Textarea
          className="w-auto h-28 "
          label="Message"
          placeholder="Write your message here."
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="space-x-2">
          <Button label="Submit" style="primary" onClick={handleSave} />
          <Button
            label="Cancel"
            style="text"
            onClick={() => setWriteToUsModal(false)}
          />
        </div>
      </div>
    </div>,
    document.getElementById("search-portal-root")
  );
};

export default WriteToUs;
