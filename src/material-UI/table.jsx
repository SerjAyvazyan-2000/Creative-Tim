import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style.scss"


export default function BasicTable({rows,TableTitle,headerTitle,titleDescription}) {


    return <>
        <TableContainer component={Paper}>
            <div className="table-title">
                <p>{headerTitle}</p>
                <span>{titleDescription}</span>
            </div>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    {TableTitle.map(item =>(
                        <TableRow>
                            <TableCell Dessert >{item.id}</TableCell>
                            <TableCell >{item.name}</TableCell>
                            <TableCell >{item.salary}</TableCell>
                            <TableCell >{item.country}</TableCell>
                            <TableCell >{item.city}</TableCell>
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            className="table-row"
                        >
                            <TableCell  >{row.id}</TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell >{row.salary}</TableCell>
                            <TableCell >{row.country}</TableCell>
                            <TableCell >{row.city}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </>

}