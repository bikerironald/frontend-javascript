import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): RowID {
  console.log('Insert row', row);
  return 125;
}

export function deleteRow(rowId: RowID): void {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId: RowID, row: RowElement): RowID {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}