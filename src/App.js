import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import MoodIcon from '@material-ui/icons/Mood'

const Item = props => (
  <ListItem button>
    <ListItemIcon>
      <ThreeDRotationIcon />
    </ListItemIcon>
    <ListItemText>
      Yey?
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton>
        <MoodIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.text.length) { return }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }
    this.setState(state => (
      {
        items: state.items.concat(newItem),
        text: '',
      }
    ))
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Datum
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {this.state.items.map(item => (
            <Fragment>
              <ListItem divider={true} key={item.id}>
                <ListItemText primary={item.text} />
              </ListItem>
            </Fragment>
          ))}
          <Item />
        </List>
        <form onSubmit={this.handleSubmit} autoComplete='off'>
          <TextField
            id='new-todo'
            label='New Todo'
            value={this.state.text}
            onChange={this.handleChange}
            margin='dense'
            variant='outlined'
            style={{margin: 8}}
          />
        </form>
      </Fragment>
    )
  }
}

export default App
