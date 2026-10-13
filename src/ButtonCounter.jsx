import {usestate} from 'react';

function Creature(props) {
    let [isAwake, setIsAwake] = useState(false);
    let [name, setName] = useState("START");
}

function handleClick(){
    if (!isAwake) {
        setName("SLEEPING")
        setIsAwake(true);
    } else {
        setName("AWAKE")
        setIsAwake(false)
    }
}

return (
    <div onClick={handleClick}>
        <p>{name}</p>
    </div>
)

export default Creature;