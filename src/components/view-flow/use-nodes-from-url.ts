import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import nodeData, { NodeName } from "../../mocks/node-data";
import NodeLabel from "../node-label/node-label";
import { Node, useNodesState, OnNodesChange } from "reactflow";

const useNodesFromUrl = (): [Node[], OnNodesChange] => {
  const [searchParams] = useSearchParams();
  const nodeParams = searchParams.get("searchNodes") || "[]";
  const searchNodes = JSON.parse(nodeParams);

  const nodesFromUrl = searchNodes?.map((key: string, index: number) => {
    const nodeKey = key as NodeName;

    return {
      id: `${nodeKey}-${index}`,
      position: { x: 100, y: 100 + index * 100 },
      data: { label: NodeLabel[nodeKey] },
      type: nodeData[nodeKey]?.type,
    };
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(nodesFromUrl);

  useEffect(() => {
    setNodes((nds) => {
      const existingNodesIds = nds.map((node) => node.id);

      const newNodes = nodesFromUrl.filter(
        (urlNode: Node) => !existingNodesIds.includes(urlNode.id)
      );

      const existingNodes = nds.map((node) => ({
        ...nodesFromUrl.find(({ id }: Node) => node.id === id),
        position: node.position,
      }));

      return [...existingNodes, ...newNodes];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeParams]);

  return [nodes, onNodesChange];
};

export default useNodesFromUrl;
