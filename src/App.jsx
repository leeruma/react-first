import { useState, useRef } from 'react';
import './style.scss';

function App() {
	console.log('re-render');
	// 회전값에 적용할 증가하거나 감소할 숫자값을 Num이라는 빈 참조객체에 저장
	// 해당 값이 바뀌더라도 컴포넌트를 재랜더링 하지 않기 위함
	const Num = useRef(0);
	// 가상돔인 article요소를 담기위한 빈 참조객체 생성
	// 아직 실제적으로 만들어지지않은 돔을 임의로 담아서 이벤트호출할 때 불러오기 위함
	let Box = useRef(null);

	console.log(Num);

	const prev = () => {
		// Box.current에는 아직 생성되지 않은 가상돔 상태인 article을 가져와서 Num값이 변경될때마다 style 적용
		// 이때 Num값 자체가 state가 아닌 useRef로 담아놓은 값이기 때문에 해당값이 변경되더라도 컴포넌트가 재랜더링 되지않음
		Box.current.style.transform = `rotate(${--Num.current * 45}deg)`;
	};

	const next = () => {
		Box.current.style.transform = `rotate(${++Num.current * 45}deg)`;
	};

	return (
		<>
			<button onClick={prev}>prev</button>
			<button onClick={next}>next</button>

			{/* 참조객체에 가상돔요소를 연결할 때에는 ref={참조객체명`} */}
			<article ref={Box}></article>
		</>
	);
}

export default App;

/*
	state: 해당 값이 변경되면 무조건 컴포넌트 재랜더링됨, 이전랜더링 사이클의 값이 유지됨
	변수: 컴포넌트 안에 값을 만듬, 컴포넌트가 재랜더링 될때마다 값이 계속 초기화됨
	useRef: useRef를 통해서 참조객체를 만들고 해당 참조객체에 저장되어 있는 값은 컴포넌트가 재랜더링되더라도 값이 유지됨
		단 useRef의 값이 변경이 되더라도 컴포넌트가 재랜더링되지는 않음

	useRef실사용 사례1 
	- 모션작업을 할 때 특정 스타일값이 변경되더라도 컴포넌트를 불필요하게 재호출하고 싶지 않을때
	useRef실사용 사례2
	- 가상돔요소를 실제적으로 선택해서 가져와야 될 때
*/
