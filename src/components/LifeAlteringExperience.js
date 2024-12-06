import React, { useState } from "react";
import "./Modal.css";

const LifeAlteringExperience = () => {
  const [showModal, setShowModal] = useState(false);
  const [newExperience, setNewExperience] = useState({
    entryType: "",
    details: "",
    impact: "",
    application: "",
    themes: "",
    emotions: "",
  });

  const handleAddExperience = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    console.log("New Experience Submitted:", newExperience);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  return (
    <div className="lifealteringExperience">
      <h4>Life Altering Moments</h4>
      <ul>
        {/* Render existing experiences here */}
      </ul>
      <button onClick={handleAddExperience} className="add-btn">
        Add
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Life Altering Experiences and Defining Moments</h2>
            <p>
              Capture moments, no matter how small, reflect on their impact, and
              how you'll apply the lessons.
            </p>
            <form className="modal-form">
              <label>
                Normal Update/Competition Entry<span>*</span>
                <select
                  name="entryType"
                  value={newExperience.entryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Entry Type</option>
                  <option value="Normal Update">Normal Update</option>
                  <option value="Competition Entry">Competition Entry</option>
                </select>
              </label>
              <label>
                Details of this experience or defining moment<span>*</span>
                <textarea
                  name="details"
                  value={newExperience.details}
                  onChange={handleChange}
                  required
                  maxLength={500}
                />
              </label>
              <label>
                How did this experience change your life?<span>*</span>
                <textarea
                  name="impact"
                  value={newExperience.impact}
                  onChange={handleChange}
                  required
                  maxLength={500}
                />
              </label>
              <label>
                How will you apply these learnings?<span>*</span>
                <textarea
                  name="application"
                  value={newExperience.application}
                  onChange={handleChange}
                  required
                  maxLength={500}
                />
              </label>
              <label>
                Experience Themes
                <input
                  type="text"
                  name="themes"
                  value={newExperience.themes}
                  onChange={handleChange}
                  placeholder="Eg: Resilience, Leadership"
                />
              </label>
              <label>
                Emotions
                <input
                  type="text"
                  name="emotions"
                  value={newExperience.emotions}
                  onChange={handleChange}
                  placeholder="Eg: Hopeful, Proud"
                />
              </label>
              <div className="modal-buttons">
                <button type="button" onClick={handleSubmit}>
                  Submit
                </button>
                <button type="button" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeAlteringExperience;
