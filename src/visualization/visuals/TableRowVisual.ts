import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TableRowVisual extends StandardVisual<TableRowBaseVisual, TableRowClassKey> {
  component?: React.ReactType<TableRowBaseProps>;
  hover?: boolean;
  selected?: boolean;
}

export type TableRowBaseProps = React.HTMLAttributes<HTMLTableRowElement>;

export type TableRowClassKey = 'root' | 'selected' | 'hover' | 'head' | 'footer';

declare const TableRow: React.ComponentType<TableRowProps>;

export default TableRow;
