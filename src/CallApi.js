import { useState } from 'react';

function Example() {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/products');
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData({ ...JSON.parse(xhr.responseText) });
      }
    };
    xhr.send();
    console.log(data);
  }

  return (
    <>
      <button onClick={handleClick}>Get Data</button>
      {data ? (
        data.products.map((product) => {
          return (
            <ul>
              <li key={product.id}>
                {product.title}
                <img alt={product.description}></img>
              </li>
            </ul>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Example;
