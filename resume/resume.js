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

//copy existing text value//
let $empTextValue = $(`#empText`).text();
let $eduTextValue = $(`#eduText`).text();
let $comTextValue = $(`#comText`).text();
//create textarea box//
const $empEditableTextArea = $(`<textarea>`).attr(`id`,`empText`).text($empTextValue).css(`padding`,`0`);
const $eduEditableTextArea = $(`<textarea>`).attr(`id`,`empText`).text($eduTextValue).css(`padding`,`0`);
const $comEditableTextArea = $(`<textarea>`).attr(`id`,`empText`).text($comTextValue).css(`padding`,`0`);

  //employment text box creation
  const $editEmpText = () => {

    //replace text with edit box
    $(`#empText`).replaceWith($empEditableTextArea).text($empTextValue);
  }

  //submit text box creation
  const $submitEmpText = () => {
    //copy existing text value//
    let $empTextValue = $($empEditableTextArea).val();

    console.log($empTextValue);
    //create textarea box//
    const $submitTextArea = $(`<p>`).attr(`id`,`empText`).text($empTextValue).css(`padding`,`1em`).css(`white-space`, `pre-wrap`);
    //replace text with edit box
    $($empEditableTextArea).replaceWith($submitTextArea).text($empTextValue);
  }

  //education text box creation
  const $editEduText = () => {

    //replace text with edit box
    $(`#eduText`).replaceWith($eduEditableTextArea).text($eduTextValue);
  }

  //submit text box creation
  const $submitEduText = () => {
    //copy existing text value//
    let $eduTextValue = $($eduEditableTextArea).val();

    console.log($eduTextValue);
    //create textarea box//
    const $submitTextArea = $(`<p>`).attr(`id`,`eduText`).text($eduTextValue).css(`padding`,`1em`).css(`white-space`, `pre-wrap`);
    //replace text with edit box
    $($eduEditableTextArea).replaceWith($submitTextArea).text($eduTextValue);
  }

  //community text box creation
  const $editComText = () => {

    //replace text with edit box
    $(`#comText`).replaceWith($comEditableTextArea).text($comTextValue);
  }

  //submit text box creation
  const $submitComText = () => {
    //copy existing text value//
    let $comTextValue = $($comEditableTextArea).val();

    console.log($comTextValue);
    //create textarea box//
    const $submitTextArea = $(`<p>`).attr(`id`,`comText`).text($comTextValue).css(`padding`,`1em`).css(`white-space`, `pre-wrap`);
    //replace text with edit box
    $($comEditableTextArea).replaceWith($submitTextArea).text($comTextValue);
  }

$(`#edit`).on(`click`, $editEmpText);
$(`#submit`).on(`click`, $submitEmpText);
$(`#edit`).on(`click`, $editEduText);
$(`#submit`).on(`click`, $submitEduText);
$(`#edit`).on(`click`, $editComText);
$(`#submit`).on(`click`, $submitComText);
})
