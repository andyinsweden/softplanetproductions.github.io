(() => {
  const content = document.getElementById("sibelius-troubleshooting-results");
  const controls = content?.querySelector("[data-sibelius-search]");

  if (!content || !controls) {
    console.error("Sibelius troubleshooting search controls or content were not found.");
    return;
  }

  const search = controls.querySelector("#sibelius-search-query");
  const categoryFilter = controls.querySelector("#sibelius-search-category");
  const status = controls.querySelector(".sibelius-search__status");
  const categoryIds = new Set(
    [...categoryFilter.options]
      .map((option) => option.value)
      .filter(Boolean)
  );
  const categoryHeadings = new Map(
    [...content.querySelectorAll("h2[id]")]
      .filter((heading) => categoryIds.has(heading.id))
      .map((heading) => [heading.id, heading])
  );
  const questions = [];
  let currentCategory = "";

  for (const element of [...content.children]) {
    if (element.matches("h2") && categoryIds.has(element.id)) {
      currentCategory = element.id;
    }

    if (element.tagName !== "H3" || !/^\d+\./.test(element.textContent.trim())) {
      continue;
    }

    if (!currentCategory) {
      console.error("A numbered Sibelius question has no category heading.");
      return;
    }

    const question = document.createElement("section");
    question.className = "sibelius-question";
    question.dataset.category = currentCategory;
    content.insertBefore(question, element);

    let sibling = element.nextElementSibling;
    question.append(element);
    while (sibling && !sibling.matches("h2, h3")) {
      const next = sibling.nextElementSibling;
      question.append(sibling);
      sibling = next;
    }

    questions.push(question);
  }

  if (questions.length === 0 || categoryHeadings.size !== categoryIds.size) {
    console.error("Sibelius troubleshooting questions or category headings are incomplete.");
    return;
  }

  const categoryNames = new Map(
    [...categoryFilter.options]
      .filter((option) => option.value)
      .map((option) => [option.value, option.textContent])
  );

  function updateResults() {
    const terms = search.value
      .trim()
      .toLocaleLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const selectedCategory = categoryFilter.value;
    const visibleByCategory = new Map(
      [...categoryIds].map((categoryId) => [categoryId, 0])
    );
    let visibleCount = 0;

    for (const question of questions) {
      const matchesCategory =
        !selectedCategory || question.dataset.category === selectedCategory;
      const searchableText = question.textContent.toLocaleLowerCase();
      const matchesSearch = terms.every((term) => searchableText.includes(term));
      question.hidden = !(matchesCategory && matchesSearch);

      if (!question.hidden) {
        visibleCount += 1;
        visibleByCategory.set(
          question.dataset.category,
          visibleByCategory.get(question.dataset.category) + 1
        );
      }
    }

    for (const [categoryId, heading] of categoryHeadings) {
      heading.hidden = visibleByCategory.get(categoryId) === 0;
    }

    if (visibleCount === 0) {
      status.textContent = "No questions match your filters.";
      return;
    }

    const categoryText = selectedCategory
      ? ` in ${categoryNames.get(selectedCategory)}`
      : "";
    status.textContent = `Showing ${visibleCount} of ${questions.length} questions${categoryText}.`;
  }

  search.addEventListener("input", updateResults);
  categoryFilter.addEventListener("change", updateResults);

  for (const link of content.querySelectorAll('a[href^="#"]')) {
    const categoryId = decodeURIComponent(link.hash.slice(1));
    if (!categoryIds.has(categoryId)) {
      continue;
    }

    link.addEventListener("click", () => {
      search.value = "";
      categoryFilter.value = categoryId;
      updateResults();
    });
  }

  controls.hidden = false;
  updateResults();
})();
