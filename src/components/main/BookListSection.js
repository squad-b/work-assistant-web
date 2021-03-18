import React from "react";
import BookCard from "./BookCard";
import "./book-list-section.scss";
import SearchBar from 'material-ui-search-bar';

class BookListSection extends React.Component {
  constructor(props) {
    super(props);
    // TODO: 인근, API 호출로 책 목록 가져오기
    this.state = {
      bookList: [
        {
          id: 1,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 1
        },
        {
          id: 2,
          title: "구글이 목표를 달성하는 방식 OKR",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/276/l9788947544276.jpg",
          category: "MANAGEMENT",
          stockQuantity: 2
        },
        {
          id: 3,
          title: "프레젠테이션 잘하는 법",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/427/l9788984053427.jpg",
          category: "PLAN,SELF_IMPROVEMENT",
          stockQuantity: 0
        },
        {
          id: 4,
          title: "구글이 목표를 달성하는 방식 OKR",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/276/l9788947544276.jpg",
          category: "MANAGEMENT",
          stockQuantity: 1
        },
        {
          id: 5,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 2
        },
        {
          id: 6,
          title: "구글이 목표를 달성하는 방식 OKR",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/276/l9788947544276.jpg",
          category: "MANAGEMENT",
          stockQuantity: 1
        },
        {
          id: 7,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 2
        },
        {
          id: 8,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 0
        },
        {
          id: 9,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 1
        },
        {
          id: 10,
          title: "구글이 목표를 달성하는 방식 OKR",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/276/l9788947544276.jpg",
          category: "MANAGEMENT",
          stockQuantity: 1
        },
        {
          id: 11,
          title: "프레젠테이션 잘하는 법",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/427/l9788984053427.jpg",
          category: "PLAN,SELF_IMPROVEMENT",
          stockQuantity: 1
        },
        {
          id: 12,
          title: "프레젠테이션 잘하는 법",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/427/l9788984053427.jpg",
          category: "PLAN,SELF_IMPROVEMENT",
          stockQuantity: 2
        },
        {
          id: 13,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 3
        },
        {
          id: 14,
          title: "자바 ORM 표준 JPA 프로그래밍",
          imageUrl: "https://simage.kyobobook.co.kr/images/book/large/330/l9788960777330.jpg",
          category: "DEVELOP",
          stockQuantity: 0
        },
        {
          id: 15,
          title: "광고의 8원칙",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/500/l9791197220500.jpg",
          category: "MARKETING",
          stockQuantity: 1
        },
        {
          id: 16,
          title: "세브란스 병원 이야기",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/531/l9788994519531.jpg",
          category: "NONFICTION",
          stockQuantity: 0
        },
        {
          id: 17,
          title: "광고의 8원칙",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/500/l9791197220500.jpg",
          category: "MARKETING",
          stockQuantity: 0
        },
        {
          id: 18,
          title: "멋진 신세계",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/725/l9788973814725.jpg",
          category: "FICTION",
          stockQuantity: 2
        },
        {
          id: 19,
          title: "아이디어가 고갈된 디자이너를 위한 책 : 로고 디자인 편",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/050/l9791190357050.jpg",
          category: "DESIGN",
          stockQuantity: 0
        },
        {
          id: 20,
          title: "컴퓨터활용능력 1급 실기(2021)",
          imageUrl: "http://image.kyobobook.co.kr/images/book/large/152/l9791165213152.jpg",
          category: "LICENSE",
          stockQuantity: 0
        }
      ],
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
      isSearched: false
    }

    this.state.bookListByCategory = this.getBookListByCategory(this.state.bookList);
  }

  getBookListByCategory = (bookList) => {
    const bookListByCategory = {};
    bookList.forEach((book) => {
      const categories = book.category.split(",");

      categories.forEach((category) => {
        if (bookListByCategory[category] === undefined) {
          bookListByCategory[category] = [book];
        } else {
          bookListByCategory[category].push(book);
        }
      })
    })
    return bookListByCategory;
  }

  searchBook = (e) => {
    const bookList = JSON.parse(JSON.stringify(this.state.bookList));

    for (let i = bookList.length - 1; i >= 0; i--) {
      if (!bookList[i].title.includes(e)) {
        bookList.splice(i, 1);
      }
    }

    this.setState({ bookListByCategory: this.getBookListByCategory(bookList) });
  }

  render() {
    return (
      <div>
        <div className="book-search-bar">
          <SearchBar
            placeholder="책 제목을 입력해주세요 : )"
            autoFocus
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
                  this.state.bookListByCategory[key].map((book, j) => {
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