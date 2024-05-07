import PostCard from './PostCard';
import NewPostModal from '../NewPostModal';
import { useState } from 'react';
import CategoryModal from './CategoryModal';
import ClothingForm from './ClothingForm';
import ToysForm from './ToysForm';

const FulfilledPosts = () => {
    
  return (
    <div>
        <div style={
            {
                // display: "flex",
                // justifyContent: "space-between",
                // flexDirection : 'row' ,
                // alignItems: "center",
                // padding: "20px",
                // borderBottom: "1px solid #e0e0e0"
            }
        
        }>
            <h1>Fulfilled Posts</h1>
            <CategoryModal />
            <ClothingForm />

        <div/>
            <div
            style={
                {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "32px",
                    padding: "15px",
                    justifyContent: "center"
                }
            }
            >
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    </div>
  )
}

export default FulfilledPosts;