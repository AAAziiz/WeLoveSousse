import { Component } from '@angular/core';
import { Question } from '../question';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  question: string;
  
  constructor(private _service:RegistrationServiceService, private _router :Router) {
    this.question = '';
  }

  submitQuestion(questionData:Question) {
    const newQuestion = new Question();
    newQuestion.question = questionData.question;
    this._service.Publishquestion(newQuestion).subscribe((response) => {
        console.log(response); // handle the response from the server
    });
}

}
