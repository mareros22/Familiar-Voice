navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {handlerFunction(stream)})

var rec;

function handlerFunction(stream) {
  rec = new MediaRecorder(stream);
  console.log("rec has been defined");
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if(rec.state == "inactive") {
      let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
      recordedAudio.src = URL.createObjectURL(blob);
      recordedAudio.controls=true;
      sendData(blob)
    }
  }
}

function sendData(data){} //upload to the database

record.onclick = e => {
  console.log('I was clicked')
  record.disabled = true;
  record.style.backgroundColor = "blue"
  stopRecord.disabled = false;
  audioChunks = [];
  console.log(typeof rec);
  rec.start();
}
stopRecord.onclick = e => {
  console.log("I was clicked")
  record.disabled = false;
  stop.disabled = true;
  record.style.backgroundColor = "red"
  rec.stop();
}
audio1.onclick = e => {
 console.log("I was clicked")
  recordedAudio.src = //here we link to the database
  recordedAudio.controls=true;
  recordedAudio.autoplay=false;
  
  
}

      /*  record.onclick = e => {
          console.log('I was clicked')
          record.disabled = true;
          record.style.backgroundColor = "blue"
          stopRecord.disabled=false;
          audioChunks = [];
          rec.start();
        }
        stopRecord.onclick = e => {
          console.log("I was clicked")
          record.disabled = false;
          stop.disabled=true;
          record.style.backgroundColor = "red"
          rec.stop();
        }

        navigator.mediaDevices.getUserMedia({audio:true})
      .then(stream => {handlerFunction(stream)})

      function handlerFunction(stream) {
            rec = new MediaRecorder(stream);
            rec.ondataavailable = e => {
              audioChunks.push(e.data);
              if (rec.state == "inactive"){
                let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
                recordedAudio.src = URL.createObjectURL(blob);
                recordedAudio.controls=true;
                recordedAudio.autoplay=true;
                sendData(blob)
              }
            }
          }
                function sendData(data) {}

*/
