import React from "react";
import { Button, Typography, Pane, Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";

const FilterPane = ({ showPane, setShowPane }) => {
  return (
    <div>
      <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>

        <Pane.Body className="space-y-9">
          <Typography style="h4" className="text-gray-600">
            Category
          </Typography>
          <div className="space-y-9">
            <Checkbox checked id="all" label="All" />
            <Checkbox checked id="science" label="Science" />
            <Checkbox checked id="business" label="Business" />
            <Checkbox checked id="national" label="National" />
            <Checkbox checked id="sports" label="Sports" />
            <Checkbox checked id="world" label="World" />
            <Checkbox checked id="technology" label="Technology" />
          
          <hr className="w-full" />
          <Checkbox checked id="archived" label="Include archived articles" />
          </div>
        </Pane.Body>

        <Pane.Footer className="flex items-center space-x-2">
          <Button
            icon={Check}
            size="large"
            label="Save Changes"
            onClick={() => setShowPane(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowPane(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );
};

export default FilterPane;
