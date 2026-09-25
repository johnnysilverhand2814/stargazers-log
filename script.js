 fetch("events.json")
-  .then((response) => response.json())
+  .then((response) => {
+    if (!response.ok) {
+      throw new Error(`Unable to load starred repositories: ${response.status}`);
+    }
+    return response.json();
+  })
   .then((events) => {
