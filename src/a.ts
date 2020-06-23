const rootElement = document.getElementById("root");
export default function a() {
  if (rootElement) {
    rootElement.innerHTML = "JS is injected!!!";
  }
}
