interface FormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}
export interface SearchForm extends HTMLFormElement {
  readonly elements: FormElements;
}
