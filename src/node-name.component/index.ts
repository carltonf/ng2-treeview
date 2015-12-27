import { Component } from 'angular2/core';
import { NgSwitch, NgSwitchDefault, NgSwitchWhen } from 'angular2/common';

@Component({
  selector: 'node-name',
  moduleId: module.id,
  templateUrl: 'tpl.html',
  styleUrls: ['style.css'],
  inputs: ['name'],
})
export class NodeNameComponent {
  public name: string;
  isDragging: boolean = false;
  isDraggingOver: boolean = false;

  ondragstart(event: DragEvent, nameBox) {
    // todo: take advantage of dataTransfer interface
    event.dataTransfer.setData('text/plain', null);

    this.isDragging = true;
  }

  ondragend() {
    this.isDragging = false;
  }

  ondragover(event) {
    // prevent default to allow drop
    event.preventDefault();
  }
  ondragenter() {
    this.isDraggingOver = true;
  }

  ondragleave() {
    this.isDraggingOver = false;
  }

  ondrop(event, box) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    this.isDraggingOver = false;
    // todo really do something
    console.log('Drop a child at ' + box);
  }
}