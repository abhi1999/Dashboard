
import * as  React from 'react';

import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

class GridExample extends React.Component<any, any> {
private gridApi:any;
private gridColumnApi:any;

  constructor(props) {
    super(props);
    this.onGridReady = this.onGridReady.bind(this);
    this.state = {
      rowData: createData(400, "body"),
      pinnedTopRowData: [],// createData(3, "floating"),
      pinnedBottomRowData:[],// createData(3, "floating"),
      columnDefs: getColumnDefs(),
      isFullWidthCell: (rowNode) =>rowNode.data.fullWidth,
      fullWidthCellRenderer: (params)=> {
        let cssClass;
        let message;
        if (params.node.rowPinned) {
          cssClass = "example-full-width-floating-row";
          message = "Pinned full width row at index " + params.rowIndex;
        } else {
          cssClass = "example-full-width-row";
          message = "Normal full width row at index" + params.rowIndex;
        }
        const eDiv = document.createElement("div");
        eDiv.innerHTML = '<div class="' + cssClass + '"> ' + message + "</div>";
        /*const eButton:any = eDiv.querySelector("button");
        eButton.addEventListener("click", ()=> {
          alert("button clicked");
          console.log("setting");
        });*/
        return eDiv.firstChild;
      },
      getRowHeight: (params)=> {
        const isBodyRow = params.node.rowPinned === undefined;
        const isFullWidth = params.node.data.fullWidth;
        if (isBodyRow && isFullWidth) {
          return 55;
        } else {
          return 25;
        }
      }
    };

  }

  public onGridReady(params) {
      debugger;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  public  render() {
    return (
      <div style={{ width: "100%", height: "90vh" }}>
        <div
          id="myGrid"
          style={{
            boxSizing: "border-box",
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            rowData={this.state.rowData}
            pinnedTopRowData={this.state.pinnedTopRowData}
            pinnedBottomRowData={this.state.pinnedBottomRowData}
            columnDefs={this.state.columnDefs}
            isFullWidthCell={this.state.isFullWidthCell}
            fullWidthCellRenderer={this.state.fullWidthCellRenderer}
            getRowHeight={this.state.getRowHeight}
            onGridReady={this.onGridReady}
            headerHeight={0}
          />
        </div>
      </div>
    );
  }
}

function alphabet() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").splice(1, 10);
}
function createData(count, prefix) {
  const rowData:any[] = [];
  for (let i = 0; i < count; i++) {
    const item:any = {};
    item.fullWidth = i % 50 === 2;
    alphabet().forEach((letter)=> {
      item[letter] = prefix + " (" + letter + "," + i + ")";
    });
    rowData.push(item);
  }
  return rowData;
}
function getColumnDefs() {
  const columnDefs:any[] = [];
  alphabet().forEach((letter)=> {
    const colDef:any = {
      headerName: letter,
      field: letter,
      width: 100
    };
    /*
    if (letter === "A") {
      colDef.pinned = "left";
    }
    if (letter === "Z") {
      colDef.pinned = "right";
    }
    */
    columnDefs.push(colDef);
  });
  return columnDefs;
}



export default GridExample;