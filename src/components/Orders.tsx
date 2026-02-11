import useOrdersQuery from "../queries/useOrdersQuery";
import useAuthContext from "../context/hooks/useAuthContext";
import OneOrder from "./OneOrder";
import { DragDropContext } from "@hello-pangea/dnd";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const Orders = () => {
  const { token } = useAuthContext();
  const { data, isLoading, error } = useOrdersQuery(token);
  const [draggableOrders, setDraggableOrders] = useState(data || []);

  useEffect(() => {
    if (data) {
      setDraggableOrders(data);
    }
  }, [data]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(draggableOrders);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDraggableOrders(items);
  };

  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;

  if (!draggableOrders || draggableOrders.length === 0) {
    return <div>No orders found</div>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="orders">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-purple-300  p-4 flex flex-col gap-4 rounded-lg mb-10"
          >
            {draggableOrders.map((order, index) => (
              <Draggable key={order._id} draggableId={order._id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <OneOrder order={order} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Orders;
