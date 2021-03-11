const config = {
  baseUrl: "http://localhost:8080/",
};

const searchBook = (query) => {
  // return axios.get(`${config.baseUrl}books?query=${query}`);
  return new Promise(function (resolve, reject) {
    const mockBookList = [
      {
        imageUrl : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
        title: '밥 잘하는법',
        publisher : '출판사',
        author: '김영한'
      },
      {
        imageUrl : 'http://image.kyobobook.co.kr/images/book/large/741/l9791185473741.jpg',
        title: '밥 잘하는법',
        publisher : '출판사',
        author: '김영한'
      },
    ]
    resolve(mockBookList)
  })
}

export {
  searchBook
}