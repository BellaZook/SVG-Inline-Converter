import React, { Component } from 'react';
import './App.css';
import svgAttributes from '../helpers/svgInlineList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svgSnippet: ""
    }
  }
  findAndReplace = () => {
    let modifiedString = "";
    const numberOfAttributes = svgAttributes.length;
    let SVGStringToBeModified = this.state.svgSnippet;

    if (SVGStringToBeModified.length > 0) {
      for (let index = 0; index < numberOfAttributes; index++) {
        const svgAttribute = svgAttributes[index].svgAttribute;
        const svgInlineAttribute = svgAttributes[index].svgInlineAttribute;
        let wordToBeReplaced = new RegExp(svgAttribute, "ig");
        let replacementWord = svgInlineAttribute;

        modifiedString = SVGStringToBeModified.replace(wordToBeReplaced, replacementWord);
        SVGStringToBeModified = modifiedString;
      }
      this.setState(() => {
        return { svgSnippet: SVGStringToBeModified };
      })
    }
  }
  handleSetSvgText = (event) => {
    this.setState({ svgSnippet: event.target.value })
  }
  clearSVGSnippet = () => {
    this.setState({ svgSnippet: "" })
  }
  handleConvertToInline = (event) => {
    console.log(event)

    event.preventDefault();
    this.findAndReplace();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Convert SVG Attribute to Inline</h1>
        </header>
        <form
          className="svgForm"
          onSubmit={this.handleConvertToInline}
        >
          <textarea
            name="text" id="svgText"
            cols="30" rows="10"
            placeholder="Paste your SVG snippet inside"
            value={this.state.svgSnippet}
            onChange={this.handleSetSvgText}
          />
          <div className="button-group">
            <button
              className="svgForm-button button bd-green"
              type="submit"
              value="Submit"
            >
              Covert
          </button>
            <button
              className="svgForm-button button bd-red"
              type="reset"
              value="Reset"
              onClick={this.clearSVGSnippet}
            >
              Clear
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
