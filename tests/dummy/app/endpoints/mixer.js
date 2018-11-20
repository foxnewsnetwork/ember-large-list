const URI = "https://mixer.com/api/v1/types?limit=100&page=0&order=viewersCurrent:desc&noCount=1&query="

export async function getGames() {
  const response = await window.fetch(URI);
  return response.json();
}

// Example response
// {
//  "id": 38499,
//  "name": "Black Desert Online",
//  "parent": "Games",
//  "description": "Black Desert is a large scale of sandbox oriented MMORPG that provides you a variety of unique experiences with spectacular action and battle, strategy-oriented castle siege, sophisticated simulation contents such as trade, NPC-hiring and real-estate management.",
//  "source": "player:30992",
//  "viewersCurrent": 10,
//  "coverUrl": "https://uploads.mixer.com/cover/6139bc4ad2f9de0cd4eb.jpg?rev=3",
//  "backgroundUrl": "https://uploads.mixer.com/cover/d2560f7fac4790307685.jpg?rev=3",
//  "online": 4,
//  "availableAt": null
// }
