interface FormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}
export interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
