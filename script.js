async function loadSection(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}

loadSection("about", "about.html");
loadSection("projects", "projects.html");
loadSection("contact", "contact.html");
