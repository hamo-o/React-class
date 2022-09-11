import { useState } from 'react';

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
  };

  //   const [author, setAuthor] = useState('');
  //   const [content, setContent] = useState('');

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          type="text"
          name="author"
          //   value={author}
          value={state.author}
          onChange={(e) => {
            // console.log(e.target.value);
            // console.log(e.target.name);
            // setAuthor(e.target.value);
            setState({
              ...state,
              //   content: state.content,
              author: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <textarea
          name="content"
          rows={10}
          cols={30}
          //   value={content}
          value={state.content}
          onChange={(e) => {
            // setContent(e.target.value);
            setState({
              ...state,
              //   author: state.author,
              content: e.target.value,
            });
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default DiaryEditor;
