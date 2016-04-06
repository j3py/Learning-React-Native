import React from 'react-native';
import { shallow } from "enzyme";
import { expect } from 'chai';

import mockery from 'mockery';
import { mockeryAllowedArray } from './mockeryAllowedArray';
// make mockery warnings go away
mockery.registerAllowables(mockeryAllowedArray);
mockery.enable();
mockery.registerMock('image!cloud','../ios/WeatherProject/Images.xcassets/cloud.imageset/cloud.png');
mockery.registerMock('image!cold_cloud','../ios/WeatherProject/Images.xcassets/cold_cloud.imageset/cold_cloud.png');
import MapView from './mocks/mapViewMock';
mockery.registerMock('react-native-maps', MapView);

import WeatherBase from "../components/weatherBase";

describe("<WeatherBase/>", () => {
  it("should render seven components", () => {
    //let mockData = {};

    let wrapper = shallow(<WeatherBase />);
    expect(wrapper.find('View')).to.have.length(2);
    expect(wrapper.find('Text')).to.have.length(1);
    expect(wrapper.find('TextInput')).to.have.length(1);
    expect(wrapper.find('Image')).to.have.length(1);
    expect(wrapper.find('AnimatedComponent')).to.have.length(1);
    expect(wrapper.find('CurrentWeather')).to.have.length(1);
  });
});
