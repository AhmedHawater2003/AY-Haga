import PostCard from './PostCard';

const PendingPosts = () => {
  return (
    <div>
        <div><h1>Pending Posts</h1><div/>
            <div
            style={
                {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "32px",
                    padding: "20px",
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

export default PendingPosts;