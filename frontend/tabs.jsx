import React from 'react';

const TITLE_INDEX_MAP = {
  'Julian': 0,
  'Eric': 1,
  'Sue': 2,
  'Sai': 3,
  'Choi': 4,
  'Miso': 5,
  'Erica': 6,
  'Trevor': 7,
  'Nicky': 8
};

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.panes = this.props.panes;
    this.updateTab = this.updateTab.bind(this);
  }

  header(index) {
    return(
      <div>
        {this.panes.map((pane) => {
          return <button className="title" onClick={this.updateTab}>{pane.title}</button>
        })}
      </div>
    );
  }

  updateTab(e) {
    let tabTitle = e.target.innerHTML;
    this.setState({ index: TITLE_INDEX_MAP[tabTitle] });
  }

  displayContent(content) {
    return(
      <p>{content}</p>
    );
  }

  render() {
    let index = this.state.index;
    let content = this.panes[index].content;
    return(
      <div className="tabs">
        <div>
          {this.header(index)}
        </div>
        <div>
          {this.displayContent(content)}
        </div>
      </div>
    );
  }
}