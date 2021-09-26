import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import {useSelector, useDispatch } from 'react-redux'

function CategoryMenu() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
;
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (categoryData) {
      console.log(categoryData);
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    }  else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

return (
  <div className="flex justify-center items-center h-16 bg-green-800 relative shadow-sm font-sans">
    {/* add "All plants" to categories list */}
    <button className="text-white font-semibold px-4 mx-5">All Plants</button>
    {categories.map(item => (
      <button
        key={item._id}
        onClick={() => {
          handleClick(item._id);
        }}
        className="text-white font-semibold px-4 mx-5"
      >
        {item.name}
      </button>
    ))}
    
  </div>
);
}

export default CategoryMenu;
