import React from "react";
import imag from "assets/error.svg";
import { Button, Typography } from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";
import { useHistory } from "react-router-dom";

const ErrorBoundary = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col justify-center items-center space-y-5 pt-40">
      <img className="w-auto mx-auto" src={imag} alt="Error Boundary" />
      <div>
        <Typography style="h3" className="text-center">
          You have landed somewhere
        </Typography>
        <Typography style="h3" className="text-center">
          unknown.
        </Typography>
      </div>
      <Button
        iconPosition="left"
        icon={Home}
        style="secondary"
        label="Take me home"
        onClick={() => history.push(`/`)}
      />
    </div>
  );
};

export default ErrorBoundary;
