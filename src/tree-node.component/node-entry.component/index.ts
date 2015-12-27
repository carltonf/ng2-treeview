import {Component, EventEmitter} from 'angular2/core';
import {NodeNameComponent} from './node-name.component/index';

@Component({
  selector: 'node-entry',
  moduleId: module.id,
  templateUrl: 'tpl.html',
  styleUrls: ['style.css'],
  inputs: ['name', 'foldStatus'],
  outputs: ['foldStatusChange'],
  directives: [NodeNameComponent]
})
export class NodeEntryComponent {
  public name: string;
  public foldStatus: string;
  foldStatusChange = new EventEmitter<string>();

  onFoldToggle() {
    switch (this.foldStatus) {
      case 'expanded':
        // this.foldStatus = 'folded';
        this.foldStatusChange.emit('folded');
        break;
      case 'folded':
        // this.foldStatus = 'expanded';
        this.foldStatusChange.emit('expanded');
        break;
      case 'noChildren':
        // do nothing
        break;
      default:
    }
  }
}