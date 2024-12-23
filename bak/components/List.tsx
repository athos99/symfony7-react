import {DragDropContext, Draggable, Droppable, OnDragEndResponder} from '@hello-pangea/dnd';

export interface Person {
    id: string,
    firstName: string,
    lastName: string
}

export type ListPerson = Person[];

const Item = ({index, item, dragItemStyle = {}, children }) => (
    <Draggable index={index} draggableId={item.id}>
        {(provided, snapshot) => (
            <div ref={provided.innerRef}
                 {...provided.draggableProps}
                 //   {...provided.dragHandleProps}
                 style={{
                     // default item style
                     padding: '8px 16px',
                     // default drag style
                     ...provided.draggableProps.style,
                     ...(snapshot.isDragging ? dragItemStyle : {}),
                 }}>
                {children(item, provided.dragHandleProps)}
            </div>
        )}
    </Draggable>
);

const List = ({list, onDragEnd, dragListStyle = {},...props}: { list: ListPerson, onDragEnd: OnDragEndResponder, dragItemStyle?:any, dragListStyle?:any }) => (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="vertical">
            {(provided,snapshot) => (
                <div ref={provided.innerRef}
                     {...provided.droppableProps}
                     style={{  }}
                >
                    {list.map((item, index) => (
                        <Item key={item.id} index={index} item={item} {...props}/>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>
);
export default List;