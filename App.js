import { fetchLanguages } from "./api.js";
import SearchInput from "./SearchInput.js";

export default function App({ $target }) {
  this.state = {
    fetchLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    // TODO: 구현
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onchange: async (keyword) => {
      const languages = await fetchLanguages(keyword);
      console.log(languages);
    },
  });
}
