const btnLike1 = document.getElementById("btnLike1");
const count1 = document.getElementById("count1");

function countLike1() {
  let likeCount = parseInt(count1.value) + 1;
  count1.textContent = likeCount.toString();
}

btnLike1.addEventListener("click", countLike1);

