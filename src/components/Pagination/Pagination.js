import './Pagination.scss';
//  disabled={`${activePage <= 1 ? 'true' : 'false'}`}


const Pagination = ({activePage, setActivePage, totalPages}) => {

    console.log('toto', totalPages)
    return (
        <div className="pagination">
            <button onClick={() => setActivePage(activePage - 1)}>prev</button>
            <button onClick={() => setActivePage(activePage + 1)}>next</button> 
        </div>
    )
}

export default Pagination;