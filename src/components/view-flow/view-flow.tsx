import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Edge,
  Connection,
  useEdgesState,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import { StyledViewFlow } from "./view-flow.styles";
import useNodesFromUrl from "./use-nodes-from-url";

const ViewFlow = () => {
  const [nodes, onNodesChange] = useNodesFromUrl();
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <StyledViewFlow>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </StyledViewFlow>
  );
};

export default ViewFlow;
