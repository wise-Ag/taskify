import { useState } from "react";

export const usePagination = (totalPageNum: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Math.min: 페이지가 1 미만이 되지 않도록 제한
  // Math.max: 최대 페이지 수를 초과하지 않도록 제한
  const handlePageChange = (increment: number) => {
    setCurrentPage((prevPage) => Math.min(Math.max(prevPage + increment, 1), totalPageNum));
  };

  return { currentPage, setCurrentPage, handlePageChange };
};
