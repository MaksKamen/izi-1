import s from "./Profile.module.css"

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://avatars.mds.yandex.net/i?id=8c77c329b722819f9f41710a03ec6f57-3702239-images-thumbs&n=13'/>
        </div>
        <div>
            Ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>

            </div>
        </div>
    </div>
}
export default Profile;
