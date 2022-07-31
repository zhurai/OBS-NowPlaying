function pullData(user,apikey)
{
    const website="https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+user+"&api_key="+apikey+"&format=json&limit=1"
    fetch(website)
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
    document.getElementById("art").setAttribute("src",json.recenttracks.track[0].image[0]['#text']);
    document.getElementById("song").innerHTML = json.recenttracks.track[0].name;
    document.getElementById("by").innerHTML = "by";
    document.getElementById("artist").innerHTML = json.recenttracks.track[0].artist['#text'];
    document.getElementById("from").innerHTML = "from";
    document.getElementById("album").innerHTML = json.recenttracks.track[0].album['#text'];
}
$(document).ready(function()
{
    setInterval(function() {
        pullData(config.LastfmUsername,config.LastfmApiKey)
    }, config.Interval);
});
