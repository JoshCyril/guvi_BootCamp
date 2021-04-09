fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then(function (resp) {
    return resp.json();
  }) // Convert data to json
  .then(function (data) {
    mainRun(data);
  })
  .catch(function () {
    // catch any errors
    alert("pagination data not found");
  });

var state = {
  page: 1,
  rows: 5,
  window: 10,
};

function mainRun(data) {
  state.table_data = data;
  buildTable();
}

function buildTable() {
  var table_container = document.querySelector("#table_container");
  var item = pagination(state.table_data, state.page, state.rows);

  var table_data = createTable(item.table_data);

  table_container.appendChild(table_data);

  pageButtons(item.pages);
}

function pagination(table_data, page, rows) {
  var start = (page - 1) * rows;
  var end = start + rows;

  var trimData = table_data.slice(start, end);
  var pages = Math.ceil(table_data.length / rows);

  return {
    table_data: trimData,
    pages: pages,
  };
}

function createTable(arr) {
  var table = createEle(
    "table",
    "mt-3 table table-striped text-center",
    "table_content"
  );
  var thead = createEle("thead", "bg-primary");
  thead.style.color = 'white';
  thead.style.textTransform = "Uppercase";
  var tbody = document.createElement("tbody");

  var th = document.createElement("tr");
  var head = arr[0];
  for (var key in head) {
    var td = document.createElement("th");
    td.innerHTML = key;

    th.append(td);
  }
  thead.appendChild(th);
  arr.forEach((obj) => {
    var tr = document.createElement("tr");
    for (var key in obj) {
      var td = document.createElement("td");
      td.innerHTML = obj[key];
      tr.append(td);
    }
    tbody.appendChild(tr);
  });
  table.append(thead, tbody);
  return table;
}

function createEle(element, eleClass = "", eleId = " ") {
  var element = document.createElement(element);
  element.setAttribute("class", eleClass);
  element.setAttribute("id", eleId);
  return element;
}

function pageButtons(pages) {
  var pagination = document.querySelector("#pagination");
  pagination.innerHTML = "";
  pagination.className = "d-flex justify-content-center";

  var maxLeft = state.page - Math.floor(state.window / 2);
  var maxRight = state.page + Math.floor(state.window / 2);

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = state.window;
  }
  if (maxRight > pages) {
    maxLeft = pages - (state.window - 1);
    maxRight = pages;
    if (maxLeft < 1) {
      maxLeft = 1;
    }
  }
  var div = createEle("div", "list-group list-group-horizontal");

  var pag_button_first = createEle(
    "button",
    "btn btn-outline-primary list-group-item"
  );
  pag_button_first.setAttribute("onclick", `index_previ(${state.page})`);
  pag_button_first.innerHTML = "〈 Previous";
  pag_button_first.style.fontWeight = "bolder";
  var pag_button_last = createEle(
    "button",
    "btn btn-outline-primary list-group-item"
  );
  pag_button_last.setAttribute("onclick", `index_next(${state.page},${pages})`);
  pag_button_last.innerHTML = "Next 〉";
  pag_button_last.style.fontWeight = "bolder";

  for (var page = maxLeft; page <= maxRight; page++) {
    var pag_button = createEle(
      "button",
      "btn btn-sm btn-outline-secondary list-group-item"
    );
    pag_button.value = page;
    pag_button.style.fontWeight = "bolder";
    pag_button.setAttribute("onclick", "pagechange(this.value)");
    pag_button.innerHTML = page;
    div.appendChild(pag_button);
  }
  pagination.append(pag_button_first, pag_button_last, div);
}

function index_previ(n) {
  if (n > 1) {
    pagechange(n - 1);
  }
}
function index_next(n, pages) {
  if (n < pages) {
    pagechange(n + 1);
  }
}

function pagechange(val) {
  var table_container = document.querySelector("#table_container");
  table_container.innerHTML = "";
  state.page = Number(val);
  buildTable();
}
