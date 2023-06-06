import './App.css';
import AnotherCallbackExample from './Hooks/AnotherCallbackExample';
import ParentContext from './Hooks/Context/ParentContext';
import ParentWithUseCallback from './Hooks/ParentWithCallback';
import ParentWithoutUseCallback from './Hooks/ParentWithoutUseCallback';
import WithoutMemoParent from './Hooks/ReactMemo/WithoutMemoParent';
import UseEffect from './Hooks/UseEffect';
import UseMemo from './Hooks/UseMemo';
import UseRef from './Hooks/UseRef';
import WithoutUseMemo from './Hooks/WithoutUseMemo';
import ArrayObject from './RenderData/ArrayObject';
import RecursiveRender from './RenderData/RecursiveRender';
import PromiseComponent from './RenderData/promise';

const childOfChildData = [{
  name: "parent",
  children: [{
      name: "child 1",
      children: [{
          name: "grandChild1",
          children: [{
              name: "greatGrandChild1"
          }]
      }]
      },
      {
          name: "child 2",
          children: [{
              name: "grandChild2",
              children: [{
                  name: "greatGrand2"
              }]
          }]
      }
  ]
}]

function App() {
  return (
    <div>
      <ParentContext />
      <WithoutMemoParent />
      <AnotherCallbackExample />
      <ParentWithUseCallback />
      <ParentWithoutUseCallback />
      <WithoutUseMemo />
      <UseMemo />
      <UseRef />
      <ArrayObject />
      <PromiseComponent />
      <RecursiveRender data={childOfChildData} />
      <UseEffect name="Hello wolrd"/>
    </div>
  );
}

export default App;
