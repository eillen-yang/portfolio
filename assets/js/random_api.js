const designer = function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    data: {
      gender: "",
      results: 4,
    },
    dataType: "json",

    success: function (data) {
      let output = "";

      for (let i = 0; i < 4; i++) {
        const user = data.results[i];

        output += "<li>";
        output += '<div class="item">';
        output += '	<div class="item-thumb">';
        output += '		<img src="' + user.picture.large + '" alt="user images">';
        output += "	</div>";
        output += " ";
        output += '	<div class="item-data">';
        output += '		<div class="name">' + user.name.first + "</div>";
        output += ' 	<div class="gender"> ' + user.gender + " </div>";
        output += ' 	<div class="item-icon">';
        output +=
          '			<div class="email"><a href="mailto:' +
          user.email +
          '"><i class="far fa-envelope"></i></a></div>';
        output +=
          '			<div class="tel"><a href="tel:' +
          user.phone +
          '"><i class="fas fa-phone"></i></a></div>';
        output +=
          '			<div class="city"><a href="javascript:void(0)"><i class="fas fa-map-marker-alt"></i></a></div>';
        output += "		</div>";
        output += "	</div>";
        output += "</div>";
        output += "</li>";

        $(".tab01 .list-items").html(output); //랜덤으로 바뀌기
      }
    },
    error: (error) => {
      console.log(JSON.stringify(error.statusText));
    },
  });
};
designer();

const backend = function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    data: {
      gender: "male",
      results: 2,
    },
    dataType: "json",

    success: function (data) {
      let output = "";

      for (let i = 0; i < 2; i++) {
        const user = data.results[i];

        output += "<li>";
        output += '<div class="item">';
        output += '	<div class="item-thumb">';
        output += '		<img src="' + user.picture.large + '" alt="user images">';
        output += "	</div>";
        output += " ";
        output += '	<div class="item-data">';
        output += '		<div class="name">' + user.name.first + "</div>";
        output += ' 	<div class="gender"> ' + user.gender + " </div>";
        output += ' 	<div class="item-icon">';
        output +=
          '			<div class="email"><a href="mailto:' +
          user.email +
          '"><i class="far fa-envelope"></i></a></div>';
        output +=
          '			<div class="tel"><a href="tel:' +
          user.phone +
          '"><i class="fas fa-phone"></i></a></div>';
        output +=
          '			<div class="city"><a href="city: ' +
          user.city +
          '"><i class="fas fa-map-marker-alt"></i></a></div>';
        output += "		</div>";
        output += "	</div>";
        output += "</div>";
        output += "</li>";

        // console.log(user);

        $(".tab02 .list-items").html(output); //랜덤으로 바뀌기
      }
    },
  });
};
backend();

const frontend = function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    data: {
      gender: "female",
      results: 3,
    },
    dataType: "json",

    success: function (data) {
      let output = "";

      for (let i = 0; i < 3; i++) {
        const user = data.results[i];

        output += "<li>";
        output += '<div class="item">';
        output += '	<div class="item-thumb">';
        output += '		<img src="' + user.picture.large + '" alt="user images">';
        output += "	</div>";
        output += " ";
        output += '	<div class="item-data">';
        output += '		<div class="name">' + user.name.first + "</div>";
        output += ' 	<div class="gender"> ' + user.gender + " </div>";
        output += ' 	<div class="item-icon">';
        output +=
          '			<div class="email"><a href="mailto:' +
          user.email +
          '"><i class="far fa-envelope"></i></a></div>';
        output +=
          '			<div class="tel"><a href="tel:' +
          user.phone +
          '"><i class="fas fa-phone"></i></a></div>';
        output +=
          '			<div class="city"><a href="city: ' +
          user.city +
          '"><i class="fas fa-map-marker-alt"></i></a></div>';
        output += "		</div>";
        output += "	</div>";
        output += "</div>";
        output += "</li>";

        // console.log(user);

        $(".tab03 .list-items").html(output); //랜덤으로 바뀌기
      }
    },
  });
};
frontend();
