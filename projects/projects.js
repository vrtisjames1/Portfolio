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
    $projectDes.text(`GOTTA CATCH EM ALL!... I developed this project with a group. This game was originally a terminal prompt game, and developed into an interactive DOM Data browser game. The player will fight multiple enemies until all of them are destroyed are until the user decides to flee!`);
  } else if ($carouselImages.children().eq(0).hasClass(`dbscan`)) {
    $projectDes.text(`DBSCAN... False data injection... This is an unsupervised data group graduate project developed with programming languages R and Python. The voltage data from a power line was analyzed to see how well three unsupervised methods could detect erroneous errors.  `);
  } else if ($carouselImages.children().eq(0).hasClass(`prompt`)) {
    $projectDes.text(`Prompt Game...General Assembly Landscaper Classic!... This is a General Assembly classic game that was integrated with a partner through an interactive prompt terminal experience. The player character is a landscaper who needs to make choices and save enough money to win the game.`);
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
