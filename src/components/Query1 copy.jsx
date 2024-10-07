// import { useState, useEffect } from "react";
// import "./styles.css";

// function Query() {
//   const [query, setQuery] = useState("");
//   const [queryHistory, setQueryHistory] = useState([]);
//   const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
//   const [score, setScore] = useState(150);
//   const [progress, setProgress] = useState(10);
//   const [correctQueriesSolved, setCorrectQueriesSolved] = useState(0);
//   const [hintCounter, setHintCounter] = useState(0);
//   const [storyline, setStoryline] = useState(queries[0]);
//   const [hintText, setHintText] = useState(hints[0][0]);
//   const [modalVisible, setModalVisible] = useState(false); // for settings menu visibility
//   const [soundEnabled, setSoundEnabled] = useState(true); // track sound settings
//   const [timeElapsed, setTimeElapsed] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeElapsed((prevTime) => prevTime + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const playSound = (isCorrect) => {
//     if (soundEnabled) {
//       const sound = document.getElementById(
//         isCorrect ? "correct-sound" : "incorrect-sound"
//       );
//       sound.play();
//     }
//   };

//   const handleQuerySubmit = (e) => {
//     e.preventDefault();
//     if (query.trim() === "") {
//       alert("Query cannot be empty");
//       return;
//     }
//     setQueryHistory([...queryHistory, query]);
//     setQuery("");
//     checkAnswer();
//   };

//   const checkAnswer = () => {
//     if (currentQueryIndex < queries.length) {
//       if (correctQueriesSolved < queries.length) {
//         setStoryline("Excellent! Next, " + queries[currentQueryIndex + 1]);
//         setCorrectQueriesSolved(correctQueriesSolved + 1);
//         setScore(score + 100);
//         setProgress(progress + 8);
//         playSound(true);
//       } else {
//         setStoryline("Oops! Please try again. " + queries[currentQueryIndex]);
//         setScore(score - 10);
//         playSound(false);
//       }
//     }
//   };

//   const handleHint = () => {
//     if (hintCounter < hints[currentQueryIndex].length) {
//       setHintText(hints[currentQueryIndex][hintCounter]);
//       setScore(score - hintPoints[hintCounter]);
//       setHintCounter(hintCounter + 1);
//     }
//   };

//   const restartGame = () => {
//     setQueryHistory([]);
//     setScore(150);
//     setProgress(10);
//     setCorrectQueriesSolved(0);
//     setCurrentQueryIndex(0);
//     setStoryline(queries[0]);
//     setHintCounter(0);
//     setHintText(hints[0][0]);
//     setTimeElapsed(0);
//   };

//   const toggleSound = () => setModalVisible(!modalVisible); // Show/hide modal

//   const handleSoundOption = (enabled) => {
//     setSoundEnabled(enabled);
//     setModalVisible(false); // Close modal after selection
//   };

//   return (
//     <div className="container">
//       <div className="main-panel">
//         <div className="main-panel-container">
//           <div className="main-panel-content">
//             <div className="display-text">{queryHistory.join("\n")}</div>
//           </div>

//           <div className="input-box">
//             <form id="query-form" onSubmit={handleQuerySubmit}>
//               <div className="input-container">
//                 <textarea
//                   id="query-textarea"
//                   rows="8"
//                   placeholder="Enter your SQL query here"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                 ></textarea>
//                 <button type="submit" id="submit-button">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="side-panel">
//         <div className="side-panel-content">
//           <h2>Cybernetic Sabotage</h2>
//           <div className="button-container">
//             <button id="restart-button" onClick={restartGame}>
//               Restart
//             </button>
//             <button id="hint-button" onClick={handleHint}>
//               Hint
//             </button>
//             <button id="settings-button" onClick={toggleSound}>
//               Settings
//             </button>
//           </div>

//           <div className="info-container">
//             <div id="timer">Time: {timeElapsed}s</div>
//             <div id="score">Score: {score}</div>
//             <div id="correct-queries">
//               Q: {correctQueriesSolved} / {queries.length}
//             </div>
//           </div>

//           <div className="progress-container">
//             <span>Progress</span>
//             <div id="progress-bar-container">
//               <div id="progress-bar" style={{ width: `${progress}%` }}>
//                 <span id="progress-text">{progress}%</span>
//               </div>
//             </div>
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Database Schema</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Employee</td>
//                 <td>EmployeeID, Name, Job Role, Division, Last Login Time</td>
//               </tr>
//               <tr>
//                 <td>Robot</td>
//                 <td>
//                   RobotID, Model, Manufacturing Date, Status, Update Date, Last
//                   Updated By
//                 </td>
//               </tr>
//               <tr>
//                 <td>Log</td>
//                 <td>
//                   LogID, EmployeeID, Action Description, Timestamp, Robot ID
//                 </td>
//               </tr>
//               <tr>
//                 <td>Incident</td>
//                 <td>
//                   IncidentID, Description, Timestamp, RobotID, Reported By
//                 </td>
//               </tr>
//               <tr>
//                 <td>Access_Code</td>
//                 <td>Access Code, EmployeeID, Access Level, Last Access</td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="inner-box-side">
//             <h3>Trinity</h3>
//             <p id="trinity-text">{storyline}</p>
//             <p id="hint-text">Hint: {hintText}</p> {/* Display hint */}
//           </div>
//         </div>
//       </div>

//       {/* Modal for sound settings */}
//       {modalVisible && (
//         <div id="sound-modal" className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={toggleSound}>
//               &times;
//             </span>
//             <p>Sound Options</p>
//             <button onClick={() => handleSoundOption(true)}>Sound On</button>
//             <button onClick={() => handleSoundOption(false)}>Sound Off</button>
//           </div>
//         </div>
//       )}

//       <audio
//         id="correct-sound"
//         src="audio/mixkit-correct-answer-tone-2870.wav"
//       ></audio>
//       <audio
//         id="incorrect-sound"
//         src="audio/mixkit-failure-arcade-alert-notification-240.wav"
//       ></audio>
//     </div>
//   );
// }

// const queries = [
//   "List all incidents from the 'Incident' table.",
//   "Find the most recent incident involving these models.",
//   "Find out how many incidents exist in the company for these robot models.",
//   // Add other queries as needed
// ];

// const hints = [
//   [["Use SELECT * FROM Incident to list all incidents."]],
//   [["Order the incidents by timestamp to find the most recent one."]],
//   [["Use COUNT to count the number of incidents for each model."]],
//   // Add other hints as needed
// ];

// const hintPoints = [40, 60, 80];

// export default Query;
