import React, { Component } from 'react';
import './App.css';
import svgAttributes from '../helpers/svgInlineList';

class App extends Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
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
  handleCopySVGSnippet = () => {
    this.textareaRef.current.select();
    document.execCommand('copy');
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
            cols="30" rows="20"
            ref={this.textareaRef}
            placeholder="Paste your SVG snippet inside"
            value={this.state.svgSnippet}
            onChange={this.handleSetSvgText}
          />
          <div className="button-group">
            <button
              className="svgForm-button button bd-green btn-green"
              type="submit"
              value="Submit"
            >
              Covert
            </button>
            <button
              className="svgForm-button button bd-blue btn-blue"
              type="reset"
              value="Reset"
              onClick={this.handleCopySVGSnippet}
            >
              Copy
          </button>
            <button
              className="svgForm-button button bd-red btn-red"
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
