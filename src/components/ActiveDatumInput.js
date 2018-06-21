import React, { Component } from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/lib/Creatable'

const Container = styled.div`
  position: fixed;
  bottom: 0.5em;
  left: 0.5em;
  right: 3.5em;
`

const option = label => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})
const options = [
  option('yey'),
  option('bravo'),
]

export default class CreatableMulti extends Component {
  render() {
    return (
      <Container>
        <CreatableSelect
          isMulti
          options={options}
          menuPlacement='top'
        />
      </Container>
    )
  }
}
