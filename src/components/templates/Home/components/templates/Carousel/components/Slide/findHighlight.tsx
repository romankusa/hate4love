import s from "./Slide.module.scss";

export const findHighlight = (
  fullText: string,
  highlightedText: string
) => {
  const parts = [];
  let currentIndex = 0;

  // Find all occurrences of the highlighted text in the full text
  while (true) {
    const index = fullText.indexOf(highlightedText, currentIndex);
    if (index === -1) {
      parts.push(
        <span key={parts.length}>
          {fullText.substr(currentIndex)}
        </span>
      );
      break;
    }

    // Add the text before the highlighted text
    if (index > currentIndex) {
      parts.push(
        <span key={parts.length}>
          {fullText.substring(currentIndex, index)}
        </span>
      );
    }

    // Add the highlighted text with the "highlight" class
    parts.push(
      <span key={parts.length} className={s.highlight}>
        {highlightedText}
      </span>
    );

    // Update current index to continue searching
    currentIndex = index + highlightedText.length;
  }

  return parts;
};
