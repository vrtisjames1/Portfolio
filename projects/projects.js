$(() => {

///////////////////
///////////////////carousel
// let rightClick = 0

const $carouselRight = () => {
  const $carouselImages=$(`#carouselImages`);
  let rightClick = $carouselImages.children().length;
  $carouselImages.children().eq(0).detach().appendTo($carouselImages)
    }

    const $carouselLeft = () => {
      const $carouselImages=$(`#carouselImages`);
      let rightClick = $carouselImages.children().length;
      $carouselImages.children().eq(rightClick-1).detach().prependTo($carouselImages)
        }

const $projectText =() => {
  const $projectDes = $(`<p>`).appendTo(`#title`);
  if($carouselImages.children().eq(0).contains('.Pokemon')){
    $projectDes.text(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden`);
  }
}

$('.right').on('click', $carouselRight);
$('.left').on('click', $carouselLeft);


///////////////////carousel
///////////////////

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

  $(`.navHomeButton`).on(`click`, $openNav);


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



})
