
export interface PageSeoOptions {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = "Engineering College";
const DEFAULT_DESCRIPTION =
  "Discover academic programs, admissions, research, campus facilities, and student opportunities at our engineering college.";

function getOrCreateMeta(
  selector: string,
  attribute: "name" | "property",
  key: string
): HTMLMetaElement {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  return element;
}

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  const selector = `meta[${attribute}="${key}"]`;
  const element = getOrCreateMeta(selector, attribute, key);
  element.content = content;
}

export function setPageSeo({
  title,
  description,
  canonicalUrl,
  imageUrl,
  noIndex = false,
}: PageSeoOptions): void {
  if (typeof document === "undefined") return;

  const fullTitle = title
    ? `${title} | ${DEFAULT_TITLE}`
    : DEFAULT_TITLE;

  document.title = fullTitle;

  setMeta("name", "description", description || DEFAULT_DESCRIPTION);
  setMeta(
    "name",
    "robots",
    noIndex ? "noindex, nofollow" : "index, follow"
  );

  setMeta("property", "og:type", "website");
  setMeta("property", "og:title", fullTitle);
  setMeta(
    "property",
    "og:description",
    description || DEFAULT_DESCRIPTION
  );

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", fullTitle);
  setMeta(
    "name",
    "twitter:description",
    description || DEFAULT_DESCRIPTION
  );

  if (imageUrl) {
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:image", imageUrl);
  }

  if (canonicalUrl) {
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }
}