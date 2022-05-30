import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                <div className='item'>
                    My posts
                </div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div>
                    < Post/>
                    < Post/>
                    < Post/>
                </div>
            </div>
    )
}
export default MyPosts;
