import React from "react";
import { expect } from "chai";
import { shallow, configure } from "enzyme";
import { Button } from "grommet";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders a <button>", () => {
    const renderedComponent = shallow(
      <div>
        <Button />
      </div>
    );
    expect(renderedComponent.find(Button)).to.have.lengthOf(1);
  });
});
