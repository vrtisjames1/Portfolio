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

const submit = () => {
  const $submitBtn = $(`<button>`).text(`Submit`).attr(`id`,`submit`).appendTo(`#button`);
}
edit();
submit();

  const $editEmpText = () => {

    //copy existing text value//
    let $empTextValue = $(`#empText`).text();

    //create textarea box//
    const $editableTextArea = $(`<textarea>`).attr(`id`,`empText`).text($empTextValue).css(`padding`,`0`).css(`margin`, `0`);

    //replace text with edit box
    $(`#empText`).replaceWith($editableTextArea).text($empTextValue);

  }

$(`#edit`).on(`click`, $editEmpText);

})
