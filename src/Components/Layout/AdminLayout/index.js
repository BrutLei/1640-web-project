function AdminLayout({ children }) {
  return (
    <div>
      <h1 className="uppercase">Admin Layout</h1>
      <div className="content">{children}</div>
    </div>
  );
}

export default AdminLayout;
