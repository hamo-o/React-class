import React,{useState} from "react";
import OddEvenResult from "./OddEvenResult";

// const Counter = (props) => {
const Counter = ({initialValue, f}) => {

    // console.log(props);

    console.log("counter 호출");

    // const [count, setCount] = useState(props.initialValue);
    const [count, setCount] = useState(initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return(
        <div>
            <div>defaultProps값: {f}</div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    );
}

Counter.defaultProps = {
    f: 0
}

export default Counter;