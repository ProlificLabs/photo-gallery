import { NavLink } from "react-router-dom";

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: "abc",
    },
    {
      id: 2,
      title: "def",
    },
    {
      id: 3,
      title: "ghi",
    },
  ];

  return (
    <div>
      {images.map((img) => (
        <div key={img.id}>
          Image: {' '}
          <NavLink to={`/item/${img.id}`} className="nav-link">
            #{img.id} {img.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
