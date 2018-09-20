import * as React from 'react';
import { Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './PaginationControl.css';

interface IPaginationControl{
    showSizeChanger:boolean
    onChange:()=>{}
    current:number
    pageSize:number
    pageSizeOptions:number[]
    onShowSizeChange:()=>{}
    total:number
}
export default class PaginationControl extends React.Component<any, any> {
  public constructor(props){
    super(props);
    this.pageSizeChanged = this.pageSizeChanged.bind(this);
  }
  public render() {
    let numberOfPages = Math.ceil(this.props.total/this.props.pageSize);
    if(isNaN(numberOfPages)) {
      numberOfPages=0
    };
    const pages:any[] =[];
    for(let i=1; i<=numberOfPages;i++){
      pages.push(
        <PaginationItem active={i === this.props.current} key={i}>
                <PaginationLink onClick={e => {this.props.onChange(i)}} href="">
                  {i}
                </PaginationLink>
        </PaginationItem>
        )
    }
   return (
      <Pagination aria-label="Page navigation" className="paging-control">
      <PaginationItem disabled={this.props.current <= 1}>
        <PaginationLink
          onClick={e => this.props.onChange(this.props.current - 1)}
          previous={true}
          href=""
        />
        </PaginationItem>
        { pages}
        <PaginationItem disabled={this.props.current >= numberOfPages}>
        
        <PaginationLink
          onClick={e => this.props.onChange(this.props.current + 1)}
          next={true}
          href=""
        />
      </PaginationItem>
      <Input type="select" name="select" id="" onChange={this.pageSizeChanged}>
        {this.props.pageSizeOptions.map(i=><option key={i} value={i} >{i} / Page</option>)}     
      </Input>
    </Pagination>

  );
  }
  private pageSizeChanged(e){
    this.props.onShowSizeChange(1, e.target.value);
  }
}