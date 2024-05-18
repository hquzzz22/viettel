let click = document.querySelector(".action");

const myFunction = () => {
  alert("Tinh nang chua hoan thien");

  for (let i = 1; i <= 100; i++) {
    console.log(i + ". Bạn Em Ngủ Thật Ngon Nhé <3");
  }
};

let viettel_ca = document.querySelector("#viettel-ca");

let signature = document.querySelector(".signature");
function handleClick() {
  signature.classList.toggle("hiden");
}
console.log(viettel_ca);
