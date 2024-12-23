import List, {ListPerson, Person} from "../components/List";
import {useState} from "react";

const INITIAL_LIST = [
    {
        id: '1',
        firstName: 'Robin',
        lastName: 'Wieruch',
    },
    {
        id: '2',
        firstName: 'Aiden',
        lastName: 'Kettel',
    },
    {
        id: '3',
        firstName: 'Jannet',
        lastName: 'Layn',
    },
];

const reorder = (list: ListPerson, startIndex: number, endIndex: number): ListPerson => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DragAndDropApp = () => {
    const [list, setList] = useState(INITIAL_LIST);
    const handleDragEnd = ({destination, source}: { destination: any, source: any }) => {
        if (!destination) return;

        setList(reorder(list, source.index, destination.index));
        console.log(list);
        // reorder list
    };
    return <List
        list={list} onDragEnd={handleDragEnd}
                 dragItemStyle={{
                     background: 'pink',
                     borderRadius: '16px',
                 }}
                 dragListStyle={{
                     background: 'lightblue',
                     borderRadius: '16px',
                 }}
    >
        {(item, dragHandleProps) => (
            <>
                xxxxxxxx
                <span {...dragHandleProps}>{item.firstName}&nbsp; {item.lastName} #</span>
            </>
        )}
    </List>
};

export default DragAndDropApp;