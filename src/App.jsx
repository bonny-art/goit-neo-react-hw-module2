import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import styles from "./App.module.css";

const defaultState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const key = "feedback";

function App() {
  const [options, setOptions] = useLocalStorage(key, defaultState);

  const updateFeedback = (feedbackType) => () => {
    setOptions(
      feedbackType
        ? { ...options, [feedbackType]: options[feedbackType] + 1 }
        : defaultState
    );
  };

  const totalFeedback = Object.values(options).reduce(
    (sum, value) => sum + value,
    0
  );

  const positiveFeedback = Math.round((options["good"] / totalFeedback) * 100);

  return (
    <>
      <Section>
        <Container>
          <Description />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.stats}>
            <Options
              options={options}
              handleClick={updateFeedback}
              hasFeedback={totalFeedback > 0}
            />
            {totalFeedback > 0 ? (
              <Feedback
                options={options}
                total={totalFeedback}
                positive={positiveFeedback}
              />
            ) : (
              <Notification />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default App;
