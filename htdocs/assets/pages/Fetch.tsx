import useFetch  from "./useFetch";
import {getParam} from "../Param";
import useSimulFetch from "./useSimulFetch";
import Spinner from "./Spinner";
import WaitFetch from "./WaitFetch";
import { v4 as uuidv4 } from 'uuid';

const city = [
    {
        "id": "1",
        "name": "Geneva"
    },
    {
        "id": "2",
        "name": "Zürich"
    },
    {
        "id": "3",
        "name": "Paris"
    },
    {
        "id": "4",
        "name": "Berlin"
    },
    {
        "id": "5",
        "name": "New-York"
    },
    {
        "id": "6",
        "name": "Berlin"
    }
]


function ListPerson() {
    const basename = getParam('basename');

    const data = useFetch(basename + 'api/list') as Person[] | null;
    const key=uuidv4();
    return <ul key={key}>
        {!data && <Spinner/>}
        {data && data.map(element => {
        return (<>{element &&
            (<li key={key+element.id}>{element.id} {element.name}</li>)}</>)
    })}</ul>

}


async function WaitListPerson() {
    const basename = getParam('basename');

    const data = await WaitFetch(basename + 'api/list') as Person[] | null;
    const key=uuidv4();
    return <ul key={key}>
        {!data && <Spinner/>}
        {data && data.map(element => {
            return (<>{element &&
                (<li key={key+element.id}>{element.id} {element.name}</li>)}</>)
        })}</ul>

}


function ListCity() {

    const data = useSimulFetch(city, 2000) as { id: number, name: string }[] | null;
    const key=uuidv4();
    return <ul key={key}>
        {!data && <Spinner/>}
        {data && data.map(element => {
        return (<>{element &&
            (<li key={key+element.id}>{element.id} {element.name}</li>)}</>)
    })}</ul>

}


export default function Fetch() {
    console.log('fetch function');
    return <><div className='row'>
         <div className='col-6'>
            <h4>Person</h4>
            <ListPerson/>
        </div>
        <div className='col-6'>
            <h4>Person</h4>
            <ListPerson/>
        </div>
        <div className='col-6'>
            <h4>City</h4>
            <ListPerson/>
        </div>
    </div></>
}