import React from "react";
import PropTypes from 'prop-types';
import { Table, TableContainer, Paper, TableHead, TableBody, TableRow, TableCell, Box, Skeleton } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import './SimpleTable.scss';
import NoContent from "./NoContent";

const SimpleTable = ({ isLoading, header, arrangement, contents }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table className="simple-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              {  arrangement && arrangement.map((property) => (<TableCell>{header[property]}</TableCell>)) }
            </TableRow>
          </TableHead>
          { (!isLoading && contents &&contents.length > 0) && (
            <TableBody>
              {
                contents && contents.map((row) => (
                  <TableRow key={uuidv4()}>
                    {  arrangement && arrangement.map((property) => (<TableCell>{row[property]}</TableCell>)) }
                  </TableRow>
                ))
              }
            </TableBody>
            )
          }
        </Table>
      </TableContainer>
      {
          isLoading && (
          <Box className="simple-table-skeletion-box">
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
            <Skeleton className="simple-table-skeleton" animation="wave" />
          </Box>
        )
      }
      {
        ( !isLoading && (!contents || !contents.length)) && (
          <NoContent />
        ) 
      }
    </>
  );
};
SimpleTable.defaultProps = {
  isLoading: false,
};

SimpleTable.propTypes = {
  isLoading: PropTypes.bool,
  header: PropTypes.shape({}),
  arrangement: PropTypes.arrayOf(PropTypes.string),
  contents: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SimpleTable;
