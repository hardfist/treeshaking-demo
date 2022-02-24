(() => {
  // src/reexport.js
  console.log("internal");
  var internal = 100;

  // src/lib.js
  console.log("lib");

  // src/index.js
  console.log("outer", internal);
})();
