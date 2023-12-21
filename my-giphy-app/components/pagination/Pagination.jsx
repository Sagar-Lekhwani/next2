import React from "react";

export const Pagination = ({ totalPost, postPerPage, setCurrentPage }) => {
    console.log(postPerPage, totalPost, "pppppppppp")
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, ind) => {
        return <button onClick={() => setCurrentPage(page)} className="p-2 h-10 w-10 rounded-3xl bg-slate-200 ml-2" key={ind}>{page}</button>;
      })}
    </div>
  );
};
