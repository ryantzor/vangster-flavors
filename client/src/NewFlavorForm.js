import React from 'react';
import styled from 'styled-components';
import { Dropdown, Icon, Input, Button } from 'semantic-ui-react'

const StyledInput = styled(Input)`
  padding: 0px 16px;
`
const StyledButton = styled(Button)`
  && {
    margin: 0px 16px;
  }
`

const options = [
  { key: '1', text: 'Chocolates Chips', value: 'Chocolates Chips' },
  { key: '2', text: 'Peanut butter', value: 'Peanut butter' },
  { key: '3', text: 'Peanut butter cup', value: 'Peanut butter cup' },
  { key: '4', text: 'Fudge', value: 'Fudge' },
  { key: '5', text: 'Cookie Dough', value: 'Cookie Dough' },
  { key: '6', text: 'Chocolate', value: 'Chocolate' },
  { key: '7', text: 'Vanilla', value: 'Vanilla' },
  { key: '8', text: 'Toffee', value: 'Toffee' },
  { key: '9', text: 'Fruit', value: 'Fruit' },
  { key: '10', text: 'Nuts', value: 'Nuts' },
  { key: '11', text: 'Brownie', value: 'Brownie' },
]

const NewFlavorForm = ({ onClick }) => {
  const [ name, setName] = React.useState('');
  const [ tags, setTags ] = React.useState([]);

  const submitForm = () => {
    if (!name) {
      return;
    }
    onClick({name, tags});
    setName('');
    setTags([]);
  }

  return (
    <React.Fragment>
      <StyledInput
        placeholder="Name"
        value={name}
        required
        onChange={(event, {value}) => setName(value)}
      />
      <Dropdown 
        multiple
        selection
        search
        required
        onChange={(event, {value}) => setTags(value)}
        options={options}
        value={tags}
        placeholder="Tags"
      />
      <StyledButton animated="fade" onClick={submitForm} primary>
        <Button.Content visible>Add</Button.Content>
        <Button.Content hidden>
          <Icon name='plus' />
        </Button.Content>
      </StyledButton>
    </React.Fragment>
  )

}

export default NewFlavorForm;