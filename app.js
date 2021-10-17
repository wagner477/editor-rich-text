editor.document.designMode = "On";

function transform(option, argument, id) {
  editor.document.execCommand(option, false, argument);
  console.log(editor);
  const element = document.getElementById(id);
  if (element.classList.length >= 1) {
    element.classList.remove("bg-purple");
  } else {
    element.classList.add("bg-purple");
  }
}
