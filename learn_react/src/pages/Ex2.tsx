import React, {ReactElement, ReactNode, Reducer, useEffect, useReducer, useRef, useState} from "react";


type Person = {
    name: string,
};

function getPerson(): Promise<Person> {
    return new Promise((resolve) =>
        setTimeout(() => resolve({name: "Bob"}), 1000)
    );
}


function PersonScore1(): ReactNode {
    console.log('PersonScore1');
    useEffect(() => {
        getPerson().then((person) => console.log('getperson 1 : ' + person.name));
    }, []);
    return <div>PersonScore1</div>;
}

function PersonScore2(): ReactNode {
    console.log('PersonScore2');
    useEffect(() => {
        async function getThePerson() {
            const person = await getPerson();
            console.log('getperson 2 : ' + person.name);
        }

        getThePerson();
    }, []);
    return <div>
        PersonScore2
    </div>;
}


function PersonScore3(): ReactNode {
    console.log('PersonScore3');
    const [name, setName] = useState<string | undefined>();
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPerson().then((person) => {
            setLoading(false);
            setName(person.name);
            console.log('getperson 3 : ' + person.name);
        });
    }, []);
    if (loading) {
        return <div>Loading ...</div>;
    }
    return <div>
        PersonScore3
        <h3>{name}, {score}</h3>
        <button onClick={() => setScore(score + 1)}>Add</button>
        <button onClick={() => setScore(score - 1)}>Subtract</button>
        <button onClick={() => setScore(0)}>Reset</button>
    </div>;
}


function PersonScore4(): ReactNode {
    type State = {
        name: string | undefined;
        score: number;
        loading: boolean;
    };
    type Action = { type: 'initialize'; name: string; } | { type: 'increment'; } |
        { type: 'decrement'; } | { type: 'reset'; };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case 'initialize':
                return {name: action.name, score: 0, loading: false};
            case 'increment':
                return {...state, score: state.score + 1};
            case 'decrement':
                return {...state, score: state.score - 1};
            case 'reset':
                return {...state, score: 0};
            default:
                return state;
        }
    }

    console.log('PersonScore4');
    const [{name, score, loading}, dispatch] = useReducer(
        reducer,
        {
            name: undefined,
            score: 0,
            loading: true,
        }
    );
    useEffect(() => {
        getPerson().then(({name}) =>
            dispatch({type: 'initialize', name})
        );
    }, []);
    if (loading) {
        return <div>Loading ...</div>;
    }
    return <div>
        PersonScore4
        <h3>{name}, {score}</h3>
        <button onClick={() => dispatch({type: 'increment'})}>Add</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Subtract</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>;
}

function PersonScore5(): ReactNode {
    type State = {
        name: string | undefined;
        score: number;
        loading: boolean;
    };
    type Action = { type: 'initialize'; name: string; } | { type: 'increment'; } |
        { type: 'decrement'; } | { type: 'reset'; };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case 'initialize':
                return {name: action.name, score: 0, loading: false};
            case 'increment':
                return {...state, score: state.score + 1};
            case 'decrement':
                return {...state, score: state.score - 1};
            case 'reset':
                return {...state, score: 0};
            default:
                return state;
        }
    }

    console.log('PersonScore5');
    const [{name, score, loading}, dispatch] = useReducer(
        reducer,
        {
            name: undefined,
            score: 0,
            loading: true,
        }
    );
    const addButtonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (!loading) {
            addButtonRef.current?.focus();
        }
        getPerson().then(({name}) =>
            dispatch({type: 'initialize', name})
        );
    }, [loading]);
    if (loading) {
        return <div>Loading ...</div>;
    }
    return <div>
        PersonScore5
        <h3>{name}, {score}</h3>
        <button  ref={addButtonRef} onClick={() => dispatch({type: 'increment'})}>Add</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Subtract</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>;
}

export default function Ex2() {
    return <>
        <h2>Ex2</h2>
        <PersonScore1></PersonScore1>
        <PersonScore2></PersonScore2>
        <PersonScore3></PersonScore3>
        <PersonScore4></PersonScore4>
        <PersonScore5></PersonScore5>
    </>;
}

