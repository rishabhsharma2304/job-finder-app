import React from 'react';
import { Pagination } from 'react-bootstrap';


export default function Jobspagination({page, setPage, hasNextPage}) {
    function adjustPage(amount) {
        setPage(prevPage => prevPage+amount);
    }
    return (
        
        <Pagination className="ml-3">
            {page!==1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
            {page !==1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
            {page>3 && <Pagination.Ellipsis />}
            {page>2 && <Pagination.Item onClick={() => adjustPage(-1)}>{page-1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            <Pagination.Item onClick={() => adjustPage(1)}>{page+1}</Pagination.Item>
            <Pagination.Next onClick={() => adjustPage(1)} />
        </Pagination>
    )
}
