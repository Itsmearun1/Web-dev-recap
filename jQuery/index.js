$("h1").addClass("big-title border-red");
$("button").html("<em>Bye</em>");
$("a").attr("href", "www.yahoo.com").addClass("border-red").before("<button>Before button</button>").after("<button>After button</button>");
$("input").on("keypress",function (e) {
  $("h1").text(e.key);
  console.log(e.key);
});
$("button").remove();