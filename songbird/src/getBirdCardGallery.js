
function getBirdCardGallery(block, dataSource){
   
    const imgBird = block.querySelector('.img-bird');
    const birdName = block.querySelector('.bird-name');
    const latinName = block.querySelector('.species');
    const birdDescription = block.querySelector('.bird-description');
    
    imgBird.src = dataSource.image;
    birdName.textContent = dataSource.name;
    latinName.textContent = dataSource.species;
    birdDescription.textContent = dataSource.description;
  
}

export default getBirdCardGallery;
