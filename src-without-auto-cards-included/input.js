// Your "Input" tab should look like this
const modifier = (text) => {
  // Your other input modifier scripts go here (preferred)
  text = LocalizedLanguages("input", text);
  // Your other input modifier scripts go here (alternative)
  return { text };
};
modifier(text);
