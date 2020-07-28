import { shallow } from "enzyme";
import * as React from "react";
import Differential from "./Differential";
import DifferentialSelector from "./DifferentialSelector";

it("should use default values when first deploying", () => {
  const wrapper = shallow(
    <DifferentialSelector
      deploymentEvent="install"
      deployedValues=""
      defaultValues="foo"
      appValues="bar"
    />,
  );
  expect(wrapper.find(Differential).props()).toMatchObject({
    title: "Difference from chart defaults",
    oldValues: "foo",
    newValues: "bar",
  });
});

it("should use deployed values when upgrading", () => {
  const wrapper = shallow(
    <DifferentialSelector
      deploymentEvent="upgrade"
      deployedValues="foobar"
      defaultValues="foo"
      appValues="bar"
    />,
  );
  expect(wrapper.find(Differential).props()).toMatchObject({
    title: "Difference from deployed version",
    oldValues: "foobar",
    newValues: "bar",
  });
});
