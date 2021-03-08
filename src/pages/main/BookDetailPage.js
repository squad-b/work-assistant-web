import * as React from "react";
import Book from "../../domain/book/Book";
import BookDetail from "../../components/book/detail/BookDetail";
import Layout from "../../components/common/Layout";

class BookDetailPage extends React.Component {
  render() {
    const bookId = this.props.match.params.bookId;
    const book = new Book(bookId,
      '9788956749013',
      '자바 ORM 표준 JPA 프로그래밍(에이콘 오픈 소스 프로그래밍 시리즈)',
      '김영한',
      '정보문화사',
      'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F838090%3Ftimestamp%3D20210308140229',
      1,
      "리액트를 시작하기 전에 개발 환경을 준비하는 과정부터 시작하여 예제 파일을 실행하는 방법을 안내한다. 입문부터 초급, 중급, 활용, 실무까지 5개의 파트로 나누어 단계별로 실력을 향상시킬 수 있게 구성하였다. 리액트에서 사용하는 함수와 문법, 웹 브라우저에 화면을 띄워보기로 시작되는 이 책은 변수를 관리하고 컴포넌트 유형별로 장단점을 비교하고, 태그 사용 및 이벤트 처리 구현도 할 수 있다. 또한 외부 api를 활용하는 부분도 집중적으로 다루고...",
      '2020-01-24',
      '2020-02-24');
    return (
      <div>
        <Layout>
          <BookDetail book={book}/>
        </Layout>
      </div>
    );
  }
}

export default BookDetailPage;