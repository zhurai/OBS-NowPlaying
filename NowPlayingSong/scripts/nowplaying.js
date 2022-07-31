function pullData(filename){
    fetch(filename)
    .then((response) => {
        if (!response.ok){
            throw new Error("Unable to Find Tracks")
        }
            return response.json();
        })
    .then((json) => showSong(json));
}

function showSong(json)
{
    //document.getElementById("art").setAttribute("src",json.recenttracks.track[0].image[0]['#text']);
    document.getElementById("song").innerHTML = json.title;
    document.getElementById("by").innerHTML = "by";
    document.getElementById("artist").innerHTML = json.artist;
    document.getElementById("from").innerHTML = "from";
    document.getElementById("album").innerHTML = json.album;
}
$(document).ready(function()
{
    setInterval(function() {
        pullData("./np/Tags.json")
    }, config.Interval);
});
