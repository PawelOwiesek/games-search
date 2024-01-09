import { Button, Container } from "./styled";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

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

  const handleLastPage = () => {
    setCurrentPage((currentPage = 500));
  };

  return (
    <Container>
      {" "}
      <Button onClick={() => handleFirstPage()} disabled={currentPage < 1}>
        First Page
      </Button>
      <Button onClick={() => handlePrevPage()} disabled={currentPage === 1}>
        Prev. Page
      </Button>
      <div>{currentPage} of 500</div>
      <Button onClick={() => handleNextPage()} disabled={currentPage === 500}>
        Next Page
      </Button>
      <Button
        onClick={() => handleLastPage()}
        disabled={currentPage >= totalPages / 20}
      >
        Last Page
      </Button>
    </Container>
  );
};

export default Pagination;
