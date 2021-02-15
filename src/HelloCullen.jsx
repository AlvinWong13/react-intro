/*
* HelloCullen is a component
*
* Components are functions
* that return JSX ("HTML-ish" code)
*
* Conventions:
* - Components are PascalCase'd
* - One component per file 
*/
function HelloCullen() {
  return (
    // JSX fragment!
    // An element with no name
    <>
    <h1>Hello Cullen!!</h1>
    <h2>How you doing?!</h2>
    </>
  );
}

// in node, we use:
// module.exports = HelloCullen;

// client side (react) we do this instead;
export default HelloCullen;