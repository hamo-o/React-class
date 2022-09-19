import { useSearchParams } from 'react-router-dom';

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  console.log(`id: ${id}, mode: ${mode}`);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button
        onClick={() => {
          setSearchParams({ who: 'ham' });
        }}
      >
        QS 바꾸기
      </button>
    </div>
  );
};

export default Edit;
