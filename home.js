$(() => {

let timesClicked = 0;
  const $openNav = () => {
    timesClicked++;
    if (timesClicked % 2 == 0){
          $(`#navigation`).css(`height`,`30px`)
          $(`.navButton`).css(`display`,`none`)
    } else {
      $(`#navigation`).css(`height`,`160px`)
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
	const $openBtn = $('#switch');
	const $modal = $('#playerModal');
	const $closeBtn = $('#close');

    //Open Model
	const openModal = () => {
        $modal.css('display', 'block');

      };

      //close monster list
      const closeModal = () => {
        $modal.css('display', 'none');
        $(`#myTeam`).empty();

      };

      //model box code
      $openBtn.on('click', openModal);
      $closeBtn.on('click', closeModal);

      //////////////////////
      /////////////////////



})
