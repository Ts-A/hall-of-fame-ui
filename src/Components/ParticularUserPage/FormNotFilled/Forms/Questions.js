import React, {useState, useEffect, useRef} from 'react';
import "./module.css";
import {tempQuestions} from './tempQuestions';

export default function Questions(props) {




  return (
    <div class="login-dark">
    <form method="post" class="overflow-hidden">
        
        <div class="illustration mb-5 mt-2"><h1 class="text-6xl">Hall of Fame</h1>
        </div>
        {tempQuestions.map((question, index) => (
                <div class="form-group">
                    <label class="form-label neonText">{question.q}</label>
                    <input class="form-control" type="text" name={index} placeholder={question.example}></input>
                </div>

            ))}
        <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Submit</button></div><a href="#" class="forgot">Return to Home Page</a></form>
</div>
  );
}