import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`} className="text-blue-600 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCart;