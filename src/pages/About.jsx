import React from "react";
import Hero from "../components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1635109836848-770dde2ea546?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="About Cruelty Alert"
        text="Working Towards a Compassionate World"
        buttonText="Learn more"
        buttonLink="/about"
      />
      {/* Add more content about the organization and information about animal abuse */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          Cruelty Alert is dedicated to creating a world where animals are
          treated with compassion, respect, and dignity. We strive to raise
          awareness about animal abuse, provide a platform for reporting
          incidents, and work towards positive change.
        </p>
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="mb-6">
          Through education, advocacy, and community engagement, we aim to
          combat animal cruelty at its roots. Our organization collaborates with
          individuals, communities, and authorities to ensure the well-being of
          animals and promote a harmonious coexistence.
        </p>
        <h2 className="text-3xl font-bold mb-4">Understanding Animal Abuse</h2>
        <p>
          Animal abuse is a pressing issue that demands attention. Learn more
          about the signs of abuse, its impact on animals, and how together, we
          can take steps to prevent and address instances of cruelty.
        </p>
      </div>
    </div>
  );
}
