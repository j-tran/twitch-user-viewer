var streamerList = [
	"handmade_hero",
	"freecodecamp",
	"esl_csgo",
	"Food",
	"pajlada",
	"pashabiceps",
	"lethalfrag",
	"paradoxinteractive",
];

$(document).ready(function() {
	//Gets every stream element, and then attaches them to the HTML
	for (var i = 0; i < streamerList.length; i++) {
		getStreamElements(streamerList[i]);
	}
});

//Gets all the relevant data about the streamers
function getStreamElements(user) {
	var jsonLink = "https://api.twitch.tv/kraken/streams/" + user + "?client_id=aelz20d5k6fqc1fyde6oqviretnhmy1";
	$.getJSON(jsonLink, function(json) {
		var hyperlink = "https://www.twitch.tv/" + user;
		if (json.stream === null) {
			var status = "offline";
			var logo = "http://res.cloudinary.com/jtran/image/upload/v1460353983/twitch/kappa.jpg";
			var game = "Offline";
		}
		else {
			var status = "online";
			var logo = json.stream.channel.logo;
			var game = json.stream.game;
		}

		html = "";
		html += "<a href=\"" + hyperlink + "\" target=\"_blank\" class=\"list-group-item " + status + "\">";
		html += "<div class=\"container-fluid\">";
		html += "<div class=\"row\">";
		html += "<div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\">";
		html += "<img src=\"" + logo + "\"class=\"listLogo img-circle\">";
		html += "</div>";
		html += "<div class=\"col-xs-offset-1 col-sm-offset-1  col-md-5 col-lg-5 text-center\">";
		html += "<span class=\"information\">" + user + "</span>";
		html += "</div>";
		html += "<div class=\"col-md-5 col-lg-5 text-center\">";
		html += "<span class=\"information\">" + game + "</span>";
		html += "</div></div></div></a>";

		if (status === "online") {
			$("#all-list-group").prepend(html);
			$("#online-list-group").prepend(html);
		}
		else {
			$("#all-list-group").append(html);
			$("#offline-list-group").append(html);
		}
	});
}
