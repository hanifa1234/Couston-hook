import React, { useState, useEffect } from 'react'
import useData from './useData';

function DataFAtch() {

const {data,isLoading,error} = useData("https://jsonplaceholder.typicode.com/todos");


  const loadingMessage = <p> data is loading .... </p>
  const errorMessage = <p> {error} </p>


  const todosElement =
  data &&
  data.map((todo) => {
      return <p key={todo.id}>  {todo.title} </p>;
    });



  return (
    <div>
      <h1> Todos mapping </h1>
      <div>
        {error && <>{errorMessage}</>}
        {isLoading && loadingMessage}
        {todosElement}
      </div>


    </div>
  )
}

export default DataFAtch