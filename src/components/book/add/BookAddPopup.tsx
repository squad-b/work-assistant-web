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
import {CategoryDisplayText, CategoryMenus} from "../../../model/book/category/Category";

class BookAddPopup extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      bookCategory: 'DEVELOP',
      stockQuantity: 1,
      open: false
    }
  }

  public render() {
    const onChangeCategory = (e: any) => {
      const bookCategory = e.target.value
      this.setState({bookCategory: bookCategory})
    }

    const onChangeStockQuantity = (e: any) => {
      const stockQuantity = e.target.value
      if (stockQuantity < 1) {
        alert("1 보다 큰 값을 넣어주세요")
        return
      }
      this.setState({
        stockQuantity: stockQuantity
      })
    }

    const onClickRegisterButton = async (book: any) => {
      try {
        const res = await api.post("/books", {
          isbn: book.isbn.split(' ')[1],
          title: book.title,
          description: book.contents,
          author: book.authors[0],
          publishingDate: book.datetime,
          publisher: book.publisher,
          category: this.state.bookCategory,
          imageUrl: book.thumbnail,
          stockQuantity: this.state.stockQuantity
        });
        if (res.data.result === "SUCCESS") {
          alert("등록 완료")
          onClose()
        }
        if (res.data.result === "KEY_DUPLICATION") {
          alert("이미 등록된 책 입니다.")
        }
      } catch (e) {
        if (e.response.status === 403) {
          alert("관리자만 등록할 수 있습니다.")
        }
      }
    }

    const {open, book, onClose} = this.props

    return (
      <Dialog open={open} fullWidth={true} maxWidth='sm' aria-labelledby={"book-add-popup-title"} onClose={onClose}>
        <DialogTitle id={"book-add-popup-title"}>책 등록</DialogTitle>
        <DialogContent>
          <form className={'book-popup-form'} noValidate>
            <DialogContentText>
              책 이름
            </DialogContentText>
            <img className={'book-thumbnail'}
                 src={book ? book.thumbnail : 'https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png'}/>
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
              onClickRegisterButton(book)
            }}>
              등록하기
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }
}

export default BookAddPopup