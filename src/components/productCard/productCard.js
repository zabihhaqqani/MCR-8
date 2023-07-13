import { useNavigate } from "react-router-dom/dist";
import "./productCard.css"
import moment from "moment";

function ProductCard({data}) {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/detailsPage/${data?.id}`)} className="product-card">
      <img src={data?.eventThumbnail} alt="Product" />
      <div className="product-info">
        <p className="product-description">
          {moment(data?.eventStartTime).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <p className="product-button">{data?.eventType}</p>
        <h2 className="product-title">{data?.title}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
