$(() => {

let timesClicked = 0;
  const $openNav = () => {
    timesClicked++;
    if (timesClicked % 2 == 0){
          $(`#navigation`).css(`height`,`30px`)
          $(`.navButton`).css(`display`,`none`)
    } else {
      $(`#navigation`).css(`height`,`180px`)
      $(`.navButton`).css(`display`,`block`)
    }

};


  // const $closeNav = () => {
  //   $(`#navigation`).css(`width`,`35px`);
  //   console.log(`hello`)
  // }

  $(`.navHomeButton`).on(`click`, $openNav);
  // $(`.navHomeButton`).on(`click`, $closeNav);


  //////////////model code
	//Grabbing Elements

	// const $modal = $('#playerModal');
	// const $closeBtn = $('#close');

    //Open Model
	const openModal = () => {
    $('#model').css('display', 'block');
      };

      //close monster list
      // const closeModal = () => {
      //   $modal.css('display', 'none');
      //   $(`#myTeam`).empty();
      // };

      //model box code
      $('.frequent').on('click', openModal);
      // $closeBtn.on('click', closeModal);

      //////////////////////
      /////////////////////



})
