import PostCard from './PostCard';
import NewPostModal from '../NewPostModal';
import { useState } from 'react';
import CategoryModal from './CategoryModal';
import ClothingForm from './ClothingForm';

const FulfilledPosts = () => {
    
  return (
    <div>
        <div>
            <h1>Fulfilled Posts</h1>
            <NewPostModal />
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