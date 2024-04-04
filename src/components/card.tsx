import Image from "next/image";
import Button from "./button";
import styles from "@/components/card.module.css";

export default function Card() {
  return (
    <div>
      <div className={styles.cardHeader}>
        <p>
          Quando uma pessoa te conta a história de um filme conhecido, que você assistiu mais de uma vez. O que você
          faz?
        </p>
      </div>
      <div>
        <Image src={"/assets/question-1.jpg"} alt="Imagem" width={1000} height={667} />
      </div>
      <div className={styles.cardOptions}>
        <div>
          <input type="radio" name="options" id="option-1" />
          <label htmlFor="option-1">Opção 1</label>
        </div>
        <div>
          <input type="radio" name="options" id="option-2" />
          <label htmlFor="option-2">Opção 2</label>
        </div>
      </div>
      <div style={{ background: "#fff", padding: "1.25rem 0", textAlign: "center" }}>
        <Button>Confirmar</Button>
      </div>
    </div>
  );
}
