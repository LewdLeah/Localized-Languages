# Localized Languages (LoLa)
Made by LewdLeah ❤️
## Overview
Localized Languages (LoLa) is a context overhaul script for playing AI Dungeon with your language of choice. LoLa also improves player inputs and supports (optional) [Auto-Cards](https://github.com/LewdLeah/Auto-Cards) integration. It’s free and open-source for anyone to use however they see fit. Creators are welcome to use LoLa for multilingual accessibility in their published scenarios.
## Gameplay Suggestions
- Adventure quality varies between different AI models, so try multiple
- Quality also varies between different languages, especially rare ones
- Use a response length of 200 tokens for the best results
- Romanized language variants "(abc)" are not necessarily more coherent
- Try to remain consistent by using only your selected language
- Writing a custom opening in your language is helpful, though optional
- The "Retry" button is your friend, especially at the start of your adventure
- The worst non-English models are Muse, Dynamic Small, and Wayfarer Small
- Among the free models, Madness is (seemingly) the best for multilingual writing
## Permission
LoLa is both free and open-source for anyone to use within their own scenarios or scripts, even including published works. You have my full permission to use, copy, or modify LoLa. Please enjoy! ❤️
## Scenario Script Installation Guide
1. Use the [AI Dungeon website](https://aidungeon.com/) on PC (or view as desktop if mobile-only)
2. [Create a new scenario](https://help.aidungeon.com/faq/what-are-scenarios) or edit one of your existing scenarios
3. Open the `DETAILS` tab at the top while editing your scenario
4. Scroll to the bottom and select `EDIT SCRIPTS`
5. Select the `Input` tab on the left
6. Delete all code within said tab
7. Copy and paste the following code into your empty `Input` tab:
```javascript
// Your "Input" tab should look like this
const modifier = (text) => {
  // Your other input modifier scripts go here (preferred)
  text = AutoCards("input", text);
  text = LocalizedLanguages("input", text);
  // Your other input modifier scripts go here (alternative)
  return { text };
};
modifier(text);
```
8. Select the `Context` tab on the left
9. Delete all code within said tab
10. Copy and paste the following code into your empty `Context` tab:
```javascript
// Your "Context" tab should look like this
const modifier = (text) => {
  // Your other context modifier scripts go here (preferred)
  [text, stop] = AutoCards("context", text, stop);
  text = LocalizedLanguages("context", text);
  // Your other context modifier scripts go here (alternative)
  return { text, stop };
};
modifier(text);
```
11. Select the `Output` tab on the left
12. Delete all code within said tab
13. Copy and paste the following code into your empty `Output` tab:
```javascript
// Your "Output" tab should look like this
const modifier = (text) => {
  // Your other output modifier scripts go here (preferred)
  text = AutoCards("output", text);
  // Your other output modifier scripts go here (alternative)
  return { text };
};
modifier(text);
```
14. Select the `Library` tab on the left
15. Delete all code within said tab
16. Open the Library code (hyperlink below) in a new browser tab
- [Library code](./src/library.js)
17. Copy the *full* code from the page above and paste into your empty `Library` tab
18. Click the big yellow `SAVE` button in the top right corner
19. And you're done!
20. Keep in mind that any adventures played from your scenario will include LoLa (this also applies retroactively)
## Useful Links
### Simple demo scenario
- [Localized Languages](https://play.aidungeon.com/scenario/AX2nXYIPzcKd/localized-languages)
### My AI Dungeon profile page
- [LewdLeah](https://play.aidungeon.com/profile/LewdLeah)
### Auto-Cards discussion thread
- [Auto-Cards script testing & feedback](https://discord.com/channels/903327676884979802/1347300413652734064/1347300413652734064)
- [AI Dungeon official Discord server invite](https://discord.gg/VJXwe7bj3A) (required to access the first link)
- Just ping me any time @LewdLeah to talk
