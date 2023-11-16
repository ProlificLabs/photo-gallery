import { useParams } from "react-router-dom";

export default function GalleryDetailView() {
  const { id } = useParams();

  return <div>Render the image with id: {id}</div>;
}
