import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const News = useLoaderData();
    return (
        <div>
            <h2>this is category length: {News.length}</h2>
            {
                News.map( n => <NewsSummeryCard key={n._id} news={n}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;