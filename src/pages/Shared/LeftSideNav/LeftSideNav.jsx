import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="space-y-6">
                <h2 className="text-3xl">All Categories</h2>
                {
                    categories.map(category => <Link
                        className="block ml-4 text-xl font-semibold"
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}</Link>)
                }
            </div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-6 pt-10">
                    <img src="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>                    
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;