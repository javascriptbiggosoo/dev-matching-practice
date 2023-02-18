import SelectedLanguage from "./components/SelectedLanguage.js";
import SearchInput from "./components/SearchInput.js";
import Suggestion from "./components/Suggestion.js";

import { fetchLanguages } from "./api.js";

class App {
  fetchedLanguages = [];
  selectedLanguages = [];
  constructor({ $target }) {
    this.selectedLanguage = new SelectedLanguage({
      $target,
      selectedLanguages: this.selectedLanguages,
    });

    this.searchInput = new SearchInput({
      $target,
      initialValue: "",
      onChange: async (keyword) => {
        if (keyword.length === 0) {
          this.setFetchedLanguages([]);
        } else {
          const suggestedLanguages = await fetchLanguages(keyword);
          // console.log(suggestedLanguages);
          this.setFetchedLanguages(suggestedLanguages);
        }
      },
    });

    this.suggestion = new Suggestion({
      $target,
      fetchedLanguages: this.fetchedLanguages,
      onSelect: (language) => {
        alert(language);
        const nextSelectedLanguages = [...this.selectedLanguages];

        const index = nextSelectedLanguages.findIndex(
          (selectedLanguage) => selectedLanguage === language
        );
        // 이미 선택된 언어인 경우, 맨 뒤로 보내버리는 처리
        if (index >= 0) {
          nextSelectedLanguages.splice(index, 1);
        }

        nextSelectedLanguages.push(language);

        this.setSelectedLanguages(nextSelectedLanguages);
      },
    });
  }

  setFetchedLanguages = (nextFetchedLanguages) => {
    this.fetchedLanguages = nextFetchedLanguages;
    this.suggestion.setFetchedLanguages(this.fetchedLanguages);
  };
  setSelectedLanguages = (nextSelectedLanguages) => {
    this.selectedLanguages = nextSelectedLanguages;
    this.selectedLanguage.setSelectedLanguages(this.selectedLanguages);
  };
}

export default App;
