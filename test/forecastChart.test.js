import React from 'react';
import { shallow, mount } from "enzyme";
import { expect } from 'chai';
import ForecastChart from "../components/details/forecast/forecastChart";

describe("<ForecastChart/>", () => {
  it("should render one ListView", () => {
    let mockData = { list: [
        {
          dt_txt: "Shrug?",
          weather: [{description: "Cautiously optimistic."}],
          main: {
            temp: 70.00,
            humidity: 0.00,
            pressure: 1000.00
          }
        },
        {
          dt_txt: "Nothing",
          weather: [{description: "Staring into the void."}],
          main: {
            temp: 0.00,
            humidity: 0.00,
            pressure: 0.00
          }
        },
        {
          dt_txt: "printf",
          weather: [{description: "Shiver in eternal darkness."}],
          main: {
            temp: 0.00,
            humidity: 1000.00,
            pressure: 10000.00
          }
        }
      ]};

    let wrapper = shallow(<ForecastChart forecast={ mockData } />);
    console.log(wrapper.debug());
    expect(wrapper.find('ListView')).to.have.length(1);
  });
});
