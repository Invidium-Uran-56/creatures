function Creature(props) {
const style = {
position: 'absolute',
left: props.x + 'px',
top: props.y + 'px',
textAlign: 'center',
imageRendering: 'pixelated',
cursor: 'pointer'
};

function handleClick() {
    props.onWake();
}

return (
    <div style={style} onClick={handleClick}>
        <img
            src={
                props.isAwake
                    ? props.awakeImageUrl
                    : props.sleepImageUrl
            }
            alt={props.name}
            width="120"
        />

        <p>
            {props.name}, age {props.age}
        </p>

        <p>
            {props.isAwake ? 'AWAKE' : 'SLEEPING'}
        </p>
    </div>
);

}

export default Creature;