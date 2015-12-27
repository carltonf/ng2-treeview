import {Component} from 'angular2/core';
import {TreeNodeComponent} from './tree-node.component/index';
import {TreeData} from './tree-data';
import {DragNDropService} from './drag_n_drop.service'

@Component({
    selector: 'tree-view',
    moduleId: module.id,
    templateUrl: 'tpl.html',
    styleUrls: [],
    inputs: ['treeData'],
    directives: [TreeNodeComponent],
    providers: [DragNDropService]
})
export class TreeViewComponent{
  public treeData: TreeData;
}