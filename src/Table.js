import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, experimentCount, assignmentCount) {
    return {
      name,
      experimentCount,
      assignmentCount,
      experiments : [
        {
          dueDate:"12-2-2022",
          name:"Ash in coal sample",
          number:2
        }
      ],
      assignments : [
        {
          dueDate:"12-2-2022",
          name:"Ash in coal sample",
          number:2
        }
      ]
    };
}

const rows = [
    createData('Chemistry', 1, 2),
    createData('Physics', 1, 2),
    createData('Mathematics', 1, 2),
    createData('Mechanics', 1, 2),
    createData('BEE', 1, 2),
];

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="center">{row.experimentCount}</TableCell>
          <TableCell align="center">{row.assignmentCount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={!open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Experiments
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Experiment Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.experiments.map((experiment) => {
                      return(
                        <TableRow key = {experiment.number}>
                          <TableCell>{experiment.dueDate}</TableCell>
                          <TableCell>{experiment.name}</TableCell>
                          <TableCell>{experiment.number}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
                <Typography variant="h6" gutterBottom component="div">
                  Assignments
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Assignment Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.assignments.map((assignment) => {
                        return(
                          <TableRow key = {assignment.number}>
                            <TableCell>{assignment.dueDate}</TableCell>
                            <TableCell>{assignment.name}</TableCell>
                            <TableCell>{assignment.number}</TableCell>
                          </TableRow>
                        )
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
            <StyledTableRow sx = {{backgroundColor: '#222222', color: '#FFFFFF'}}>
                <StyledTableCell />
                <StyledTableCell>Subject</StyledTableCell>
                <StyledTableCell align="center">Experiments</StyledTableCell>
                <StyledTableCell align="center">Assignments</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <Row key={row.name} row={row} />
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
