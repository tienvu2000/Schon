const _$$ = document.querySelectorAll.bind(document);
const _$ = document.querySelector.bind(document);
const searchForm = _$("#search__form");
const searchFormInput = _$(".search__form-input");
// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
//   recognition.lang = "en";

  const micBtn = _$(".search__blog-micro-btn");
  const micIcon = _$('.micro');

  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }
  
  micBtn.addEventListener("click", micBtnClick);

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-assistive-listening-systems");
    searchFormInput.focus();
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-assistive-listening-systems");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    if(transcript.toLowerCase().trim()==="stop recording") {
      recognition.stop();
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      if(transcript.toLowerCase().trim()==="go") {
        searchForm.submit();
      }
      else if(transcript.toLowerCase().trim()==="reset input") {
        searchFormInput.value = "";
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    searchFormInput.value = transcript;
    searchFormInput.focus();
    setTimeout(() => {
      searchForm.submit();
    }, 500);
  }
  
  
}
