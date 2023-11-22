import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div id="about-me" className={styles.container}>
      <div className={styles.info}>
        <SectionHeader title="about-me" />
        <h1>Zack Bradshaw: A Tech Odyssey 🚀</h1>
        <p>Embarking on an endless voyage through the vast and varied realms of technology, I am a perpetual explorer. My journey through the technological cosmos is akin to an ever-evolving narrative, where each domain I explore adds a new verse to my saga. Here’s a glimpse of my tech odyssey across various domains:</p>

        <h3>Web Development 🌐:</h3>
        <p>Weaving the intricate tapestry of codes, I knit pixels and protocols into digital canvases, providing a gateway for people to explore the world wide web. The enigmatic codebase is my lexicon, enabling me to script digital stories.</p>

        <h3>Game Development 🎮:</h3>
        <p>Traversing into the gaming universes, I sculpt virtual realms, painting immersive stories through the lens of interactive design. Each game level is a novel, each character an embodiment of a unique tale.</p>

        <h3>Artificial Intelligence 🤖:</h3>
        <p>Amidst the frontier of artificial intelligence, I breathe life into autonomous agents, honing the underlying models that fuel their cognition. Through the lens of AI, I endeavor to unfurl the silken threads of machine cognition.</p>

        <h3>Software and Hardware Development 🎭:</h3>
        <p>The theater of software and hardware development unveils my finesse in molding digital and electronic clay, crafting both the stage and the script for tech dramas. The ballet of bits and bytes performs to my orchestrated symphonies.</p>

        <h3>Electrical Tinkering 🔌:</h3>
        <p>The playground of circuits and semiconductors, where my creative currents find their flow. Each circuit designed, each semiconductor synced, dances to the rhythm of my electric dreams.</p>


        <h2>🌐 Community Engagements:</h2>

        <h3>OpenSGF:</h3>
        <ul>
          <li>As a co-organizer, I actively contribute to projects that deliver websites for non-profits, bridging the digital divide for them 🌉.</li>
          <li>Providing a robust platform for budding developers to gain real-world experience, nurturing the next generation of tech mavens 🌱.</li>
          <li>Engage with the community on <a href="https://discord.gg/JJRpkNGX" target="_blank">Discord</a>.</li>
        </ul>

        <h3>SGF Devs:</h3>
        <ul>
          <li>Participant in a vibrant network of developers, engendering a rich ecosystem of collaborative learning and innovation 🌐.</li>
          <li>Regular interactions within this group provide a conduit for exchanging ideas, exploring tech trends, and building a communal support system vital for nurturing the local tech scene 🤝.</li>
          <li>Join the conversation on <a href="https://discord.gg/qs5kZSgw6y" target="_blank">Discord</a>.</li>
        </ul>

        <h3>Discord Community:</h3>
        <ul>
          <li>Leading the official hackathon team, spearheading initiatives aimed at delving into pioneering papers, orchestrating open-source contributions, and nurturing a vibrant hub for tech enthusiasts 📜.</li>
          <li>Be a part of our <a href="https://discord.gg/83k959dKvy" target="_blank">Agora Discord community</a> to explore, learn, and collaborate on various tech fronts.</li>
        </ul>


        <h2>🏆 Hackathon Achievements:</h2>
        <ul>
          <li><a href="https://lablab.ai/event/autonomous-agents-hackathon/agora-spartans/ikigai" target="_blank">Ikigai Project - Top 25</a>: A venture into autonomous agents, blending unique AI frameworks to carve out notable solutions 🤖.</li>
          <li><a href="https://lablab.ai/event/llama-2-hackathon-with-clarifai/agora-spartans/profit-pilot" target="_blank">Profit Pilot - Top 8</a>: Fusing AI with intuitive interfaces to drive optimized outcomes in the business landscape📈.</li>
          <li><a href="https://zackbradshaw.itch.io/riseofagora" target="_blank">Game Jam - Rise of Agora</a>: An amalgamation of my love for game development and AI, fostering a novel gaming experience 🎮.</li>
        </ul>


        <h2>🛠 Tech Strengths:</h2>
        <ul>
          <li>Proficient in a wide spectrum of tech domains, encompassing local and cloud computing, autonomous agent systems, and the underlying models themselves 🌐.</li>
          <li>Pioneering in electrical tinkering, unraveling the nuances of hardware to provide holistic tech solutions 🔌.</li>
          <li>Versatile problem-solving capabilities honed through diverse project engagements 🧩.</li>
          <li>Demonstrated leadership and community-building acumen, guiding hackathon teams to victory and fostering vibrant, collaborative tech communities 🏆.</li>
        </ul>


        <h2>🎓 Continuous Learning:</h2>
        <p>My ardor for continuous learning is manifested through active involvement in dissecting and implementing cutting-edge papers 📚. A zealous contributor to open-source projects, I am committed to pushing the boundaries of what's possible 🔧.</p>

      </div>
    </div>
  );
};

export default AboutMe;
