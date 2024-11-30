import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface ICustomTableProps {
  columns: GridColDef[];
  rows: any[];
  pageSize?: number;
  sx?: any;
}

const CustomTable = ({ columns, rows, pageSize, sx }: ICustomTableProps) => {
  return (
    <Box sx={{ width: "100%", ...sx }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize || 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 30, 40, 50]}
        checkboxSelection
      />
    </Box>
  );
};

export default CustomTable;
