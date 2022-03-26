
import React from "react"
import { Link } from "react-router-dom"
import "./Thanks.css";
import Button from "react-bootstrap/Button"

const Thanks: React.FC = () => {
    return (
        <div className="thanks_wrapper">
            <h1>Let's get in touch!</h1>
            <p>
                I'm currently looking for any software engineering positions
                that are open. Alternatively, I'm also open if you would
                like to stop by and chat. In any case, let's <b className="bold">connect</b>!
            </p>

            <Link to="/contact" className="link">
                <Button className="contact_button">
                    <p>Contact</p>
                </Button>
            </Link>
        </div>
    );
};

export default Thanks;