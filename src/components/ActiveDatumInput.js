import React, { Component } from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/lib/Creatable'

const Container = styled.div`
  position: fixed;
  bottom: 0.5em;
  left: 0.5em;
  right: 3.5em;
`

const p = (variable) => (console.log(variable, eval(variable)))

const option = label => ({
  label,
  value: label//.toLowerCase().replace(/\W/g, ''),
})

const createOptions = strings => {
  if (!strings) return []
  const options = strings.map( string => ({
    label: string,
    value: string,//.toLowerCase().replace(/\W/g, ''),
  }))
  return options
}

const convertOptionsToStrings = options => {
  const strings = options.map( option => {
    return option.value
  })
}

const options = createOptions([
  'yey',
  'bravo',
  'eyyy',
])

class ActiveDatumInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }
  handleInputChange = (inputValue) => {
    this.setState({ inputValue })
  }
  handleKeyDown = (e) => {
    if (e.keyCode === 13 && !this.state.inputValue) { // Enter
      this.props.onSubmit()
    } else {
      this.setState({ inputValue: e.target.value })
    }
  }
  render = () => (
    <Container>
      <CreatableSelect
        isMulti
        options={options}
        menuPlacement='top'
        value={createOptions(this.props.tags)}
        inputValue={this.state.inputValue}
        onChange={this.props.onChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
      />
    </Container>
  )
}

export default ActiveDatumInput
