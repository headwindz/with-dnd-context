import React  from "react";
import {
  DragDropContext,
  DragDropContextConsumer,
  ContextComponent
} from "react-dnd";
import { BackendFactory } from 'dnd-core';
import HTML5Backend from "react-dnd-html5-backend";

let defaultDragDropContext: <TargetClass extends React.ComponentType<any>>(
  DecoratedComponent: TargetClass
) => TargetClass & ContextComponent<any>;

function getDefaultDragDropContext(backendFactory: BackendFactory) {
  if (!defaultDragDropContext) {
    defaultDragDropContext = DragDropContext(backendFactory);
  }
  return defaultDragDropContext;
}

const withDndContext = (
  WrappedComponent: React.ComponentType<any>,
  backendFactory: BackendFactory = HTML5Backend
): React.ComponentType<any> => {
  return (props: any) => {
    return (
      <DragDropContextConsumer>
        {value => {
          if (value && value.dragDropManager != null) {
            return <WrappedComponent {...props} />;
          }
          const Comp = getDefaultDragDropContext(backendFactory)(WrappedComponent);
          return <Comp {...props} />;
        }}
      </DragDropContextConsumer>
    );
  };
};

export default withDndContext;
