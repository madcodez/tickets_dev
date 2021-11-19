import React, { useEffect } from "react";
import Link from "next/link";
const Landing = ({ tickets }) => {
  const list = tickets.map((t) => (
    <tr key={t.id}>
      <td>{t.title}</td>
      <td>{t.price}</td>
      <td>{}</td>
      <td>
        {t.orderId ? (
          <p>Sold out</p>
        ) : (
          <Link href="/tickets/[ticketsId]" as={`/tickets/${t.id}`}>
            <a>View</a>
          </Link>
        )}
      </td>
    </tr>
  ));
  return (
    <div>
      <h1>Tickets</h1>
      {tickets.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">User</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      ) : (
        <h3> Sell tickets...</h3>
      )}
    </div>
  );
};

Landing.getInitialProps = async (context, client, currentUser) => {
  const response = await client.get("/api/tickets");

  return { tickets: response.data };
};
export default Landing;
