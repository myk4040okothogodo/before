import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

//Note how with shallow render you search for the latest component tag
it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(0);
});

//Note how with mount you search for the final rendered HTML since it generates the final DOM
//We also need to pull in React Routers memoryRouter for testing since the Header expects to have React Routers props passed in

it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
});
