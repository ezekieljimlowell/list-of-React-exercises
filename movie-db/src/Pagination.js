
const Pagination = ({ totalMovies, moviesPerPage, paginate }) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i)
        console.log(pageNumbers)
    }

    console.log(pageNumbers)
    return (
        <nav className="pagination">
            {pageNumbers.map((number) => (
                <span key={number}>
                    <a
                        onClick={() => paginate(number)}
                        href="#/"
                        className="page"
                    >
                        {number}
                    </a>
                </span>
            ))}
        </nav>
    )

}

export default Pagination;