import { useEffect, useState } from "react";

export const useLoadMore = ({ usersList, itemsPerLoad, initialPage }) => {
  const [page, setPage] = useState(initialPage);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersList.slice(0, page * itemsPerLoad));
  }, [usersList, page, itemsPerLoad]);

  const loadMore = () => {
    setPage(page + 1);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const isMore = page * itemsPerLoad < usersList.length;

  return { users, loadMore, isMore };
};
