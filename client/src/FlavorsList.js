import React from 'react';
import { Button, Table, Input, Dropdown, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import FlavorListItem from './FlavorListItem';

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

const ratingOptions = [
  { key: 1, text: 1, value: 1},
  { key: 2, text: 2, value: 2},
  { key: 3, text: 3, value: 3},
  { key: 4, text: 4, value: 4},
  { key: 5, text: 5, value: 5},
]

const StyledInput = styled(Input)`
  padding: 10px 10px;
`
const StyledButton = styled(Button)`
  && {
    margin: 0px 16px;
  }
`

const FlavorList = ({ flavors, onRatingSelect, onDeleteClick }) => {
  
  const [search, setSearch] = React.useState('');
  const [tags, setTags ] = React.useState([]);
  const [rating, setRating] = React.useState('0');

  var flavorsFiltered = flavors.filter(
    (flavor) => {
      return flavor.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      && flavor.rating >= rating
      && flavor.tags.join().toLowerCase().indexOf(tags.join()) !== -1;
    }
  );

  const clearFilters = () => {
    setTags([]);
    setRating(0);
    setSearch('');
  }

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
    <StyledInput
        icon="search"
        placeholder="Search by name"
        value={search}
        onChange={(value) => updateSearch(value)}
        required
      />
      <Dropdown 
        multiple
        selection
        search
        required
        onChange={(event, {value}) => setTags(value)}
        options={options}
        value={tags}
        placeholder="Filter by tag"
      />
      <Dropdown
        placeholder='Filter by rating'
        selection
        value={rating}
        onChange={(event, {value}) => setRating(value)}
        options={ratingOptions}
      />
      <StyledButton animated="fade" primary onClick={(event, {value}) => clearFilters()}>
        <Button.Content visible>Clear</Button.Content>
        <Button.Content hidden>
          <Icon name='redo' />
        </Button.Content>
      </StyledButton>
    <Table celled collapsing>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Tags</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
        <Table.HeaderCell>Controls</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {flavorsFiltered.map((flavor) => (
          <FlavorListItem 
          key={flavor.id} 
          name={flavor.name}
          tags={flavor.tags}
          onRatingSelect={(value) => onRatingSelect({ value, id: flavor.id })} 
          onDeleteClick={(value) => onDeleteClick({value, id: flavor.id})}
          />
        ))}
      </Table.Body>
    </Table>
    </div>
  )
}

export default FlavorList