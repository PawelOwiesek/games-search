const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalPages / 20)) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          margin: "40px",
          padding: "10px 15px",
          border: "none",
          backgroundColor: "teal",
          color: "white",
          borderRadius: "25px",
          fontSize: "18px",
        }}
        onClick={() => handlePrevPage()}
        disabled={currentPage < 1}
      >
        Previous Page
      </button>
      <div>
        {currentPage} of {totalPages}
      </div>
      <button
        style={{
          margin: "40px",
          padding: "10px 15px",
          border: "none",
          backgroundColor: "teal",
          color: "white",
          borderRadius: "25px",
          fontSize: "18px",
        }}
        onClick={() => handleNextPage()}
        disabled={currentPage >= totalPages / 20}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
