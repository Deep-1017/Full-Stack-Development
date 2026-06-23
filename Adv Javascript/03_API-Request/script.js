const xhr = new XMLHttpRequest();
const url = "https://randomuser.me/api/";

xhr.open("GET", url);

xhr.onreadystatechange = () => {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    console.log(data.results[0].name);
  }
};

xhr.send();
