import { Link } from "react-router-dom";
import Card from "../ui/Card";
import "./Group.css";
function Group({ title, image }) {
    return (
        <Link to={"/" + title} className="group-wraper">
            <li className="group">
                <Card>
                    <div className="group-name">
                        <h3>{title}</h3>
                    </div>
                    <div className="group-image">
                        <img src={image} alt={title} />
                    </div>
                </Card>
            </li>
        </Link>
    );
}

export default Group;
