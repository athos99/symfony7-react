import useFetch  from "./useFetch";
import {getParam, setParam} from "../Param";
import useSimulFetch from "./useSimulFetch";
import Spinner from "./Spinner";
import waitFetch from "./WaitFetch";

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
    return <ul>
        {!data && <Spinner/>}
        {data && data.map(element => {
        return (<>{element &&
            (<li key={'a'+element.id}>{element.id} {element.name}</li>)}</>)
    })}</ul>

}


async function WaitListPerson() {
    const basename = getParam('basename');

    const data = await waitFetch(basename + 'api/list') as Person[] | null;
    return <ul>
        {!data && <Spinner/>}
        {data && data.map(element => {
            return (<>{element &&
                (<li key={'b'+element.id}>{element.id} {element.name}</li>)}</>)
        })}</ul>

}


function ListCity() {

    const data = useSimulFetch(city, 2000) as { id: number, name: string }[] | null;
    return <ul>
        {!data && <Spinner/>}
        {data && data.map(element => {
        return (<>{element &&
            (<li key={'c'+element.id}>{element.id} {element.name}</li>)}</>)
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
            <h4>Wait Person</h4>
        </div>
        <div className='col-6'>
            <h4>City</h4>
            <ListCity/>
        </div>
    </div></>
}