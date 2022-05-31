import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-4011139-images-thumbs&n=13'/>
                {props.message}
                <div>
                    <span>
                        like# { props.likesCount }
                    </span>

                </div>
            </div>
        </div>
    )

}
export default Post;
