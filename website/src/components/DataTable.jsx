import Table from 'react-bootstrap/Table';
import React from 'react';

function DataTable(props) {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Quantity</th>
                    <th>Ordered From</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.currentData.map((obj, index) => {
                        return (
                            <tr>
                                <td>{obj.month}</td>
                                <td>{obj.R1Sales}</td>
                                <td>{obj.From}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    );
}

export default DataTable;