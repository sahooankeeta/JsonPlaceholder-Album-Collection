import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useHistory, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
const Paginate = ({ page }) => {
  const history = useHistory();
  const path = useLocation().pathname;
  const numberOfPages = useSelector((state) => state.totalPages);

  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          onClick={() => history.push(`${path}?page=${item.page}`)}
        />
      )}
    />
  );
};
export default Paginate;
