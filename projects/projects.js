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


const $projectDes = $(`<p>`).attr('id',`projectDescription`).appendTo(`#projectHeader`);

const $projectText =() => {

  const $carouselImages=$(`#carouselImages`);

  if($carouselImages.children().eq(0).hasClass(`pokemon`)){
    $projectDes.text(`GOTTA CATCH EM ALL!... POKEMON!.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim`);
  } else if ($carouselImages.children().eq(0).hasClass(`dbscan`)) {
    $projectDes.text(`DBSCAN...False data injection... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim gfdg sfaf rgeggsdf.`);
  } else if ($carouselImages.children().eq(0).hasClass(`prompt`)) {
    $projectDes.text(`Promp Game...General Assembly Landscaper!... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim gfdg sfaf rgeggsdf.`);
  }
}

$projectText();

$('.right').on('click', $carouselRight);
$('.left').on('click', $carouselLeft);
$('.right').on('click', $projectText);
$('.left').on('click', $projectText);

///////////////////carousel
///////////////////

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
