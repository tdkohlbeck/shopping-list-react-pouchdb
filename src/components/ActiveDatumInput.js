import React, { Component } from 'react'
import CreatableSelect, { components } from 'react-select'
import * as Animated from 'react-select/lib/animated'
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'

const Container = styled.div`
display: block;
  position: fixed;
  bottom: 0.5em;
  left: 0.5em;
  right: 3.5em;
`
const FocusBlocker = Container.extend`
display: ${props => props.isHidden ? 'none' : 'block'};
height: 3em;
`
const BackgroundDimmer = styled.div`
display: block;
position: fixed;
width: 100%;
height: 100%;
bottom: 0;
left: 0;
background-color: ${props => props.isDimming ? '#00000060' : 'transparent'};
`

function createOptions(strings) {
  return strings.map( string => ({
    label: string,
    value: string,//.toLowerCase().replace(/\W/g, ''),
  }))
}

const MultiValueLabel = props => {
    return (
	<Tag>
	    <components.MultiValueLabel {...props} />
	</Tag>
    )
}

class Tag extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    dropdownOpen: false
	};
    }

    toggle() {
	this.setState({
	    dropdownOpen: !this.state.dropdownOpen
	});
    }

    render() {
	return (
	        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
		<DropdownToggle caret>
		Button Dropdown
	    </DropdownToggle>
		<DropdownMenu>
		<DropdownItem header>Header</DropdownItem>
		<DropdownItem disabled>Action</DropdownItem>
		<DropdownItem>Another Action</DropdownItem>
		<DropdownItem divider />
		<DropdownItem>Another Action</DropdownItem>
		</DropdownMenu>
		</ButtonDropdown>
	);
    }
}

export default class ActiveDatumInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
	isFocused: false,
	isMenuOpen: false,
	isFocusBlocked: true,
    }
  }
    onInputChange = inputValue => {
	this.setState({ inputValue })
	console.log('change')
    }
  checkIfSubmit = e => {
      if (e.keyCode === 13 && !this.state.inputValue) { // Enter
	  this.setState({isMenuOpen: false})
      this.props.onSubmit()
    }
  }
    render = () => (
	<React.Fragment>

	    <Container>
	    <BackgroundDimmer
	isDimming={this.state.isMenuOpen}
	onClick={ () => {
	    this.setState({ isMenuOpen: false, isFocusBlocked: true })
	}} />
      <CreatableSelect
       isMulti
       options={createOptions(this.props.tagOptions)}
       menuPlacement='top'
	components={{Animated, MultiValueLabel}}
       value={createOptions(this.props.tags)}
       inputValue={this.state.inputValue}
       onChange={this.props.onChange}
       onInputChange={this.onInputChange}
       onKeyDown={this.checkIfSubmit}
	menuIsOpen={this.state.isMenuOpen}
	blurInputOnSelect
	onFocus={() => console.log('click')}
        styles={{
          menuList: base => ({
            ...base,
            display: 'inline-flex',
            flexWrap: 'wrap',
	    justifyContent: 'center', 
          }),
          option: base => ({
            ...base,
	    flex: '1 0 auto',
	    textAlign: 'center',
            border: '1px solid',
            borderColor: 'lightgrey',
            borderRadius: '.25em',
            margin: '.1em',
	    width: 'auto',
          })
        }}
      />
	    </Container>
	    <FocusBlocker
	isHidden={!this.state.isFocusBlocked}
	onBlur={() => this.setState({isFocusBlocked: true})}
	      onClick={() => {
	        this.setState({isFocusBlocked: false, isMenuOpen: true})
	}}
	    />
	    </React.Fragment>
  )
}
