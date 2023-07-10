import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Card, Pagination } from 'react-bootstrap'
const Paginat = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [view, setView] = useState("grid");
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, [currentPage]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products?page=${currentPage}`);
        const entriesPerPage = 5;
        const totalEntries = response.data.products.length;
        const totalPages = Math.ceil(totalEntries / entriesPerPage);
        setTotalPages(totalPages);
        const start = (currentPage - 1) * entriesPerPage;
        const end = start + entriesPerPage;
        const slicedData = response.data.products.slice(start, end);
        setData(slicedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      // Perform any other operations (e.g., fetch data) based on the new page number
    };
  return (
    <div>
        {data.map((item,i)=>(
            <div key={item.id} lg={view === 'grid' ? 4 : 1} >
                <Card>
                    
                {item.title}
              <Card.Img variant={'top'} src={item.thumbnail} style={{width:"200px"}}/>
              </Card>
            
            </div>
        ))}
     <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />

<Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      
    </div>
  )
}

export default Paginat
