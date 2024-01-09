import { Button, Container } from "./styled";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
    scrollUp();
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalPages / 20)) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
    scrollUp();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    scrollUp();
  };

  const handleLastPage = () => {
    setCurrentPage((currentPage = 500));
    scrollUp();
  };

  const isMobile = window.innerWidth <= 767;
  const prevButtonText = isMobile ? "<" : "Prev. Page";
  const nextButtonText = isMobile ? ">" : "Next Page";
  const lastButtonText = isMobile ? ">>" : "Last Page";
  const firstButtonText = isMobile ? "<<" : "First Page";
  return (
    <Container>
      {" "}
      <Button onClick={() => handleFirstPage()} disabled={currentPage < 1}>
        {firstButtonText}
      </Button>
      <Button onClick={() => handlePrevPage()} disabled={currentPage === 1}>
        {prevButtonText}
      </Button>
      <div>{currentPage} of 500</div>
      <Button onClick={() => handleNextPage()} disabled={currentPage === 500}>
        {nextButtonText}
      </Button>
      <Button
        onClick={() => handleLastPage()}
        disabled={currentPage >= totalPages / 20}
      >
        {lastButtonText}
      </Button>
    </Container>
  );
};

export default Pagination;
