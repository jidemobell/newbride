import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'

import {listPages} from '../../redux/actions/page'

export default function Page({toEdit}) {
  const dispatch = useDispatch()
	const pages = useSelector(state => state.page.pages)
	const [pageList] = useState((pages !== undefined) ? pages : [])
	// const [openEditor, setOpenEditor] = useState(false)

	const editAction = () => toEdit(true)
	
  useEffect(() => {
		dispatch(listPages())
 }, [dispatch])

  return (
    <section className="users" style={{ marginTop: "30px" }}>
      <div className="tabs is-boxed">
        <ul>
          <li className="is-active">
            <a href="http://fake">
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>Add User</span>
            </a>
          </li>
          <li>
            <a href="http://fake">
              <span className="icon is-small">
                <i className="fas fa-music" aria-hidden="true"></i>
              </span>
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>+</span>
            </a>
          </li>
        </ul>
      </div>

      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>name</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {pageList.map((page, i) => {
            return (
              <tr key={page.id}>
                <td>{i+1}</td>
                <td>{page.page_name}</td>
                {/* <td>{page.date_created}</td> */}
                <td>
                  <span className="flex-row">
                    <button className="button" style={{ marginRight: "8px" }} onClick={editAction}>
                      edit
                    </button>
                    {/* <button className="button">Delete</button> */}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
