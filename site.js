/* ============================================================
   PROPERTY CONFIG — THE RENAME SEAM.
   Every brand string on this property renders from this one
   block (elements carry data-brand attributes with the same
   text as a no-JS fallback). To rename the property:
   1. Edit the four values below.
   2. Swap the matching fallback text in index.html + trust.html
      (titles, meta, and the data-brand elements) — a find/replace
      on the old brand string.
   3. Repoint DNS (see README.md). No other file changes.
   ============================================================ */
var PROPERTY = {
  brand: "APEXAIRSOLUTIONS.SHOP",
  domain: "apexairsolutions.shop",
  url: "https://apexairsolutions.shop/",
  owner: "Apex Air Solutions"
};
(function () {
  var map = {
    brand: PROPERTY.brand,
    domain: PROPERTY.domain,
    url: PROPERTY.url,
    owner: PROPERTY.owner
  };
  var nodes = document.querySelectorAll("[data-brand]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-brand");
    if (map[key]) nodes[i].textContent = map[key];
  }
})();
