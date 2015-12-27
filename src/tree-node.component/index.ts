import {Component, OnInit} from 'angular2/core';
import {NodeEntryComponent} from './node-entry.component/index';
import {TreeData} from '../tree-data';
import {DragNDropService} from '../drag_n_drop.service'

@Component({
    selector: 'tree-node',
    moduleId: module.id,
    templateUrl: 'tpl.html',
    styleUrls: ['style.css'],
    inputs: ['treeData', 'parentTreeData'],
    // Note: TreeNodeComponent is necessary for recursive use
    directives: [NodeEntryComponent, TreeNodeComponent],
})
export class TreeNodeComponent {
  public treeData: TreeData;
  public parentTreeData: TreeData;
  foldStatus: string;

  constructor(protected dndSerice: DragNDropService){}
  // executed after data-bound properties have been initialized.
  ngOnInit() {
    this.foldStatus = this.treeData.children
                        ? 'expanded' : 'noChildren';
  }


}