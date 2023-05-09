import React from 'react';
import BasicTable from "../../material-UI/table";
import "./style.scss"
import {useTableState} from "../../hooks/tableState";

const TableList = () => {

    const [stripedRows,stripedTitle] = useTableState()
    return<div className="table-list-section">
      <div className="table-box">
          <BasicTable
              rows={stripedRows}
              TableTitle={stripedTitle}
              headerTitle={"Striped Table with Hover"}
              titleDescription={"Here is a subtitle for this table"}

          />
          <BasicTable
              rows={stripedRows}
              TableTitle={stripedTitle}
              headerTitle={"Table on Plain Background"}
              titleDescription={"Here is a subtitle for this table"}


          />

      </div>

    </div>
};

export default TableList;