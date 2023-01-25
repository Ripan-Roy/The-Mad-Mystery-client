import gameImage from "../../assets/gifs/subscribe.gif";
import React from "react";
import "./aboutGame.css";

export default function AboutGame() {
  return (
    <div className="about-game-container">
      <img src={gameImage} alt="Game" className="game-image" />
      <div className="game-description">
        <h3>The TMMT</h3>
        <p>
          The TMMT was born from our passion for treasure hunting, scavenger
          games, quests, puzzles, and riddles. Our goal was to create a game
          that everyone could enjoy. We are thrilled with the positive feedback
          we have received and as a result, we have decided to schedule TMMTs on
          a regular basis going forward.
        </p>
      </div>
    </div>
  );
}