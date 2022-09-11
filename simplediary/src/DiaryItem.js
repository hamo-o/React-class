const DiaryItem = ({ onDelete, author, content, create_date, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {author}</span> | <span>감정점수 : {emotion}</span>
        <div className="date">{new Date(create_date).toLocaleString()}</div>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          console.log(id);
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
