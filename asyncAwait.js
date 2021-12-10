var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Cool I am called now after 10s")
  }, 10000);
})
async function getPromiseVal() {
  console.log("Hello", new Date())
  let result = await promise;
  console.log(result, new Date())
  console.log("Hello", new Date())

}
getPromiseVal();