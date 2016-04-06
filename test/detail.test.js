import React from 'react-native';
import { shallow } from "enzyme";
import { expect } from 'chai';
import MapView from './mocks/mapViewMock';

import mockery from 'mockery';
import { mockeryAllowedArray } from './mockeryAllowedArray';
// make mockery warnings go away
mockery.registerAllowables(mockeryAllowedArray);
mockery.enable();
mockery.registerMock('react-native-maps', MapView);

import Detail from "../components/details/detail";

describe("<Detail/>", () => {
  it("should render one ForecastList, TouchableHighlight, " +
    "and two Text views, two Views", () => {
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

    let wrapper = shallow(<Detail forecast={ mockData }
      loc={ null }
      stations={ null }
      />);
    expect(wrapper.find('ForecastList')).to.have.length(1);
    expect(wrapper.find('TouchableHighlight')).to.have.length(1);
    expect(wrapper.find('Text')).to.have.length(2);
    expect(wrapper.find('View')).to.have.length(2);
  });
});
