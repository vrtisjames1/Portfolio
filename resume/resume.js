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
})
