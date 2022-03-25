
import React from "react";
import "./Thanks.css";

const Thanks: React.FC = () => {
    return (
        <div className="thanks_wrapper">
            <h1>Let's get in touch!</h1>
            <p>
                I'm currently looking for any software engineering positions
                that are open. Alternatively, I'm also open if you would
                like to stop by and chat. In any case, let's <b className="bold">connect</b>!
            </p>

            <div className="contact_button">
                <p>Contact</p>
            </div>
        </div>
    );
};

export default Thanks;