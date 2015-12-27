import {Component, OnInit} from 'angular2/core';

import {NodeNameComponent} from './node-name.component/index';
import {TreeData} from './tree-data';

@Component({
    selector: 'tree-view',
    moduleId: module.id,
    templateUrl: 'tpl.html',
    styleUrls: ['style.css'],
    inputs: ['treeData'],
    // Note: TreeComponent is necessary for recursive use
    directives: [NodeNameComponent, TreeViewComponent],
})
export class TreeViewComponent implements OnInit{
  public treeData: TreeData;
  foldStatus: string;

  // executed after data-bound properties have been initialized.
  ngOnInit() {
    this.foldStatus = this.treeData.children
                        ? 'expanded' : 'noChildren';
  }

  onFoldToggle() {
    switch(this.foldStatus){
      case 'expanded':
        this.foldStatus = 'folded';
        break;
      case 'folded':
        this.foldStatus = 'expanded';
        break;
      case 'noChildren':
        // do nothing
        break;
      default:
    }
  }
}