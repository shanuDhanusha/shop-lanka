import React, { useState } from 'react';
import axios from 'axios';



function ReviewPops(props) {
  const [category, setCategory] = useState('');
  const [comments, setComments] = useState('');

  const handleCategoryChange = (event) => {

    setCategory(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Category:", category);
    console.log("Comments:", comments);

    axios.post('http://localhost:5000/review/reviewAdd',{
        review: comments,
        reviewCatagory: category,
        reviewUser: 'shanu@gmail.com',
        productID: '001'
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error occurred while sending data:", error);
        
      });
    

  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-700 h-200">
      <h2 className="text-lg font-bold mb-4">Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          > 
             <option value="category1">Comment category</option>
             <option value="category2">Bad Review</option>
             <option value="category2">Good Review</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Comments
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={handleCommentsChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {props.buttonName}
        </button>
      </form>
    </div>
  );
}
 
export default ReviewPops;
