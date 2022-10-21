import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    // const AllNews = useLoaderData();
    return (
        <div>
            {/* <h2>This is Home News Length: {AllNews.length}</h2> */}
            <Category></Category>
        </div>
    );
};

export default Home;