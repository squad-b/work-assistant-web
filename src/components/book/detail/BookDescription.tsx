import "./book-detail-description.scss";

import * as React from "react"

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import api from "../../../api"
import store from "../../../store";
import BookUpdatePopup from "../add/BookUpdatePopup";

class BookDescription extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isRentPopupOpened: false,
      isLongTerm: false,
      isUpdatePopupOpened: false
    }

    this.openRentPopup = this.openRentPopup.bind(this);
    this.closeRentPopup = this.closeRentPopup.bind(this);
    this.openUpdatePopup = this.openUpdatePopup.bind(this);
    this.closeUpdatePopup = this.closeUpdatePopup.bind(this);
  }

  rentBook = async () => {
    await api.post(`/rent/books/${this.props.book.id}`, {longTerm: this.state.isLongTerm})
      .then(response => {
        console.log(response)
        alert("대여 완료!")
      })
      .catch(error => {
        console.log("책 대여 API 사용중 에러 발생");
        console.log(error);
        alert("대여 실패!");
      })
    window.location.reload();
  }

  render() {
    const {book} = this.props;

    return (
      <div className="book-detail-description">
        <h1 className='title'>{book.title}</h1>
        <ul>
          <li>지은이 : <span>{book.author}</span></li>
          <li>출판사 : <span>{book.publisher}</span></li>
          <li>출판일 : <span>{book.publishingDate}</span></li>
          <li>등록일 : <span>{book.registrationDate}</span></li>
          <li>분류 : <span>{book.category}</span></li>
          <li>남은 수량 : <span>{book.stockQuantity > 0 ? book.stockQuantity : '0 (대여불가)'}</span></li>
          <span className={""}>{book.description}</span>
          <li>
            {book.stockQuantity > 0 ?
              <Button variant="outlined" className="rent-button" onClick={this.openRentPopup}>대여하기</Button> : ""}
            {store.getState().isAdmin ?
              <Button variant="outlined" className="update-button"
                      onClick={this.openUpdatePopup}>수정하기</Button> : ""}
          </li>
        </ul>
        <Dialog open={this.state.isRentPopupOpened == undefined ? false : this.state.isRentPopupOpened}
                onClose={this.closeRentPopup}>
          <DialogTitle id="alert-dialog-title">{"정말로 대여하시겠습니까?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <FormControlLabel control={
                <Checkbox color={"primary"} onChange={e => {
                  this.setState({isLongTerm: e.target.checked});
                }}/>} label="장기대여"/>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.rentBook} color="primary"> 네 </Button>
            <Button onClick={this.closeRentPopup} color="primary" autoFocus> 아니오 </Button>
          </DialogActions>
        </Dialog>
        <BookUpdatePopup open={this.state.isUpdatePopupOpened} book={this.props.book}
                         onClose={this.closeUpdatePopup}/>
      </div>
    )
  };

  private openRentPopup() {
    this.setState({isRentPopupOpened: true})
  };

  private closeRentPopup() {
    this.setState({isRentPopupOpened: false})
  };

  private openUpdatePopup() {
    this.setState({isUpdatePopupOpened: true})
  };

  private closeUpdatePopup() {
    this.setState({isUpdatePopupOpened: false})
  };
}

export default BookDescription;