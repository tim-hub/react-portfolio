import React from "react";
import { configure, shallow, mount } from "enzyme";
import { ResponsiveContext, Box } from "grommet";
import { expect } from "chai";
import { App } from "../App"; // import the app component not the default container

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App component testing", function() {
  it("has an app bar", function() {
    const wrapper = mount(<App />);

    expect(
      wrapper.containsMatchingElement(ResponsiveContext.Consumer)
    ).to.equal(true);
    expect(wrapper.containsMatchingElement(Box)).to.equal(true);
  });
});
