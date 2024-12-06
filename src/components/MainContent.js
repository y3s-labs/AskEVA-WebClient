import React, { useState } from "react";

const MainContent = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main>
      <section>
        <h2>About IFSPD</h2>
        <p>
          The International Foundation for Sustainable Peace and Development is a
          non-governmental organization dedicated to promoting peace and fostering development
          worldwide.
        </p>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show More"}
        </button>
        {showDetails && (
          <p>
            Founded by distinguished intellectuals, diplomats, and public figures, IFSPD strives
            to make a difference through education, collaboration, and innovation.
          </p>
        )}
      </section>
    </main>
  );
};

export default MainContent;
