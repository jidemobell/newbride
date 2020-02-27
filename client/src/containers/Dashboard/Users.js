import React from 'react'


export default function User(){
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
						<span style={{ fontSize: "20px", fontWeight: "bolder" }}>
							+
						</span>
					</a>
				</li>
			</ul>
		</div>

		<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
			<thead>
				<tr>
					<th>No</th>
					<th>name</th>
					<th>created</th>
					<th>action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>user1</td>
					<td>{Date.now()}</td>
					<td>
						<span className="flex-row">
							<button
								className="button"
								style={{ marginRight: "8px" }}
							>
								Update
							</button>
							<button className="button">Delete</button>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
	)
}