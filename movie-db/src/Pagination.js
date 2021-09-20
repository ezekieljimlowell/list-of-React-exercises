
const Pagination = ({ paginate, moviesPerPage }) => {
    let pageNumbers = [];

    for (let i = 1; i <= moviesPerPage/2; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pagination">
            {pageNumbers.map((number) => (
                <span key={number}>
                    <a
                        onClick={() => {
                            paginate(number)
                        }}
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