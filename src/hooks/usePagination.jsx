import { useState } from "react";

const usePagination = (limit, total) => {
  const totalPages = Math.ceil(total / limit);
  const [startPg, setStartPg] = useState(0);
  const [endPg, setEndPg] = useState(limit - 1);
  const [currenPg, setCurrentPg] = useState(1);

  const displayPg = (pgNo) => {
    let end_pg = limit * pgNo - 1;
    let start_pg = limit * pgNo - limit;
    setStartPg(start_pg);

    if (end_pg > total) {
      setEndPg(total - 1);
    } else {
      setEndPg(end_pg);
    }
  };
  return [totalPages, startPg, endPg, currenPg, displayPg];
};

export default usePagination;
