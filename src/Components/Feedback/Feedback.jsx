import { useState } from "react";
import Statistics from "./Statisticks/Statisticks";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";
import styles from "./Feedback.module.scss";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood(prevGood => prevGood + 1);
        break;
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case "bad":
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return; 
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback} 
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={positivePercentage} 
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;

// import { Component } from "react";
// import Statistics from "./Statisticks/Statisticks";
// import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
// import Section from "../Section/Section";
// import Notification from "../Notification/Notification";
// import styles from "./Feedback.module.scss";

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (option) => {
//     this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={styles.feedback}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={["good", "neutral", "bad"]}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;