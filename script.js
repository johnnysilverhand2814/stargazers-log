 fetch("events.json")
-  .then((response) => response.json())
+  .then((response) => {
+    if (!response.ok) {
+      throw new Error(`Unable to load starred repositories: ${response.status}`);
+    }
+    return response.json();
+  })
   .then((events) => {
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  });
