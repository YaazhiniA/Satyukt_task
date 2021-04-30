import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ sortColumn, onSort, columns, data, onClick }) => {
  return (
    <React.Fragment>
      <table style={{ width: "85vw" }}>
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          columns={columns}
        />
        <TableBody data={data} columns={columns} onClick={onClick} />
      </table>
    </React.Fragment>
  );
};

export default Table;
