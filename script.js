function audioPlayer() {
    "use strict";
    const audioPlace = document.getElementsByTagName('audio');
    console.log(audioPlace[0]);

    async function dataFromServer() {
        const response = await fetch('https://audio-api-4c3da.firebaseio.com/audios.json');
        const tracksData = await response.json();
        console.log(tracksData)
        const track = tracksData[0];
        console.log(track);
        const trackName = document.createElement('div');
        trackName.setAttribute('id', 'playerContainer');
        /*trackName.innerHTML = track['title'];*/
        /*audioPlace.insertAdjacentHTML('beforeBegin',trackName);*/
        trackName.innerHTML = `<div>
                                    <div> Title : ${track['title']} </div>
                                    <div> Artist: ${track['artist']} </div>
                                    <div> Size :${track['size']} </div>
                                    <div> Type :${track['type']} </div>
                                    <audio id="pluginPlayer" src="${track['track']}" loop autoplay="false"></audio>
                                    <button id="play">Play </button>
                                    <button id="pause">Pause</button>
                                    <button id="Stop">Stop</button>
                                    <button id="Forward">Forw</button>
                                    <button id="Backward">Backw</button>
                               </div>
                            <!--<div> 
                              <button onclick="document.getElementById('pluginPlayer').play()">Play</button> 
                              <button onclick="document.getElementById('pluginPlayer').pause()">Pause</button> 
                              <button onclick="document.getElementById('pluginPlayer').volume += 0.1">Vol+ </button> 
                              <button onclick="document.getElementById('pluginPlayer').volume -= 0.1">Vol- </button> 
                            </div>-->`;
        audioPlace[0].replaceWith(trackName);

        //document.body.append(trackName);



    }
    dataFromServer()
}
audioPlayer();
