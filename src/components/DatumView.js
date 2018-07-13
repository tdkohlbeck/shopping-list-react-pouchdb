import React  from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import styled from 'styled-components'

const View = styled(Paper)`
  display: flex;

  justify-content: space-between;
  padding: 0.25em;
  margin-bottom: 0.5em;
`
const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Delete = styled(DeleteIcon)`
  margin: 0;
  padding: 0;
`
const IconButton = styled(Button)`
  margin: 0;
  padding: 0;
`

const DatumView = props => (
  <View>
    <Tags>
      {props.tags.map( (name, i) => (
        <Button key={i} size='small'>{name}</Button>
      ))}
    </Tags>
    <IconButton variant='outlined' size='small'><Delete /></IconButton>
  </View>
)

export default DatumView
