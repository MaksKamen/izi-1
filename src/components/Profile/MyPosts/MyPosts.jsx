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
                <Post message="Hello everyone!" ikesCount='15'/>
                <Post message="It's my first message!" likesCount='23'/>
            </div>
        </div>
    )
}
export default MyPosts;
