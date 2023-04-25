import React from 'react';

export default function DomTu() {
  return (
    <div>
      <ul>
        <li>sunday</li>
        <li>monday</li>
        <li>tuesday</li>
      </ul>
      <table>
        <thead>
          <tr>
            <td>One </td>
            <td>Two </td>
            <td>tdree </td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five </td>
            <td>Six </td>
            <td>Seven </td>
            <td>Eight</td>
          </tr>
        </thead>
      </table>
      <script>
        {/* Root Node */}
        {/* {console.log(document.documentElement)} */}
        {/* {console.log(document.body)} */}
        {/* {console.log(document.head)} */}
        {/* childrens */}
        {/* {console.log(document.body.childNodes)} */}
        {/* {console.log(document.body.children)} */}
        {/* for (node of document.body.children) {console.log(node)} */}
        {/* for (node of document.body.childNodes) {console.log(node)} */}
        {/* {console.log(document.body.firstChild)} */}
        {/* {console.log(document.body.lastChild)} */}
        {/* {console.log(document.body.firstElementChild)} */}
        {/* {console.log(document.body.lastElementChild)} */}
        {/* Array.from(document.body.children) */}
        {/* {
            const childrensOfBody = Array.from(document.body.children)
            console.log(childrensOfBody)
        } */}

        {/* Siblings */}
        {/* {console.log(document.body.children[0])} */}
        {/* const ulTag = document.body.children[0]
        const firstLi = document.body.children[0]
        const secondLi = document.body.children[1]
        console.log(secondLi.previousElementSibling);
        console.log(ulTag.nextElemetSibling) */}
        {/* const tableTag = document.body.children[1];
         console.log(tableTag) */}
      </script>
    </div>
  );
}
