import React, { Component } from 'react'
import CreatableSelect, { components } from 'react-select/lib/Creatable'
import * as Animated from 'react-select/lib/animated'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0.5em;
  left: 0.5em;
  right: 3.5em;
`

function createOptions(strings) {
  return strings.map( string => ({
    label: string,
    value: string,//.toLowerCase().replace(/\W/g, ''),
  }))
}

export default class ActiveDatumInput extends Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
  }
  onInputChange = inputValue => this.setState({ inputValue })
  checkIfSubmit = e => {
    if (e.keyCode === 13 && !this.state.inputValue) { // Enter
      this.props.onSubmit()
    }
  }
  render = () => (
    <Container>
      <CreatableSelect
        isMulti
        options={createOptions(this.props.tagOptions)}
        menuPlacement='top'
        components={Animated}
        value={createOptions(this.props.tags)}
        inputValue={this.state.inputValue}
        onChange={this.props.onChange}
        onInputChange={this.onInputChange}
        onKeyDown={this.checkIfSubmit}
        menuIsOpen={true}
        styles={{
          menuList: base => ({
            ...base,
            display: 'flex',
            flexWrap: 'wrap',
          }),
          option: base => ({
            ...base,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '10em',
            border: '1px solid',
            borderColor: 'lightgrey',
            borderRadius: '.25em',
            margin: '.1em',
          })
        }}
      />
    </Container>
  )
}
