import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe(`<Accordian />`, () => {
    it('renders without errors when props is empty', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty ul', () => {
        const tree = renderer.create(<Accordian />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders with no sections active', () => {
        const tree = renderer.create(<Accordian sections={sectionsData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders empty given no tabs', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })

    it('renders with all sections closed by default', () => {
        const wrapper = shallow(<Accordian sections={sectionsData}/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('expands section on click', () => {
        const wrapper = shallow(<Accordian sections={sectionsData} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('only has one section open after multiple clicks', () => {
        const wrapper = shallow(<Accordian sections={sectionsData} />)
        wrapper.find('button').at(2).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

const sectionsData = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]