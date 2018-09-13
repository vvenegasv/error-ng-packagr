import { Component, OnInit, Input } from '@angular/core';
import { MultiStep } from '../models/multi-step';
import { ObjectHelper } from '@ercl/helpers';

@Component({
  selector: 'common-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.css']
})
export class MultiStepComponent implements OnInit {

  @Input() public steps: MultiStep[] = [];
  public stepsWithStates: MultiStepWithState[] = null;
  public currentIndex: number = 0;
  public with: string;
  

  constructor() { }

  ngOnInit() {
    this.steps = this.steps.sort((n1, n2) => n1.order - n2.order);
    this.stepsWithStates = this.steps.map(MultiStepMapper.toStepWithState);
    this.with = (100 / this.steps.length).toString() + '%';
    this.refreshClasses();
  }

  public onStepClick(stepOrder: number): void {
    let clickedStep = this.stepsWithStates.filter(x => x.order === stepOrder)[0];
    if (clickedStep.className === 'completed') {
      if (!ObjectHelper.isNullOrUndefined(clickedStep.callback)) {
        clickedStep.callback();
      }
    }
  }

  public refreshClasses() {
    var currentStep = this.stepsWithStates[this.currentIndex];
    this.stepsWithStates.forEach(step => {
      if (step.order < currentStep.order)
        step.className = 'completed';
      if (step.order > currentStep.order)
        step.className = 'pending';
      if (step.order === currentStep.order)
        step.className = 'active';
    });
  }

  public next() {
    this.currentIndex = this.currentIndex + 1;
    this.refreshClasses();
  }

  public previous() {
    this.currentIndex = this.currentIndex - 1;
    this.refreshClasses();
  }

}

class MultiStepWithState extends MultiStep {
  public className: string;
}

abstract class MultiStepMapper {
  public static toStepWithState(step: MultiStep): MultiStepWithState {
    return {
      order: step.order,
      name: step.name,
      callback: step.callback,
      className: 'pending'
    }
  }
}
