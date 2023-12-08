import React from "react";
import Hero from "../components/Hero";
import Content from "../Sections/Content";

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
      <Content /> <Content />
    </main>
  );
}
