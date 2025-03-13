export namespace QuizTypes {
  
  export interface QuizOption {
    text?: string;
    photo?: string; // Optional photo for the option
    points: { [resultKey: string]: number }; // Increment for each result
  }
  
  export interface Question {
    text: string;
    options: QuizOption[];
    photo?: string; // Optional photo for the question
  }
  
  export interface Quiz {
    title: string;
    description: string;
    coverPhoto?: string;
    results: string[]; // Possible results
    questions: Question[];
  }
};

