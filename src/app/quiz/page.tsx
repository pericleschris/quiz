import Card from "@/components/card";
import styles from "@/app/quiz/quiz.module.css";

export default function QuizPage() {
  return (
    <section className="app">
      <div className={styles.grafismo}>
        <div className="container" style={{ zIndex: "12", position: "relative" }}>
          <Card />
        </div>
      </div>
    </section>
  );
}
