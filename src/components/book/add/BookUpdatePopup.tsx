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
import {Categories, CategoryDisplayText, CategoryMenus} from "../../../model/book/category/Category";

interface BookUpdatePopupState {
  bookCategory: string,
  stockQuantity: number,
  open: boolean,
}

class BookUpdatePopup extends React.Component<any, BookUpdatePopupState> {
  state: BookUpdatePopupState = {
    bookCategory: '',
    stockQuantity: 0,
    open: false
  }

  public render() {
    const {open, book, onClose} = this.props;

    const initializeBook = () => {
      this.setState({
        bookCategory: Categories[book.category],
        stockQuantity: book.stockQuantity
      });
    }

    const onChangeCategory = (e: any) => {
      const bookCategory = e.target.value;
      this.setState({bookCategory});
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
      } catch (e: any) {
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
                {CategoryMenus.map((category) => <MenuItem
                  value={category}>{CategoryDisplayText[category]}</MenuItem>)}
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