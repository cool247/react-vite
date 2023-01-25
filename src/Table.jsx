let arr = [
  {
    a: 1,
    b: 2,
    c: 3,
    child: [
      { e: 5, f: 6 },
      { e: 15, f: 16 },
      { e: 115, f: 116 },
    ],
  },
  {
    a: 10,
    b: 20,
    c: 30,
    child: [
      { e: 50, f: 60 },
      { e: 150, f: 160 },
    ],
  },
  { a: 100, b: 200, c: 300, child: [{ e: 500, f: 600 }] },
];
import React from "react";
export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Product</th>
          <th>Country</th>
          {/* <th>Pin-code</th> */}
          <th>Status</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((el, i) => {
          return (
            <React.Fragment key={i}>
              <tr>
                <td rowspan={el.child.length + 1}>{el.a}</td>
                <td rowspan={el.child.length + 1}>{el.b}</td>
                <td rowspan={el.child.length + 1}>{el.c}</td>
              </tr>
              {el.child.map((childEl, ii) => (
                <tr key={ii + i}>
                  {/* <td>{childEl.d}</td> */}
                  <td>{childEl.e}</td>
                  <td>{childEl.f}</td>
                </tr>
              ))}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
