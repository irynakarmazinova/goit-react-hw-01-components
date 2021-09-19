import defaultImage from '../images/default.jpg';

const UserCard = ({
  name = 'не известно',
  tag,
  location,
  avatar = defaultImage,
  followers,
  views,
  likes,
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserCard;

// ------------------------------------------------------------------
// jsx шаблон

// внутри самого файла компонента объявл компонент, его пропсы, а пропсы он получает там где он рендерится и данные импортировать(джейсон) так где он рендерится

// компонент-передаешь ему данные и объявляешь шаблон, который ты хочешь рендерить, после чего при вызове ты передаешь данные, которые рендерить
