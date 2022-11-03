$(() => {
/////////////////
///////Navigation menu
let timesClicked = 0;
  const $openNav = () => {
    timesClicked++;
    if (timesClicked % 2 == 0){
          $(`#navigation`).css(`height`,`35px`)
          $(`.navButton`).css(`display`,`none`)
    } else {
      $(`#navigation`).css(`height`,`180px`)
      $(`.navButton`).css(`display`,`block`)
    }
};

  $(`.navHomeButton`).on(`click`, $openNav);
/////////////////
/////////////////

//////model design
  // close model
  const $closeModal = () => {
    $(`#model`).css('display', 'none');
  }
    //Open Model
	const $openModal = () => {
    $('#model').css('display', 'block');
      };

      //model box code
      $('.frequent').on('click', $openModal);
      $('#close').on('click', $closeModal);
//////////////////////
/////////////////////

/////////////////
/////emloyment History

const edit = () => {
  const $editBtn = $(`<button>`).text(`Edit`).attr(`id`,`edit`).appendTo(`#button`);
}
edit();

const $editEmpText = () => {

  const $editableTextBox = $(`<input>`).attr(`id`,`text`).attr(`id`,`empText`)
  $(`#empText`).replaceWith($editableTextBox).css('border',`transparent`);
}

$(`#edit`).on(`click`, $editEmpText);

})
