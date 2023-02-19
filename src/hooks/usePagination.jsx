import { useState } from "react";
import { scrollToTop } from "../service/utils";

const usePagination = (limit, total) => {
  const totalPages = Math.ceil(total / limit);
  const [startPg, setStartPg] = useState(0);
  const [endPg, setEndPg] = useState(limit);

  const displayPg = (pgNo) => {
    scrollToTop();
    let end_pg = limit * pgNo;
    let start_pg = limit * pgNo - limit;
    setStartPg(start_pg);
    setEndPg(Math.min(end_pg, total));
  };
  return [totalPages, startPg, endPg, displayPg];
};

export default usePagination;
