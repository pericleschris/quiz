"use client";
import ky from "ky";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type InfoType = {
  ltik: string;
  name: string;
};

type PropsInfoType = {
  info: InfoType | null;
  setInfo: React.Dispatch<React.SetStateAction<InfoType | null>>;
};

export default function Home() {
  const [info, setInfo] = React.useState<InfoType | null>(null);

  const getLtik = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const ltik = searchParams.get("ltik");
    if (!ltik) throw new Error("Missing lti key.");
    return ltik;
  };

  React.useEffect(() => {
    const getInfo = async () => {
      try {
        const launchInfo = await ky
          .get("https://lti-server.azurewebsites.net/info", {
            credentials: "include",
            headers: { Authorization: "Bearer " + getLtik() },
          })
          .json<InfoType>();
        setInfo(launchInfo);
      } catch (err) {
        console.error("Failed trying to retrieve custom parameters! " + err);
      }
    };
    getInfo();
    console.log(info);
  }, [info]);

  return (
    <section className="app animeLeft">
      <div className="container">
        <Image
          src={"https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/logotipo.svg"}
          width={695}
          height={242}
          alt="Logotipo"
          priority
        />
        <p>{info && info.name}</p>
        <Image
          src={"https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/personagens.png"}
          width={828}
          height={0}
          alt="Personagens"
          priority
          style={{ marginTop: "2rem" }}
        />
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Link href={"/welcome"} className="button">
            Jogar agora
          </Link>
        </div>
        <Image
          src={"https://cdn-quiz-a0cze4f3f0hkdjdu.z03.azurefd.net/assets/logotipo-sesi.svg"}
          width={208}
          height={71}
          alt="Logotipo Sesi"
          style={{ margin: "0 auto" }}
        />
      </div>
    </section>
  );
}
