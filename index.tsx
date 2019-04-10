import React from "react";
import {
  DragDropContext,
  DragDropContextConsumer,
  ContextComponent
} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

let defaultDragDropContext: <TargetClass extends React.ComponentType<any>>(
  DecoratedComponent: TargetClass
) => TargetClass & ContextComponent<any>;

function getDefaultDragDropContext() {
  if (!defaultDragDropContext) {
    defaultDragDropContext = DragDropContext(HTML5Backend);
  }
  return defaultDragDropContext;
}

const withDndContext = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <DragDropContextConsumer>
        {value => {
          if (value && value.dragDropManager != null) {
            return <WrappedComponent {...props} />;
          }
          const Comp = getDefaultDragDropContext()(WrappedComponent);
          return <Comp {...props} />;
        }}
      </DragDropContextConsumer>
    );
  };
};

export default withDndContext;
