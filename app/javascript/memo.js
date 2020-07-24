function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const item = XHR.response.post;
      const list = document.getElementById("list");
      // 投稿入力欄のidをformTextに代入
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      // list要素にinsertAdjacentHTMLで定数定義したHTMLを追加
      list.insertAdjacentHTML("afterend", HTML);
      // 投稿入力欄のidをformTextに代入し、そのvalue(値)を送信後にリセットする
      formText.value = "";

      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };
    XHR.onerror = function () {
      alert("Request failed");
    };
    e.preventDefault();
  })
}
window.addEventListener("load", memo);