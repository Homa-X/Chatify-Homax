import { getUser } from "../lib/auth";

export default function Profile() {
  const user = getUser();
  return (
    <section className="card">
      <h1>Your profile</h1>
      <div className="grid">
        <div><strong>Name</strong><div>{user?.name}</div></div>
        <div><strong>Email</strong><div>{user?.email}</div></div>
      </div>
      <p className="muted">This is a simple demo profile for the G grade.</p>
    </section>
  );
}
