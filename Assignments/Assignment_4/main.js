

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    itemX = randomValueFromArray(insertX);
    itemY = randomValueFromArray(insertY);
    itemZ = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertX", itemX);
    newStory = newStory.replace(":insertY:", itemY);
    newStory = newStory.replace(":insertZ:", itemZ);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round.concat(300 / 14, " Stone");
    newStory = newStory.replace("300 pounds", weight);
    const temperature =  Math.round.concat((((94 - 32)* 5) / 9), " Centigrade");
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}