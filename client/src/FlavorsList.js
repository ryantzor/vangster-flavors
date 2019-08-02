import React from 'react';
import { Table, Input } from 'semantic-ui-react'
import styled from 'styled-components';
import FlavorListItem from './FlavorListItem';

const StyledInput = styled(Input)`
  padding: 10px 1px;
  margin-right: 20px;
`

const FlavorList = ({ flavors, onRatingSelect, onDeleteClick }) => {
  
  const [search, setSearch] = React.useState('');

  const flavorsFiltered = flavors.filter(
    (flavor) => {
      return flavor.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }
  );

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
          {...flavor} 
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