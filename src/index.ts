import {Component} from 'angular2/core';

import {NodeNameComponent} from './node-name.component/index';
import {TreeNode} from './tree-node';

@Component({
    selector: 'tree-view',
    moduleId: module.id,
    templateUrl: 'tpl.html',
    styleUrls: ['style.css'],
    inputs: ['tree'],
    // Note: TreeComponent is necessary for recursive use
    directives: [NodeNameComponent, TreeComponent],
})
export class TreeComponent {
  public tree: TreeNode;
}