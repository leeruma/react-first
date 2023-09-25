import { useState } from 'react';
import './style.scss';

function App() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);
	let newColors = [...Colors];
	newColors[0] = 'hotpink';
	return (
		<>
			{Colors.map((color, idx) => (
				<button style={{ backgroundColor: color }} key={idx}>
					{color}
				</button>
			))}
			<button onClick={() => setColors(newColors)}>색상변경</button>
		</>
	);
}

export default App;
/*
	hooks
	- 리액트 16버전부터 새로나온 개념으로 리액트에서 자주쓰이는 상태관리, 생명주기에 관련된 내용들을 hook이라는 형태의 내장함수로 편의기능을 제공
	- hook이 나오기 전까지는 class방식으로 컴포넌트를 생성 및 기능확장을 비효율적으로 처리

	자주쓰는 hook 3대장
	useState - 컴포넌트의 화면의 랜더링을 담당하는 중요한 정보값 관리
	useEffect - 컴포넌트의 생명주기에 관련된 함수 (생성, 변화, 소멸)
	useRef - 컴포넌트 안쪽에서 특정 값을 참조객체에 담을때

	리액트의 성능관리를 위한 hook
	리액트에서의 memoization - 메모리점유율을 늘려서 성능을 개선
	자바스크립트는 기본적으로 Garbage collector에 의해서 메모리가 관리됨
	아래의 hook을 통해서 특정 값을 강제 메모이제이션 처리하면 가비지컬렉터에서 제외함
	memo (컴포넌트 자체를 메모이제이션)
	useCallback (컴포넌트 안쪽의 핸들러 함수 자체를 메모이제이션)
	useMemo (특정 핸들러함수의 리턴값을 메모이제이션)
*/
