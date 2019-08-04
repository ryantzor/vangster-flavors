import React from 'react';
// import { Dropdown } from 'semantic-ui-react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import StarRatingComponent from 'react-star-rating-component';

const removeStyle = {
  textAlign: "center",
}

// const ratingOptions = [
//   { key: 1, text: 1, value: 1},
//   { key: 2, text: 2, value: 2},
//   { key: 3, text: 3, value: 3},
//   { key: 4, text: 4, value: 4},
//   { key: 5, text: 5, value: 5},
// ]



const FlavorListItem = ({ id, name, tags, rating, onRatingSelect, onDeleteClick}) => {
  return (
    <TableRow>
      {/* <Table.Cell>{id}</Table.Cell> */}
      <TableCell>{name}</TableCell>
      <TableCell>{tags.join(', ')}</TableCell>
      <TableCell>
        <StarRatingComponent 
          name="rating" 
          starCount={5}
          value={rating}
          emptyStarColor={'grey'}
          onStarClick={(value) => onRatingSelect(value)}
        />
      </TableCell>
      <TableCell style={ removeStyle }>
      {/* <i aria-hidden="true" className="close disabled icon" onClick={(event) => onDeleteClick(id)}></i> */}
      <i aria-hidden="true" className="close disabled icon"></i>
      <i aria-hidden="true" className="heart disabled icon"></i>
      </TableCell>
    </TableRow>
  )
}

export default FlavorListItem;