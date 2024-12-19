import React, {useState} from "react";

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

const DragAndDropApp = () => {
    const [list, setList] = useState(INITIAL_LIST);

    return <div>
        {list.map((item, index) => (
            <div key={item.id}>
                {item.firstName} {item.lastName}
            </div>
        ))}
    </div>;
};

export default DragAndDropApp;