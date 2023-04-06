const find_movie = function (form) {
  // console.log(form.title.value); //form 태그로 값 불러오기.
  const name = form.title.value;

  if (name == "") {
    alert("원하시는 상품을 입력해주세요!!");
    return false;
  }
  $.ajax({
    url: "./functions/naverapi.php",
    type: "POST",
    data: {
      query: name,
      display: 10, //10개의 List
    },
    dataType: "json",
    beforeSend: function () {
      alert("wow");
    },
    success: function (data) {
      const result = data.items;
      console.log(data);
      console.log(result);
      console.log(result.length);

      let output = "";

      for (var i = 0; i < result.length; i++) {
        output += '<div class="item">';
        output += '	<div class="item-thumb">';
        output += '		<img src="' + result[i].image + '" alt="사용자 이미지">';
        output += "	</div>";
        output += " ";
        output += '	<div class="item-info">';
        output += '		<div class="tit">' + result[i].title + "</div>";
        output += '		<div class="name">' + result[i].category1 + "</div>";
        output += '		<div class="pubDate">' + result[i].productId + "</div>";
        output +=
          '		<div class="link"><a href="link:' +
          result[i].link +
          '">자세히 보기</a></div>';
        output += "	</div>";
        output += "</div>";
      }

      $("#result").html(output);

      // console.log(data.items[0]);		//console의 items의 0번째 리스트들을 가지고 온다.
    },
    error: function (data) {
      console.log("Error" + data);
    },
    complete: function () {
      console.log("-END-");
    },
  });

  return false;
};
