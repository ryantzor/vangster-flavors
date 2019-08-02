import React from 'react';
import { Table, Dropdown } from 'semantic-ui-react'

const removeStyle = {
  textAlign: "center",
}

const ratingOptions = [
  { key: 1, text: 1, value: 1},
  { key: 2, text: 2, value: 2},
  { key: 3, text: 3, value: 3},
  { key: 4, text: 4, value: 4},
  { key: 5, text: 5, value: 5},
]

const FlavorListItem = ({ id, name, tags, rating, onRatingSelect, onDeleteClick}) => {
  return (
    <Table.Row>
      {/* <Table.Cell>{id}</Table.Cell> */}
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{tags.join(', ')}</Table.Cell>
      <Table.Cell>
        <Dropdown
          placeholder='Select Rating'
          fluid
          selection
          value={rating}
          onChange={(event, {value}) => onRatingSelect(value)}
          options={ratingOptions}
        />
      </Table.Cell>
      <Table.Cell style={ removeStyle }>
      <i aria-hidden="true" className="close disabled icon" onClick={(event, {id}) => onDeleteClick(id)}></i>
      <i aria-hidden="true" className="heart disabled icon"></i>
      </Table.Cell>
    </Table.Row>
  )
}

export default FlavorListItem;