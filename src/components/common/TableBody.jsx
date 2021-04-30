import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, column) {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  }

  createKey(item, column) {
    return item.state + (column.path || column.key);
  }
  render() {
    const { data, columns, onClick } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr onClick={() => onClick(item.key)} key={item.state}>
            {columns.map((column) => (
              <td className="td clickable" key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
