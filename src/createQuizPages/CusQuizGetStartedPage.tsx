import React from "react";
import  "./CusQuizGetStartedPage.css";

const CusQuizGetStartedPage: React.FC = () => {
    return (
        <div>
            <div>
                <h1 className="topTitle">Create Your Quiz!</h1>
                <hr style={{ border: "1px solid black", width: "80%" }} />
            </div>
            
            
            <div>
                <h1 className="focusText">Making a quiz is fun!</h1>
                <button className="buttonText"> GET STARTED </button>
            </div>
        </div>
      );
};

export default CusQuizGetStartedPage;