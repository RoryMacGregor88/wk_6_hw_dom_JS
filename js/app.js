document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded!');

  const form = document.querySelector('#form-band-entry');

  const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const handleFormSubmit = function(evt) {
    evt.preventDefault();

    // SINGER
    const newSinger = document.createElement('h3');
    const resultNewSinger = evt.target.singer.value;
    newSinger.textContent = `You chose ${resultNewSinger} on vocals,`;

    //GUITARIST
    const newGuitarist = document.createElement('h3');
    const resultNewGuitarist = evt.target.guitarist.value;
    newGuitarist.textContent = `${resultNewGuitarist} on guitar,`;

    //BASSIST
    const newBassist = document.createElement('h3');
    const resultNewBassist = evt.target.bassist.value;
    newBassist.textContent = `${resultNewBassist} on bass,`;

    //DRUMMER
    const newDrummer = document.createElement('h3');
    const resultNewDrummer = evt.target.drummer.value;
    newDrummer.textContent = `${resultNewDrummer} on drums,`;

    //VENUE
    const newVenue = document.createElement('h2');
    const resultNewVenue = evt.target.venue.value;
    newVenue.textContent = `Playing live at ${resultNewVenue}. BITCHIN'!`;

    const newSupergroup = document.createElement('div');
    newSupergroup.appendChild(newSinger);
    newSupergroup.appendChild(newGuitarist);
    newSupergroup.appendChild(newBassist);
    newSupergroup.appendChild(newDrummer);
    newSupergroup.appendChild(newVenue);

    const list = document.querySelector('#form-result');
    list.appendChild(newSupergroup);
    form.reset();

  };

  form.addEventListener('submit', handleFormSubmit)

});

const handleDeleteAllClick = function (event) {
  const list = document.querySelector('#form-result');
  list.innerHTML = '';
}
