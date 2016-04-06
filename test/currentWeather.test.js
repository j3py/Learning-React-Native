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

import CurrentWeather from "../components/currentWeather";

describe("<CurrentWeather/>", () => {
  it("should render one View and three Text components", () => {
    let mockData = {
      flavor2: 'And it will last you',
      current: {
        main: 'It\'s going to be grey.',
        description: 'the rest of your life.',
        temp: 'Groundhog Day',
        loc: {
          latitude: null,
          longitude: null,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }
      }
    };

    let wrapper = shallow(<CurrentWeather
      flavor2={ mockData.flavor2 }
      current={ mockData.current } />);
    expect(wrapper.find('View')).to.have.length(1);
    expect(wrapper.find('Text')).to.have.length(3);
  });
});
