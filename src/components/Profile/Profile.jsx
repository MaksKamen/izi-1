import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <img src='https://avatars.mds.yandex.net/i?id=8c77c329b722819f9f41710a03ec6f57-3702239-images-thumbs&n=13'/>
            </div>
            <div>
                Ava + description
            </div>
                < MyPosts/>
        </div>
    )

}
export default Profile;
