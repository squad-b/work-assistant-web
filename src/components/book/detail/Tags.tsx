import './tags.scss';

import * as React from "react";

class Tag extends React.Component<any> {
  public render() {
    const {tag} = this.props;
    return (
      <li>#{tag}</li>
    )
  }
}

class Tags extends React.Component<any> {
  public render() {
    const {tags} = this.props;
    return (
      <ul className='tag-container'>
        {tags.map((tag:any, idx:number) => <Tag key={idx} tag={tag}/>)}
      </ul>
    )
  }
}

export default Tags;