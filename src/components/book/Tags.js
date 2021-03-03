import * as React from "react";
import './tags.scss';

class Tag extends React.Component {
  render() {
    const {tag} = this.props;
    return (
      <li>#{tag}</li>
    )
  }
}

class Tags extends React.Component {
  render() {
    const {tags} = this.props;
    return (
      <ul className='tag-container'>
        {tags.map((tag, idx) => <Tag key={idx} tag={tag}/>)}
      </ul>
    )
  }
}

export default Tags;