import { Component } from 'angular2/core';
import { NgSwitch, NgSwitchDefault, NgSwitchWhen } from 'angular2/common';

@Component({
    selector: 'node-name',
    moduleId: module.id,
    templateUrl: 'tpl.html',
    inputs: ['name'],
})
export class NodeNameComponent {
  public name: string;
}