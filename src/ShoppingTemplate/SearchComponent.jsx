import React, { useState, useEffect } from 'react';
import CommonApis from './Routes/CommonApis';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from './Store/UserSlice';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
   const dispatch= useDispatch()

  useEffect(() => {
    // Fetch the list of categories when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await CommonApis.getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await CommonApis.searchProducts(searchQuery, selectedCategory);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <Form.Group controlId='categorySelect'>
        <Form.Label>Select Category:</Form.Label>
        <Form.Control
          as='select'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{width:"200px"}}
        >
          <option value=''>All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <input
        type='text'
        placeholder='Search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch} variant='dark'>
        Search
      </Button>
      <div>
        {searchResults.map((item) => (
          <div key={item.id} style={{display:'flex', alignItems:"center", gap:"10px"}}>
             <img src={item.image} alt={item.title}  style={{width:"50px", paddingBottom:"20px"}}/>
        <h2  onClick={() => dispatch(addtoCart(item))} style={{whiteSpace:"pre-wrap"}}> <Link to={`/ProductsView/${item.id}`} style={{textDecoration:"none"}}> {item.title} </Link></h2>
            {/* <span style={{color:"wheat"}}>Price:${item.price}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
