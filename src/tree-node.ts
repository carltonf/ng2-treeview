export interface TreeNode {
  name: string;
  // text content, possibly change to html snippet in future
  // content?: string;
  children?: TreeNode[];
}