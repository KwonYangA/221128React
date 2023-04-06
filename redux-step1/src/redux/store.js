//액션
export const increase = (mem_name) => ({
  type: "INCREASE",
  payload: mem_name,
});
export const decrease = (empVO) => ({
  type: "DECREASE",
  payload: empVO,
});
export const deptlist = (depts) => ({
  type: "DEPTLIST",
  payload: depts,
});

//초기상태 만들기
const initstate = {
  number: 0,
  mem_name: "양아양아야앙아아아",
  empVO: { empno: 7566, ename: "양순이 한방주까" },
  depts: [
    { DEPTNO: 10, DNAME: "우리집", LOC: "우리집" },
    { DEPTNO: 20, DNAME: "너네집", LOC: "너네집" },
    { DEPTNO: 30, DNAME: "아파트", LOC: "아파트" },
  ],
  auth: "",
  googleProvider: "",
};

//worker가 reducer함수로 전환
//액션의 결과를 필터링 - 리듀서
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "INCREASE":
      //return이 되면(호출한곳이 받는게 X), 즉시 view가 변경된다.
      return { ...state, number: state.number + 1, mem_name: action.payload };
    case "DECREASE":
      //return이 되면(호출한곳이 받는게 X), 즉시 view가 변경된다.
      return { ...state, number: state.number - 1, empVO: action.payload };
    case "DEPTLIST":
      //return이 되면(호출한곳이 받는게 X), 즉시 view가 변경된다.
      return { depts: action.payload };
    default:
      return { ...state }; //깊은 복사 새로운 객체 생성
  }
};

export default reducer;
