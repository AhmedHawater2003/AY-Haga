import PostCard from './PostCard';
import NewPostModal from '../NewPostModal';
import { useState } from 'react';
import CategoryModal from './CategoryModal';
import ClothingForm from './ClothingForm';
import ToysForm from './ToysForm';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const FulfilledPosts = () => {
    
  return (
    <div>
        <div>
            
                <Row>
                    <Col >
                    <h1>Fulfilled Posts</h1>
                    </Col>
                    <Col style={{display:"flex",alignItems:"end",justifyContent:"end",marginRight:"30px"}} >
                    <CategoryModal />
                    
                    </Col>
                </Row>
           
            
            
            

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