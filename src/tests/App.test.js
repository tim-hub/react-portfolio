import React from "react";
import { Provider } from "react-redux";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ResponsiveContext, Box } from "grommet";
import { expect } from "chai";

import store from "../redux/store";
import App from "../App"; // import the app component not the default container

configure({ adapter: new Adapter() });

describe("App component testing", function() {
  it("has an app bar", function() {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(
      wrapper.containsMatchingElement(ResponsiveContext.Consumer)
    ).to.equal(true);
    expect(wrapper.containsMatchingElement(Box)).to.equal(true);
  });
});
