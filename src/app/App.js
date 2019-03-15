import React, { Component } from 'react';
import './App.css';
import svgAttributes from '../helpers/svgInlineList';
import Button from '../components/button/Button';

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
  handleClearSVGSnippet = () => {
    this.setState({ svgSnippet: "" })
  }
  handleConvertToInline = (event) => {
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
            <Button color="green" type="submit" title="Convert" />
            <Button
              color="blue" type="button" title="Copy"
              onClick={this.handleCopySVGSnippet}
            />
            <Button
              color="red" type="button" title="Clear"
              onClick={this.handleClearSVGSnippet}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
