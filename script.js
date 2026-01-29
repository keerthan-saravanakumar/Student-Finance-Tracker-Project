let fin  = JSON.parse(localStorage.getItem("fin")) || [];

window.addEventListener("load", function () {
  setTimeout(function () {
    showList(fin)
    updateSum()
  }, 500);
});

const  form = document.getElementById("fForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let    amt =  document.getElementById("amtIn").value
   let typ = document.getElementById("typIn").value
  let cat =document.getElementById("catIn").value.trim()
     let   dateIn = document.getElementById("dateIn").value

  if (amt === "" || typ === "" || cat === "" || dateIn === "") {
    alert("Please fill all fields");
    return;
  }
  let obj ={
     id: Date.now(),
    amount: Number(amt),
     type: typ,
    category: cat,
      date: dateIn
  };

  setTimeout(function () {
      fin.push(obj);
    localStorage.setItem("fin",JSON.stringify(fin));
    showList(fin)
      updateSum()
     form.reset()
  }, 300);
});

const  list =document.getElementById("finList");
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let id =Number(e.target.dataset.id);

    fin =fin.filter(function (x) {
      return x.id !== id;
    });
     localStorage.setItem("fin", JSON.stringify(fin));
    showList(fin);
    updateSum();
  }
});

document.getElementById("allBtn").addEventListener("click", function () {
  showList(fin);
});
document.getElementById("incBtn").addEventListener("click", function () {
  let arr = fin.filter(function (x) {
    return x.type === "income"
  });
  showList(arr)
});
document.getElementById("expBtn").addEventListener("click", function () {
  let arr = fin.filter(function (x) {
    return x.type ==="expense";
  });
  showList(arr);
});



function showList(data) {
  list.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let x =data[i];
    let  li = document.createElement("li");
    li.classList.add(x.type);

    li.innerHTML = `
      <span>
        ${x.category} - ${x.amount} (${x.date})
      </span>
      <button class="delete-btn" data-id="${x.id}">X</button>
    `;
    list.appendChild(li);
  }
}

function updateSum() {
  let  inc = 0;
  let exp =0;
  for (let i = 0; i < fin.length; i++) {
    if (fin[i].type === "income") {
      inc = inc + fin[i].amount;
    } else {
       exp = exp + fin[i].amount;
    }
  }

  let bal = inc - exp;
  document.getElementById("totInc").textContent =inc;
    document.getElementById("totExp").textContent = exp;
    document.getElementById("bal").textContent= bal;
}
