window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tablist = document.querySelector('[role="tablist"]');
  //   tabs.forEach((tab) => {
  //     tab.addEventListener("click", changeTabs);
  //   });
  tablist.addEventListener("click", changeTabs);
  let tabFocus = 0;
  tablist.addEventListener("keydown", (e) => {
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", false);
      if (e.keyCode === 39) {
        tabFocus++;
        if (tabFocus > tabs.length) {
          tabFocus = 0;
        }
      } else {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus.tabs.length - 1;
        }
      }
      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});
function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;
  //   console.log("parent:%s, grandparent:%s", parent, grandparent);
  // target: button
  // parent: role='tablist' grandparent: class="tabs"
  if (target.nodeName !== "BUTTON") return;
  parent
    .querySelectorAll('[aira-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));
  target.setAttribute("aria-selected", true);
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
