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
