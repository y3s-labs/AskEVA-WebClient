import { useState } from "react";
import React from "react";
import "./Portfolio.css"; // We'll define the styles in this file

const Portfolio = ({ onAskEVA }) => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleAddButtonClick = () => {
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleAskEVA = () => {
    if (onAskEVA) {
      onAskEVA(lifeAlteringExperianceForm); // Call the parent component's function
    }
  };

  const lifeAlteringExperianceForm = {
    'currentlyViewing': 'Add Life Altering Experiance',
    'Form': {
      'name': 'Add life altering experiance',
      'description': "Capture moments, no matter how small, reflect on their impact, and how you'll apply the lessons. Updating this section at least once a week will track your growth. These experiences, both big and small, provide valuable leverage in college applications and interviews, as committees value rich personal insights.",
      'fields': {
        'Details of this experience or defining moment? Including when and where.': {
          'value': '',
          'eg1': "During a school science fair, I faced unexpected technical issues with my project while presenting, leading to a complete breakdown.",
        },
        'How did this experience or defining moment change your life?': {
          'value': '',
          'eg1': 'I now embrace challenges with a positive attitude, understanding that each setback is an opportunity to learn and improve in future endeavours.'
        },
        'How will you apply these learnings?': {
          'value': '',
          'eg1': ' I now embrace challenges with a positive attitude, understanding that each setback is an opportunity to learn and improve in future endeavours.'
        },
        'Experiance themes': {
          'value': '',
          'instructions': 'select a maximum of 2 experience themes that best represents the core lesson or personal growth you experienced. These themes help you reflect on the key qualities that shaped your experience.',
          'options': ['Resiliance, Curiosity, Leadership']
        },
        'Emotion': {
          'value': '',
          'instructions': 'Choose maximum of 2 emotions that best captures how you felt during the experience. Selecting an emotion helps you reflect on your feelings and personal growth in that moment.',
          'options': ['Excitement, Pride, Anxious']
        }
      }
    }
  };

  const cards = [
    {
      title: "Davos Worldwide - Critical Conversations",
      subtitle: "Online Speaker - Davos Worldwide",
      age: "15 To 25 Years",
      expiry: "10th Jan 2025",
      cost: "Free",
    },
    {
      title: "KECTIL Global Youth Fellowship",
      subtitle: "Prestigious Global Youth Fellowship",
      age: "15-26 Years",
      expiry: "25th Dec 2025",
      cost: "Free",
    },
    {
      title: "SCM Youth Fellowship",
      subtitle: "Premier Youth Fellowship",
      age: "10 To 25 Years",
      expiry: "25th Dec 2024",
      cost: "Free",
    },
  ];

  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>International Foundation for Sustainable Peace and Development</h1>
        <h2>BRIDGING PEOPLE BRIDGING COUNTRIES</h2>
      </header>

      <section className="cards-section">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <p>
              <strong>Age:</strong> {card.age}
            </p>
            <p>
              <strong>Expiry:</strong> {card.expiry}
            </p>
            <p>
              <strong>{card.cost}</strong>
            </p>
          </div>
        ))}
      </section>

      <section className="portfolio">
        <h2>PORTFOLIO</h2>
        <div className="portfolio-actions">
          <button className="btn edit">Edit Portfolio</button>
          <button className="btn download">Download Portfolio</button>
        </div>
        <div className="profile">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-details">
            <h3>Zac Sangeeth</h3>
            <p>History Enthusiast, Best Selling Author and Public Speaker.</p>
            <p>India</p>
            <div className="about">
              <h4>About:</h4>
              <p>
              Zac Sangeeth, 8th Grade, Headstart Educational Academy, Bangalore. One of the youngest historians in the world. Author of 3 best sellers - published by Penguin and Hachette. Youngest KECTIL Global Fellow. Making History accessible and interesting for everyone.
              </p>
            </div>
            <div className="education">
              <h4>Education:</h4>
              <ul>
                <li>KECTIL Fellowship from Knowles Educational and Charitable Trust for International Leadership (KECTIL)</li>
                <li>SCM Youth Fellowship from SCM Youth</li>
              </ul>
            </div>
            <div className="lifealteringExperiance">
              <h4>Life Altering Moments</h4>
              <ul>
                <li>Experience: When I was 6 years old, my parents went on a trip to Paris. When they came back, my mother took me through the pictures of her trip. One picture really caught my attention. When I asked my mother about this painting, she said that it was the Mona Lisa, the most famous painting in the world.</li>
                  <br></br><br></br>
                  Impact on Life: This piqued my curiosity. Every day I would research this painting and narrate what I had learnt to my parents. Over time my curiosity expanded, from the Mona Lisa to its artist, to the period in which he lived and slowly to the whole of history. I selected history as my future professional pursuit.
                  <br></br><br></br>
                  Learnings: While immersing myself in history, I learnt that history was a verbose and textual subject. This is why the subject is thought to be boring. I decided that I would apply my learnings, and make history a more accessible and interesting subject, by making it less verbose, and more to the point.
                  <br></br><br></br>
                  Experience Themes:
                  Ambition
                  <br></br><br></br>
                  Emotions:<br></br>
                  Hopeful
              </ul>
              <button className="btn edit" onClick={handleAddButtonClick}>Add</button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Life Altering Experience</h2>
            <form>
              <label>
                Details of this experience or defining moment? Including when and where.*:
                <textarea placeholder="Enter details" required></textarea>
              </label>
              <label>
                How did this experience or defining moment change your life?*:
                <textarea placeholder="Enter details" required></textarea>
              </label>
              <label>
                How will you apply these learnings?:
                <textarea placeholder="Enter details" required></textarea>
              </label>
              <label>
                Experiance Themes:
                <input type="text" placeholder="Enter themes" />
              </label>
              <label>
                Emotion:
                <input type="text" placeholder="Enter emotions" />
              </label>
              <div className="modal-buttons">
                <button
                  type="button"
                  onClick={handleAskEVA}
                  className="modal-askeva-btn"
                >
                  Ask EVA
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="modal-close-btn"
                >
                  Close
                </button>
                <button type="submit" className="modal-submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
