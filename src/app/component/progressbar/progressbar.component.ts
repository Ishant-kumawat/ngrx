import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @ViewChildren('steps') stepElements!: QueryList<ElementRef>;

  inputValue: number | undefined;    //(this.tabs.length) value alocation for dynamic creating on harvey balls. assump tabs [] created
  inputValues: number | undefined;
  showProgressBar: boolean = true;

  isFirstStepTransparent: boolean = true;
  isSecondStepGreen: boolean = false;
  isThirdStepRed: boolean = false;
  isCheckMarkVisible: boolean = false;
  stepIds: string[] = [];

  ngOnInit(): void {
    this.updateSteps();
  }

  handleInput(): void {
    this.updateSteps();
    this.applyStyles();
  }

  updateSteps(): void {
    this.stepIds = [];
    if (this.inputValue !== undefined && this.inputValue >= 0) {
      for (let i = 0; i < this.inputValue; i++) {
        this.stepIds.push('step' + i);
      }
    }
    this.showProgressBar = this.stepIds.length > 1;
  }

  applyStyles(): void {
    switch (this.inputValues) {
      case 0:
        this.isFirstStepTransparent = false;
        this.isSecondStepGreen = false;
        this.isThirdStepRed = false;
        this.isCheckMarkVisible = true;
        break;
      case 1:
        this.applyStepStyles(0, true, false, false);
        break;
      case 2:
        this.applyStepStyles(1, false, true, false);
        break;
      case 3:
        this.applyStepStyles(2, false, false, true);
        break;
      default:
        this.resetStepStyles();
        break;
    }
  }

  applyStepStyles(index: number, transparent: boolean, green: boolean, red: boolean): void {
    const stepId = this.stepIds[index];
    const stepElement = document.getElementById(stepId);
    if (stepElement) {
      stepElement.classList.remove('transparent', 'green', 'red');
      if (transparent) {
        stepElement.classList.add('transparent');
      }
      if (green) {
        stepElement.classList.add('green');
      }
      if (red) {
        stepElement.classList.add('red');
      }
    }
  }


  resetStepStyles(): void {
    this.isCheckMarkVisible = false;
    const stepElements = document.querySelectorAll('.step');
    stepElements.forEach((element: Element) => {
    element.classList.remove('transparent', 'green', 'red');
    element.classList.add('transparent');
    });
  }
}
