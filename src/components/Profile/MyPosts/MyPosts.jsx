import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                <div>
                    <Post message="Hello everyone!" likecount='15'/>
                </div>
                <Post message="It's my first message" likecount='23'/>
            </div>
        </div>
    )
}
export default MyPosts;
