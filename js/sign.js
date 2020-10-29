const $toggleFunc = document.getElementsByClassName("toggleFunc");
console.log($toggleFunc.length);
for (let i = 0; i < $toggleFunc.length; i++) {
  $toggleFunc[i].addEventListener("click", (e) => {
    e.preventDefault();
    const $container = document.querySelector(".container");
    $container.classList.toggle("active");
  });
}
