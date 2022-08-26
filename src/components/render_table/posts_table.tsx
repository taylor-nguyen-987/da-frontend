import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react/lib/DetailsList';
import './posts.css';

export interface PostInterface {
    id: number;
    author: string;
    content: string;
  }
  
export const PostTableList = (props: any) => {
    
    // Populate with Post Details
    const _allItems: PostInterface[] = [];

    for (let i=0; i<props.data.length; i++) {
        _allItems.push({
          id: props.data[i].id,
          author: props.data[i].author,
          content: props.data[i].content,
    });

    _allItems.sort((a: PostInterface, b: PostInterface) => {
      let anum = a.id as number;
      let bnum = b.id as number;
      return bnum - anum;
    });

    }
    let _columns: IColumn[];
    _columns = [
      { key: 'column1', name: 'Id', fieldName: 'id', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Author', fieldName: 'author', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Content', fieldName: 'content', minWidth: 100, maxWidth: 200, isResizable: true, isMultiline: true },
    ];

    return (
      <div className="det">
          <DetailsList
            items={_allItems}
            columns={_columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selectionPreservedOnEmptyClick={true}
          />
      </div>
    );
  }