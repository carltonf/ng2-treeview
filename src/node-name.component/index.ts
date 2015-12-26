import {Component} from 'angular2/core';

@Component({
    selector: 'node-name',
    moduleId: module.id,
    templateUrl: 'tpl.html',
    inputs: ['name'],
})
export class NodeNameComponent {
  public name: string;
}