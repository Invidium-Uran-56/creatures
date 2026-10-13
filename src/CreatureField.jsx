import { useState } from 'react';
import Creature from './Creature.jsx';

function CreatureField() {
const [creatureData, setCreatureData] = useState([
{
id: 1,
name: "Mr. Fresh",
age: 3,
sleepImageUrl: "/images/first_sleep.png",
awakeImageUrl: "/images/first_awake.png",
x: 120,
y: 140,
isAwake: false
},
{
id: 2,
name: "Meimei",
age: 5,
sleepImageUrl: "/images/second_sleep.png",
awakeImageUrl: "/images/second_awake.png",
x: 300,
y: 260,
isAwake: false
},
{
id: 3,
name: "Bingus",
age: 2,
sleepImageUrl: "/images/third_sleep.png",
awakeImageUrl: "/images/third_awake.png",
x: 550,
y: 40,
isAwake: false
},
{
id: 4,
name: "Leipä",
age: 4,
sleepImageUrl: "/images/fourth_sleep.png",
awakeImageUrl: "/images/fourth_awake.png",
x: 150,
y: 420,
isAwake: false
},
{
id: 5,
name: "Mista",
age: 4,
sleepImageUrl: "/images/fifth_sleep.png",
awakeImageUrl: "/images/fifth_awake.png",
x: 550,
y: 590,
isAwake: false
}
]);

// Update one creature's state
function handleWake(id) {
    setCreatureData(previousData =>
        previousData.map(creature => {
            if (creature.id === id) {
                const wakingUp = !creature.isAwake;

                return {
                    ...creature,
                    isAwake: wakingUp,
                    x: wakingUp
                        ? Math.floor(Math.random() * 650)
                        : creature.x,
                    y: wakingUp
                        ? Math.floor(Math.random() * 650)
                        : creature.y
                };
            }

            return creature;
        })
    );
}

// Count awake creatures
const awakeCount = creatureData.filter(
    creature => creature.isAwake
).length;

// Wake all creatures or let all sleep
function handleToggleAll() {
    const wakeAll = awakeCount < creatureData.length;

    setCreatureData(previousData =>
        previousData.map(creature => ({
            ...creature,
            isAwake: wakeAll,
            x: wakeAll
                ? Math.floor(Math.random() * 650)
                : creature.x,
            y: wakeAll
                ? Math.floor(Math.random() * 650)
                : creature.y
        }))
    );
}

// Change background when all creatures are awake
let backgroundColor = '#6b8c66';

if (awakeCount === creatureData.length) {
    backgroundColor = '#d9b45b';
} else if (awakeCount === 0) {
    backgroundColor = '#6b8c66';
}

// Field styling
const fieldStyle = {
    position: 'relative',
    width: '800px',
    height: '800px',
    border: '2px solid #ccc',
    margin: '20px auto',
    backgroundColor: backgroundColor
};

return (
    <div>
        <h2 style={{ textAlign: 'center' }}>
            {awakeCount} of {creatureData.length} creatures awake
        </h2>

        <div style={{ textAlign: 'center' }}>
            <button onClick={handleToggleAll}>
                {awakeCount === creatureData.length
                    ? 'Let all sleep'
                    : 'Wake all'}
            </button>
        </div>

        <div style={fieldStyle}>
            {creatureData.map(creature => (
                <Creature
                    key={creature.id}
                    {...creature}
                    onWake={() => handleWake(creature.id)}
                />
            ))}
        </div>
    </div>
);

}

export default CreatureField;