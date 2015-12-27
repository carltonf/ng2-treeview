// The exported data interface for the tree-view inputs
export interface TreeData {
  name: string;
  // text content, possibly change to html snippet in future
  // content?: string;
  children?: TreeData[];
}