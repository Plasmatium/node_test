function* quips(name) {
  yield "hello " + name + "!";
  yield "i hope you are enjoying the blog posts";
  if (name.toLowerCase().startsWith("x")) {
    yield "hey, it's cool how your name starts with an X, " + name;
  }
  yield "see you later!";
}
var meow_iter = quips("Test");
