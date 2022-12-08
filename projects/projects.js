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
    $projectDes.text(`[DOM, Pokemon Game] GOTTA CATCH EM ALL!... This game was developed with a partner. The game originally was created as a terminal prompt game, but transformed into an interactive DOM browser game. The character player will fight multiple enemies until all of them are destroyed, or until the player decides to flee!`);
  } else if ($carouselImages.children().eq(0).hasClass(`dbscan`)) {
    $projectDes.text(`[DBSCAN, False Data Injection] This is a datascience group graduate project developed with programming languages R and Python. The premise of the project analyzed voltage data from a power line and compared the performance of three unsupervised data analysis methods to detect erroneous errors.`);
  } else if ($carouselImages.children().eq(0).hasClass(`prompt`)) {
    $projectDes.text(`[Prompt Game, General Assembly Landscaper Classic] This is a General Assembly game that was developed and personalized with a partner into an interactive prompt terminal experience. The player character is a landscaper who needs to make choices and save enough money and gather enough tools to win the game.`);
  }  else if ($carouselImages.children().eq(0).hasClass(`marvel`)) {
    $projectDes.text(`[Express, Arrays] This is a company website created for the marvel characters. This website used express to manage a server and ejs to manage the array data.`);
  } else if ($carouselImages.children().eq(0).hasClass(`secretsanta`)) {
    $projectDes.text(`[Express, MongoDB] This is a secret santa website where groups can update their profiles which contains an image, wishlist, and partner restrictin list. The website will randomly assign partners and email the results in secret
    `);
    $('<a>( Secret Santa Website )</a>').attr("href","https://ancient-bastion-28884.herokuapp.com/").appendTo($projectDes);
    $('<a>( Secret Santa Code )</a>').attr("href","https://git.generalassemb.ly/vrtisjames/app").appendTo($projectDes);
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
