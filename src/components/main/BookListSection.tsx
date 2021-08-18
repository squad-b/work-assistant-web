import "./book-list-section.scss";

import BookCard from "./BookCard";
import React from "react";
import SearchBar from 'material-ui-search-bar';
import api from '../../api';

class BookListSection extends React.Component<any,any> {
  constructor(props:any) {
    super(props);

   

    this.state = {
      searchKeyword:"",
      bookList: [],
      bookListByCategory: [],
      bookCategory: {
        "DEVELOP": "개발",
        "MANAGEMENT": "경영",
        "PLAN": "기획",
        "MARKETING": "마케팅",
        "SELF_IMPROVEMENT": "자기계발",
        "LICENSE": "자격증",
        "DESIGN": "디자인",
        "FICTION": "소설",
        "NONFICTION": "비소설"
      },
      isSearched: false,
      noThumbnailImageUrl: "https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png" // TODO: 전역으로 관리하기(redux?) 
    }

    this.searchBook=this.searchBook.bind(this);
    this.onChangeKeyword=this.onChangeKeyword.bind(this);
  }

  public componentDidMount() {
    this.fetchBookList();
  }

  private fetchBookList() {
    api.get(`/books`)
    .then(response => {
      this.setState({bookList:response.data})
      this.setState({ bookListByCategory: this.getBookListByCategory(this.state.bookList) });
    })
    .catch(error => {
      console.log("책 목록 조회 API 사용중 에러 발생");
      console.log(error);
    })
  }

  private getBookListByCategory(bookList: any[]) {
    const bookListByCategory:any = {};
    bookList.forEach((book) => {
      const categories = book.category.split(",");

      if (book.imageUrl === null || book.imageUrl === undefined || book.imageUrl === "") {
        book.imageUrl = this.state.noThumbnailImageUrl;
      }
      categories.forEach((category: string | number) => {
        if (bookListByCategory[category] === undefined) {
          bookListByCategory[category] = [book];
        } else {
          bookListByCategory[category].push(book);
        }
      })
    })
    return bookListByCategory;
  }

  private searchBook(){
    const bookList = JSON.parse(JSON.stringify(this.state.bookList));

    for (let i = bookList.length - 1; i >= 0; i--) {
      if (!bookList[i].title.toLowerCase().includes(this.state.searchKeyword)) {
        bookList.splice(i, 1);
      }
    }

    this.setState({ bookListByCategory: this.getBookListByCategory(bookList) });
  }

  private onChangeKeyword(searchKeyword:string):void{
    this.setState({searchKeyword})
  }



  render() {
    return (
      <div>
        <div className="book-search-bar">
          <SearchBar
            placeholder="책 제목을 입력해주세요 : )"
            onChange={this.onChangeKeyword}
            onRequestSearch={this.searchBook} 
          />
        </div>
        {Object.keys(this.state.bookCategory).map((key, i) => {
          return (
            <div key={i}> 
              <div>
                <h3 className="book-category">{this.state.bookCategory[key]}</h3>
              </div>
              <div className="book-list-section">
                {this.state.bookListByCategory[key] === undefined ? "" : 
                  this.state.bookListByCategory[key].map((book: any, j:number) => {
                    return <BookCard book={book} key={j}/>
                  })}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default BookListSection;