import React from 'react-native';
import { shallow } from "enzyme";
import { expect } from 'chai';
import MapView from './mocks/mapViewMock';

import mockery from 'mockery';
mockery.enable();
mockery.registerMock('react-native-maps', MapView);

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
    expect(wrapper.find('ListView')).to.have.length(1);
  });
});
