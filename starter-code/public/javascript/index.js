const charactersAPI = new APIHandler('http://localhost:3018');

function showData(list) {
  const parent = document.querySelector('.characters-container');
  console.log(parent.firstChild);
  parent.removeChild(document.querySelector('.character-info'));
  list.forEach(e =>
    parent.insertAdjacentHTML(
      'afterbegin',
      `<div class="character-info">
<div class="name">${e.name}</div>
  <div class="occupation">${e.occupation}</div>
  <div class="cartoon">${e.cartoon}</div>
  <div class="weapon">${e.weapon}</div>
</div>`
    )
  );
}

function setupEvents(e) {
  e.preventDefault();
  //console.log(this);
}
document.querySelectorAll('.operation').forEach(e => {
  e.onclick = setupEvents;
});

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = () => {
    event.preventDefault();
    charactersAPI.getFullList();
  };

  document.getElementById('fetch-one').onclick = function() {
    const theId = document.getElementById('inputId').value;
    event.preventDefault();
    charactersAPI.getOneRegister(theId);
  };

  document.getElementById('delete-one').onclick = function() {
    event.preventDefault();
    const id = document.getElementById('delete-id').value;
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById('edit-character-form').onsubmit = function() {
    const updateId = document.getElementById('updateId').value;
    const updateName = document.getElementById('updateName').value;
    const updateOccupation = document.getElementById('updateOccupation').value;
    const updateWeapon = document.getElementById('updateWeapon').value;
    const isCartoon = document.getElementById('update-is-cartoon').value;
    charactersAPI.updateOneRegister(
      updateId,
      updateName,
      updateOccupation,
      updateWeapon,
      isCartoon
    );
  };

  document.getElementById('new-character-form').onsubmit = function() {
    const newName = document.getElementById('new-char-input-name').value;
    const newOccupation = document.getElementById('new-char-input-occupation')
      .value;
    const newWeapon = document.getElementById('new-char-input-weapon').value;
    const isCartoon = document.getElementById('new-char-is-cartoon').value;
    console.log(isCartoon);
    charactersAPI.createOneRegister(
      newName,
      newOccupation,
      newWeapon,
      isCartoon
    );
  };
});
