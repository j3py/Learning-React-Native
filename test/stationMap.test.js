import React from 'react-native';
import { shallow } from "enzyme";
import { expect } from 'chai';
import MapView from './mocks/mapViewMock';

import mockery from 'mockery';
mockery.enable();
mockery.registerMock('react-native-maps', MapView);

import StationMap from "../components/details/stationMap/stationMap";

describe("<StationMap/>", () => {
  it("should render one MapView", () => {
    let mockData = [
      { station: {
          name: 'outer space',
          coord: { lat: 0.00, lon: 0.00 }
        },
        distance: 30.00
      }
    ];

    let wrapper = shallow(
      <StationMap loc={ null } stations={ mockData } />);
    expect(wrapper.find('MapView')).to.have.length(1);
  });
});
