import React from "react";
import CusQuizGetStartedPage from "../createQuizPages/CusQuizGetStartedPage";

const FormQuizStructure: React.FC = () => {
    return (
        <div> 
          {/* <h1>Create Your Quiz</h1> */}
          <form action="">
            {/* <input type="text" name="" id="" /> */}
            <CusQuizGetStartedPage />      
            {/* <PickQuizTopic />
            <CusQuizTilteAndDescription />
            <CusQuizOutcomes />
            <CusQuizQuestionsAndOptions /> 
              {/* might also include voting schema above */}
            {/* <CusQuizAssign /> */} 

          </form>
        </div>
      );
};

export default FormQuizStructure;