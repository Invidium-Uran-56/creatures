# Creatures Starter

This is the starter project containing the sleeping creatures scene.


Basic level:
The Creature component uses useState to track whether the creature is awake (isAwake, initial value false).
The Creature component is clickable with an onClick handler.
The displayed image is chosen with conditional rendering based on isAwake. The Creature component receives two image props, sleepImageUrl and awakeImageUrl.
When a creature is clicked, isAwake is toggled and (when waking up) the creature moves to a new random position within the field. Use Math.random() to generate the new coordinates.

About multiple state updates: a single onClick handler can call multiple setter functions. The order of setter calls does not matter, React batches them and re-renders once. About images: the awake images for each creature are already in the starter project's public/images/ folder, named consistently with the sleep images (e.g., first_sleep.png and first_awake.png).

Advanced:
Lift the creature state up to CreatureField as an array of creature objects. CreatureField passes each creature's data as props to the Creature components and passes an onWake callback for state updates.
Implement at least one of the following feature that requires the lifted state:
- Show "X of 5 creatures awake" summary in CreatureField
- Change the CreatureField background color when all creatures are awake or all are asleep
- Add a "Wake all" / "Let all sleep" button in CreatureField that toggles all creatures at once

Submission (one submission per group)
One member of the group submits the files on Moodle on behalf of the whole group. Name the zip file with everyone's names.

Submit a ZIP file containing: Your entire project folder WITHOUT node_modules folder and a pdf with URL of your repo and screenshot of the app showing at least one creature awake.

Assessment (0-2 points)
0 points: no submission, or the app does not start (npm run dev fails), or the submission is fundamentally incomplete (e.g., no state added, no interactivity)

1 point: basic level requirements are met:
Clicking a creature toggles isAwake and (when waking up) moves it to a new random position. Image changes between sleep and awake based on state.

2 points: advanced level requirements are met:
Everything from basic level, and state is lifted up to CreatureField as an array. At least one feature using the lifted state is implemented (summary, background color change, or Wake all button).