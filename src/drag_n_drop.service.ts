import {TreeData} from './tree-data';
import {TreeNodeComponent} from './tree-node.component/index'

export class DragNDropService {
  draggedTreeNode: TreeNodeComponent;

  getDraggedNode() {
    return this.draggedTreeNode;
  }

  setDraggedNode(node: TreeNodeComponent) {
    this.draggedTreeNode = node;
  }
}