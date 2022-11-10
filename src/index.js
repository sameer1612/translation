import "./styles.css";

var previousSelection = "";

document.addEventListener("selectionchange", (e) => {
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();
  if (!selectedText) return;

  previousSelection = selectedText;

  setTimeout(() => {
    if (previousSelection === selectedText) {
      console.log(selectedText, getSelectionCoords());
    }
  }, 1000);
});

function getSelectionCoords(atStart = true) {
  const sel = window.getSelection();

  if (!sel.rangeCount) return null;

  let range = sel.getRangeAt(0).cloneRange();
  if (!range.getClientRects) return null;

  range.collapse(atStart);
  let rects = range.getClientRects();
  if (rects.length <= 0) return null;

  let rect = rects[0];
  return { x: rect.x, y: rect.y };
}
