function start() {
  $("#search-button").on("click", giphySearch);
  let $deleteButton = $("#delete");
  $deleteButton.on("click", deleteGifs)
}

//search giphy api with search term provided by the user
//call new gif function
async function giphySearch(event) {
  event.preventDefault();
  let searchTerm = $("#search").val();
  let response = await axios.get(
    "http://api.giphy.com/v1/gifs/search", 
    {params: {q: searchTerm, api_key: "EPL5t5XADanPi0qAZ8b7d2DWQhbUmirF"}});
  
  let id = response.data.data[0].id;
  
  addNewGif(id);
}

//add new gif to the gallery
function addNewGif(id) {
  let $newGif = $("<img>").attr("src", "https://media.giphy.com/media/" + id + "/giphy.gif");
  $("#gif-gallery").append($newGif);
}

//delete gifs from gallery
function deleteGifs() {
  $("img").remove();

}

$(start);