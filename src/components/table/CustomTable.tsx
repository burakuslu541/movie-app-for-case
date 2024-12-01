import * as React from "react";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import type { GridPaginationMeta } from "@mui/x-data-grid";
import colors from "../../styles/_export.scss";
import { useAppSelector } from "../../store/client/hooks";
import { Box } from "@mui/material";
interface ICustomTableProps {
  paginationModel: {
    page: number;
    pageSize: number;
  };
  setPaginationModel: (paginationModel: any) => void;
  rows: any[];
  hasNextPage: boolean;
  isLoading: boolean;
  columns: any[];
  rowCount: number;
  onRowClick?: (params: any, event: React.MouseEvent) => void;
}

export default function CustomTable({
  paginationModel,
  setPaginationModel,
  rows,
  hasNextPage,
  isLoading,
  columns,
  rowCount,
  onRowClick,
}: ICustomTableProps) {
  const apiRef = useGridApiRef();
  const darkMode = useAppSelector((state) => state.darkMode.value);

  const paginationMetaRef = React.useRef<GridPaginationMeta>({});
  // Memoize to avoid flickering when the `hasNextPage` is `undefined` during refetch
  const paginationMeta = React.useMemo(() => {
    if (
      hasNextPage !== false &&
      paginationMetaRef.current?.hasNextPage !== hasNextPage
    ) {
      paginationMetaRef.current = { hasNextPage };
    }
    return paginationMetaRef.current;
  }, [hasNextPage]);

  return (
    <Box style={{ width: "100%" }}>
      <DataGrid
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { rowCount: -1 } }}
        paginationMeta={paginationMeta}
        loading={isLoading}
        pageSizeOptions={[10]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
        rowCount={rowCount}
        sx={{
          minHeight: "631px",
          "& .MuiDataGrid-row": {
            cursor: "pointer",
            backgroundColor: darkMode ? colors.base100 : colors.baseLight100,
          },
          "& .MuiDataGrid-cell": {
            color: darkMode ? colors.neutral : colors.neutralLight,
          },
          "& .MuiTablePagination-root": {
            backgroundColor: darkMode ? colors.base300 : colors.baseLight300,
            color: darkMode ? colors.neutral : colors.neutralLight,
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: darkMode ? colors.warning : colors.warningLight,
            color: darkMode ? colors.neutral : colors.neutralLight,
          },
        }}
        onRowClick={onRowClick}
      />
    </Box>
  );
}
