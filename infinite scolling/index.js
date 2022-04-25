var limit = 25;
var page = 1;

const getData = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  ).then((res) => res.json());

  response.map((e) => {
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1 = "Masai Student " + e.id;
    div.append(h1);
    document.getElementById("container").append(div);
  });
};
getData();

const showMoreData = () => {
  page++;
  getData();
};

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showMoreData();
  }
});
