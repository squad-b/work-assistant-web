import * as React from "react";
import './book-add-popup.scss';
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

class BookAddPopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookCategory: 'DEVELOP',
      stockQuantity: 1
    }
  }

  render() {
    const {open} = this.props
    const onChange = (e) => {
      const bookCategory = e.target.value
      this.setState({bookCategory : bookCategory})
    }

    return (
        <Dialog open={open} fullWidth={true} maxWidth='sm' aria-labelledby={"book-add-popup-title"}>
          <DialogTitle id={"book-add-popup-title"}>책 등록</DialogTitle>
          <DialogContent>
            <form className={'book-add-popup-form'} noValidate>
              <DialogContentText>
                책 이름
              </DialogContentText>
              <img className={'book-thumbnail'} src={'https://resource.miricanvas.com/image/common/design-history-preview-placeholder.png'}/>
              <FormControl className={'form-control'}>
                <InputLabel htmlFor='category'>책 카테고리</InputLabel>
                <Select autoFocus value={this.state.bookCategory} inputProps={{name:'book-category', id:'book-category'}} onChange={onChange}>
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
              />
            </form>
            <DialogActions>
              <Button>
                등록하기
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
    )
  }
}

export default BookAddPopup