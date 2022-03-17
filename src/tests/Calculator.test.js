import React from "react";
import Calculator from "../containers/Calculator";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.find("#number4");
    const runningTotal = container.find("#running-total");

    button4.simulate("click");

    expect(runningTotal.text()).toEqual("4");
  });

  it("should add 1 to 4 and get 5", () => {
    const runningTotal = container.find("#running-total");
    const button1 = container.find("#number1");
    const button4 = container.find("#number4");
    const addButton = container.find("#operator-add");
    const equalButton = container.find("#operator-equals");

    button1.simulate("click");
    addButton.simulate("click");
    button4.simulate("click");
    equalButton.simulate("click");

    expect(runningTotal.text()).toEqual("5");
  });

  it("should subtract 4 from 7 and get 3", () => {
    const runningTotal = container.find("#running-total");
    const button4 = container.find("#number4");
    const button7 = container.find("#number7");
    const subtractButton = container.find("#operator-subtract");
    const equalButton = container.find("#operator-equals");

    button7.simulate("click");
    subtractButton.simulate("click");
    button4.simulate("click");
    equalButton.simulate("click");

    expect(runningTotal.text()).toEqual("3");
  });

  it("should be able to multiply 3 by 5 and get 15", () => {
    const runningTotal = container.find("#running-total");
    const button3 = container.find("#number3");
    const button5 = container.find("#number5");
    const multiplyButton = container.find("#operator-multiply");
    const equalButton = container.find("#operator-equals");

    button3.simulate("click");
    multiplyButton.simulate("click");
    button5.simulate("click");
    equalButton.simulate("click");

    expect(runningTotal.text()).toEqual("15");
  });

  it("should be able to divide 21 by 7", () => {
    const runningTotal = container.find("#running-total");
    const button2 = container.find("#number2");
    const button1 = container.find("#number1");
    const button7 = container.find("#number7");
    const divideButton = container.find("#operator-divide");
    const equalButton = container.find("#operator-equals");

    button2.simulate("click");
    button1.simulate("click");
    divideButton.simulate("click");
    button7.simulate("click");
    equalButton.simulate("click");

    expect(runningTotal.text()).toEqual("3");
  });

  it("should concatenate multiple button clicks", () => {
    const runningTotal = container.find("#running-total");
    const button3 = container.find("#number3");
    const button4 = container.find("#number4");
    const button5 = container.find("#number5");
    const button6 = container.find("#number6");

    button3.simulate("click");
    button4.simulate("click");
    button5.simulate("click");
    button6.simulate("click");

    expect(runningTotal.text()).toEqual("3456");
  });

  it("should be able to chain multiple operators", () => {
    const runningTotal = container.find("#running-total");
    const button3 = container.find("#number3");
    const addButton = container.find("#operator-add");
    const divideButton = container.find("#operator-divide");
    const equalButton = container.find("#operator-equals");
    const multiplyButton = container.find("#operator-multiply");

    button3.simulate("click");
    addButton.simulate("click");
    button3.simulate("click");
    divideButton.simulate("click");
    button3.simulate("click");
    multiplyButton.simulate("click");
    button3.simulate("click");
    equalButton.simulate("click");

    expect(runningTotal.text()).toEqual("6");
  });

  it("should clear running total without not affecting calculation", () => {
    const runningTotal = container.find("#running-total");
    const button2 = container.find("#number2");
    const addButton = container.find("#operator-add");
    const equals = container.find("#operator-equals");
    const clearButton = container.find("#clear");

    button2.simulate("click");
    addButton.simulate("click");
    button2.simulate("click");
    addButton.simulate("click");
    button2.simulate("click");
    clearButton.simulate("click");
    equals.simulate("click");

    expect(runningTotal.text()).toEqual("4");
  });
});
