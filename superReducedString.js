import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-virtualized/styles.css";

import { Table, Column, defaultTableRowRenderer } from "react-virtualized";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

class MyTable extends React.Component {
  render() {
    const { tableRef, ...rest } = this.props;
    return <Table ref={this.props.tableRef} {...rest} />;
  }
}
const SortableTable = SortableContainer(MyTable);
const SortableTableRowRenderer = SortableElement(defaultTableRowRenderer);

/**
 * Define the table schema
 */
const schema = [
  { dataKey: "col1", label: "Column 1" },
  { dataKey: "col2", label: "Column 2" }
];

/**
 * Generate row data according to the schema above
 * @param {*} rowCount
 */
function generateRows(rowCount) {
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    rows.push({ col1: i, col2: i * i });
  }
  return rows;
}

class MySortableTable extends Component {
  state = {
    schema,
    rows: generateRows(200)
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ rows }) => ({
      rows: arrayMove(rows, oldIndex, newIndex)
    }));
  };

  rowRenderer = props => {
    return <SortableTableRowRenderer {...props} />;
  };

  getRow = ({ index }) => {
    const { rows } = this.state;
    return rows[index];
  };

  render() {
    const { rows, schema } = this.state;

    return (
      <SortableTable
        width={500}
        height={500}
        headerHeight={32}
        rowHeight={32}
        tableRef={ref => (this.tableRef = ref)}
        getContainer={() => ReactDOM.findDOMNode(this.tableRef.Grid)}
        rowCount={rows.length}
        rowGetter={this.getRow}
        onSortEnd={this.onSortEnd}
        rowRenderer={this.rowRenderer}
      >
        {schema.map(col => (
          <Column {...col} key={col.dataKey} width={100} />
        ))}
      </SortableTable>
    );
  }
}

export default MySortableTable;
