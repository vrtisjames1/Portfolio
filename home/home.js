$(() => {

let timesClicked = 0;
  const $openNav = () => {
    timesClicked++;
    if (timesClicked % 2 == 0){
          $(`#navigation`).css(`width`,`35px`)
    } else {
      $(`#navigation`).css(`width`,`100px`)
    }

};


  // const $closeNav = () => {
  //   $(`#navigation`).css(`width`,`35px`);
  //   console.log(`hello`)
  // }

  $(`.navHomeButton`).on(`click`, $openNav);
  // $(`.navHomeButton`).on(`click`, $closeNav);
})
