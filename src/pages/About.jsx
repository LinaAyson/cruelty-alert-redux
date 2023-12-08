import React from "react";
import Hero from "../components/Hero";
import SectionTextContent from "../Sections/SectionTextContent";

export default function About() {
  return (
    <main>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1529864539815-de90220aedfb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="About Cruelty Alert"
        text="Working Towards a Compassionate World"
        buttonText="Learn more"
        buttonLink="/about"
      />
      <SectionTextContent
        subTitle="Our Mission"
        text=" Cruelty Alert is dedicated to creating a world where animals are
           treated with compassion, respect, and dignity. We strive to raise
           awareness about animal abuse, provide a platform for reporting
          incidents, and work towards positive change."
      />
      <SectionTextContent
        subTitle="What We Do"
        text="Through education, advocacy, and community engagement, we aim to
           combat animal cruelty at its roots. Our organization collaborates with
           individuals, communities, and authorities to ensure the well-being of
           animals and promote a harmonious coexistence."
      />
      <SectionTextContent
        subTitle="Understanding Animal Abuse"
        text=" Animal abuse is a pressing issue that demands attention. Learn more
                about the signs of abuse, its impact on animals, and how together, we
             can take steps to prevent and address instances of cruelty."
      />
    </main>
  );
}
