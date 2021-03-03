import React from "react";
import BookCard from "./BookCard";
import "./book-list-section.scss";

class BookListSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
            id: 1,
            title: "밥 잘하는 법",
            subtitle: "밥이 이렇게 맛있다고?",
            thumbnail: "http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg",
            categories: ["개발", "밥"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 2,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "유인근",
            startDate: "",
            endDate: ""
        },
        {
            id: 3,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 4,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 5,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "유인근",
            startDate: "",
            endDate: ""
        },
        {
            id: 6,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 7,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 8,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 9,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        },
        {
            id: 10,
            title: "돈의 속성",
            subtitle: "최상위 부자가 말하는 돈에 대한 모든 것",
            thumbnail: "http://image.yes24.com/goods/90428162/800x0",
            categories: ["돈", "부자"],
            borrower: "",
            startDate: "",
            endDate: ""
        }
      ]
    }
  }  

  componentDidMount() {
    // API 호출로 bookList 데이터 셋팅 예정
    // this.state.bookList = axios.get();
  }

  render() {
    return (
      <div className="book-list-section">
        {this.state.bookList.map((book, i) => {
          return <BookCard book={book} key={i}/>
        })}
      </div>
    );
  }
}

export default BookListSection;