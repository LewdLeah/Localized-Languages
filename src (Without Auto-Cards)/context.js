// Your "Context" tab should look like this
const modifier = (text) => {
  // Your other context modifier scripts go here (preferred)
  text = LocalizedLanguages("context", text);
  // Your other context modifier scripts go here (alternative)
  return { text };
};
modifier(text);
