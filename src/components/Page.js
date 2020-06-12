import React from "react";
import { Pagination } from "semantic-ui-react";

function Page(props) {
  const handlePaginationChange = (e, activePage) => {
    props.changePage(activePage.activePage);
  };

  return (
    <Pagination
      defaultActivePage={1}
      totalPages={100}
      onPageChange={handlePaginationChange}
    />
  );
}

export default Page;
