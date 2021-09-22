import './book-popup.scss';

import * as React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import api from "../../../api";

class BookUpdatePopup extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      bookCategory: String,
      stockQuantity: Number,
      open: false,
      bookCategories: {
        "개발": "DEVELOP",
        "경영": "MANAGEMENT",
        "기획": "PLAN",
        "마케팅": "MARKETING",
        "자기계발": "SELF_IMPROVEMENT",
        "자격증": "LICENSE",
        "디자인": "DESIGN",
        "소설": "FICTION",
        "비소설": "NONFICTION"
      }
    }
  }

  public render() {
    const {open, book, onClose} = this.props;

    const initializeBook = () => {
      this.setState({
        bookCategory: this.state.bookCategories[book.category],
        stockQuantity: book.stockQuantity
      });
    }

    const onChangeCategory = (e: any) => {
      const bookCategory = e.target.value;
      this.setState({bookCategory: bookCategory});
    }

    const onChangeStockQuantity = (e: any) => {
      const stockQuantity = e.target.value;
      if (stockQuantity < 1) {
        alert("1 보다 큰 값을 넣어주세요");
        return;
      }

      this.setState({
        stockQuantity: stockQuantity
      })
    }

    const onClickUpdateButton = async (book: any) => {
      try {
        const res = await api.put(`/books/${book.id}`, {
          bookCategory: this.state.bookCategory,
          stockQuantity: this.state.stockQuantity
        });

        if (res.status === 200) {
          alert("수정 완료!");
          window.location.reload();
        }
      } catch (e) {
        if (e.response.status === 403) {
          alert("관리자만 수정할 수 있습니다.");
        }
      }
    }

    return (
      <Dialog open={open} fullWidth={true} maxWidth='sm' aria-labelledby={"book-add-popup-title"} onClose={onClose}
              onRendered={initializeBook}>
        <DialogTitle id={"book-add-popup-title"}>책 정보 수정</DialogTitle>
        <DialogContent>
          <form className={'book-popup-form'} noValidate>
            <DialogContentText>
              책 이름
            </DialogContentText>
            <img className={'book-thumbnail'}
                 src={book.imageUrl ? book.imageUrl : 'https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png'}/>
            <FormControl className={'form-control'}>
              <InputLabel htmlFor='category'>책 카테고리</InputLabel>
              <Select autoFocus value={this.state.bookCategory}
                      inputProps={{name: 'book-category', id: 'book-category'}} onChange={onChangeCategory}>
                <MenuItem value={'DEVELOP'}>개발</MenuItem>
                <MenuItem value={'MANAGEMENT'}>경영</MenuItem>
                <MenuItem value={'PLAN'}>기획</MenuItem>
                <MenuItem value={'MARKETING'}>마케팅</MenuItem>
                <MenuItem value={'SELF_IMPROVEMENT'}>자기계발</MenuItem>
                <MenuItem value={'LICENSE'}>자격증</MenuItem>
                <MenuItem value={'DESIGN'}>디자인</MenuItem>
                <MenuItem value={'FICTION'}>소설</MenuItem>
                <MenuItem value={'NONFICTION'}>비소설</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="standard-number"
              label="수량"
              type="number"
              value={this.state.stockQuantity}
              onChange={onChangeStockQuantity}
            />
          </form>
          <DialogActions>
            <Button onClick={() => {
              onClickUpdateButton(book)
            }}>
              수정하기
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
}

export default BookUpdatePopup