import React from "react";
import PropTypes from 'prop-types';
import { Table, TableContainer, Paper, TableHead, TableBody, TableRow, TableCell, Box, CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

const SimpleTable = ({header, arrangement, contents}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {  arrangement && arrangement.map((property) => (<TableCell>{header[property]}</TableCell>)) }
            </TableRow>
          </TableHead>
          <TableBody>
              {
                contents && contents.map((row) => (
                  <TableRow key={uuidv4()}>
                    {  arrangement && arrangement.map((property) => (<TableCell>{row[property]}</TableCell>)) }
                  </TableRow>
                ))
              }
          </TableBody>
        </Table>
      </TableContainer>
      {
        !contents || !contents.length && (
          <Box sx={{ minHeight: '5em', display: 'flex' }}>
            <CircularProgress sx={{ margin: '10em auto' }}/>
          </Box>
        )
      }
    </>
  );
};

SimpleTable.propTypes = {
  header: PropTypes.shape({}),
  arrangement: PropTypes.arrayOf(PropTypes.string),
  contents: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SimpleTable;
