import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import styled from 'styled-components'

const View = styled(Paper)`
  display: flex;
  white-space: nowrap;

  padding: 0.25em;
`
const Tags = styled.div`
  display: inline-block;
  justify-content: flex-start;
  overflow: scroll;
`
const Delete = styled(DeleteIcon)`
  margin: 0;
  padding: 0;
`
const IconButton = styled(Button)`
  margin: 0;
  padding: 0;
`

const tag_names = [
  'yey',
  'wide-arm push-ups',
  'bravo',
  'and another',
  'mooore',
]

const DatumView = props => (
  <View classes='rounded'>
    <Tags>
      {tag_names.map( name => (
        <Button size='small'>{name}</Button>
      ))}
    </Tags>
    <IconButton variant='outlined' size='small'><Delete /></IconButton>
  </View>
)

export default DatumView
