
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


            <Button className="contact_button">
                <p><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=%6A%73%65%74%68%6C%75%69%40%67%2E%75%63%6C%61%2E%65%64%75" target="_blank" rel="noreferrer">Contact</a></p>
            </Button>
        </div>
    );
};

export default Thanks;